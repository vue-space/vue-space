const path = require("path");
const autoprefixer = require("autoprefixer")({
  overrideBrowserslist: ["last 2 versions", "ie >= 10"]
});

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // config.module.rules.push({
  //   test: /\.stories\.js$/,
  //   include: path.resolve(__dirname, "../stories"),
  //   loader: require.resolve("@storybook/addon-storysource/loader"),
  //   options: {
  //     prettierConfig: {
  //       parser: "babel" // Remove warnings when loading story source files
  //     }
  //   },
  //   enforce: "pre"
  // });

  config.module.rules.push({
    test: /\.(s){0,1}css$/,
    loaders: [
      "style-loader",
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: path.resolve(__dirname, "../.storybook")
          }
        }
      },
      "sass-loader"
    ],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: [
      {
        loader: "babel-loader"
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx", ".js", ".vue", ".json");
  let vueLoaderConfig = config.module.rules.find(item => {
    return item.loader && item.loader.indexOf("vue-loader") > -1;
  });

  vueLoaderConfig.options = {
    ...vueLoaderConfig.options,
    postcss: [autoprefixer]
  };

  return config;
};
