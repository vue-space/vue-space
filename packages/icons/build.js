const fs = require('fs').promises;
const util = require('util');
const mkdirp = util.promisify(require('mkdirp'));
const rimraf = util.promisify(require('rimraf'));
const path = require('path');
const SVGO = require('svgo');
const compiler = require('vue-template-compiler');
const { camelCase, upperFirst } = require('lodash');

const rawDir = 'raw';
const outputDir = 'dist';

const fullRawDir = path.join(__dirname, rawDir);
const fullOutputDir = path.join(__dirname, outputDir);
const typeDir = path.join(outputDir, 'types');
const typeOutputDir = path.join(typeDir, outputDir);

buildAllSVG('vs-icon', fullRawDir, fullOutputDir, typeOutputDir);

const svgoConfig = {
  onlyMatchedOnce: false,
  plugins: [
    {
      removeXMLNS: true
    },
    {
      removeAttrs: { attrs: '(stroke|fill)' }
    },
    { removeStyleElement: true },
    {
      addAttributesToSVGElement: {
        attribute: {
          fill: 'currentColor',
          width: '1em',
          height: '1em'
        }
      }
    }
  ]
};

const svgo = new SVGO(svgoConfig);

async function buildAllSVG(prefix, inputDir, outputDir, typeRawDir) {
  try {
    await rimraf(outputDir);
    console.log('clear output dir');
  } catch (e) {
    console.log('no cache');
  }

  await mkdirp(outputDir);
  await mkdirp(typeRawDir);

  const files = await collectAllSubFilePath(inputDir);
  for (const filePath of files) {
    const file = await fs.readFile(filePath);
    const optimizedSVG = await (await svgo.optimize(file)).data;
    const svgRender = compiler
      .compile(`<i aria-label="icon" class="vs-icon">${optimizedSVG}</i>`)
      .render.replace(/_/g, '_vm._');

    const fileBasename = path.basename(filePath, '.svg');
    const filename = upperFirst(camelCase(`${prefix}-${fileBasename}`));

    fs.writeFile(
      path.join(outputDir, `${filename}.js`),
      `export default {
  functional: true,
  render(_h,_vm){
    ${removeWith(svgRender)}
  }
}
`
    );

    fs.writeFile(
      path.join(outputDir, `${filename}.d.ts`),
      `declare const ${filename}: any;
export default ${filename};
`
    );

    fs.appendFile(
      path.join(outputDir, 'index.js'),
      `export { default as ${filename} } from './${filename}'
`
    );
    fs.appendFile(
      path.join(outputDir, 'index.d.ts'),
      `export { default as ${filename} } from './${filename}'
`
    );
  }
}

function removeWith(str) {
  const regex = /^with\(this\)\{(.*)}$/;
  return regex.exec(str)[1];
}

/**
 * get all sub file path
 * @param {string} dirPath
 * @return {Promise<string[]>} allFilePath
 */
async function collectAllSubFilePath(dirPath) {
  const fileList = await fs.readdir(dirPath);
  const allFiles = [];

  for (const filename of fileList) {
    const filePath = path.join(dirPath, filename);
    const fileStat = await fs.stat(filePath);
    if (fileStat.isDirectory()) {
      const subFileList = await collectAllSubFilePath(filePath);
      allFiles.push(...subFileList);
    } else {
      allFiles.push(filePath);
    }
  }
  return allFiles;
}
