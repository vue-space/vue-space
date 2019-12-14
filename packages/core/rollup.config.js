import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { camelCase, kebabCase } from 'lodash';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const base = path.resolve(__dirname, '.');
const src = path.resolve(base, 'src');
const dist = path.resolve(base, 'dist');

const name = 'vue-space';

const kebabCaseName = kebabCase(name);
const camelCaseName = camelCase(name);

export default {
  input: path.resolve(src, 'index.tsx'),
  output: [
    {
      format: 'umd',
      file: path.resolve(dist, `${kebabCaseName}.js`),
      name: camelCaseName,
      sourcemap: true
    },
    {
      format: 'cjs',
      name: camelCaseName,
      file: path.resolve(dist, `${kebabCaseName}.common.js`),
      sourcemap: true
    },
    {
      format: 'es',
      file: path.resolve(dist, `${kebabCaseName}.esm.js`),
      sourcemap: true
    }
  ],
  external: [],
  plugins: [
    sizeSnapshot(),
    peerDepsExternal(),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      configFile: '../../babel.config.json'
    }),
    resolve({ extensions })
  ]
};
