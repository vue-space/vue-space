import resolve from "rollup-plugin-node-resolve";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { camelCase } from "lodash";
import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { name, version, license } from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const base = path.resolve(__dirname, ".");
const src = path.resolve(base, "src");
const dist = path.resolve(base, "dist");

const banner = `/*!
 * Vue Space ${version}
 * @license ${license}
 */
`;

export default {
  input: path.resolve(src, "index.tsx"),
  output: [
    {
      format: "umd",
      file: path.resolve(dist, `${name}.js`),
      name: camelCase(name),
      sourcemap: true,
      banner
    },
    {
      format: "cjs",
      name: camelCase(name),
      file: path.resolve(dist, `${name}.common.js`),
      sourcemap: true,
      banner
    },
    {
      format: "es",
      file: path.resolve(dist, `${name}.esm.js`),
      sourcemap: true,
      banner
    }
  ],
  external: [],
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [autoprefixer, cssnano],
      sourceMap: true,
      extract: true,
      extensions: [".scss", ".css"]
    }),
    babel({ extensions, include: ["src/**/*"], exclude: "node_modules/**" }),
    external(),
    resolve({ extensions })
  ]
};
