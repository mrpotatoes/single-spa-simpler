const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

const mergeRules = {
  module: {
    rules: {
      test: "match",
      include: "replace",
      exclude: "replace",
      use: "replace",
    },
  },
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "andric",
    projectName: "locally-developed",
    webpackConfigEnv,
    argv,
  });

  return mergeWithRules(mergeRules)(defaultConfig, {
    // customize the webpack config here
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]",
                },
              },
            },
          ],
        },
      ],
    },
  });
};
