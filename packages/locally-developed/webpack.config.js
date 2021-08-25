const { mergeWithRules } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')
const StandaloneSingleSpaPlugin = require('standalone-single-spa-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const mergeRules = {
  plugins: 'replace',
  devServer: {
    static: {
      directory: 'replace',
    }
  },
  module: {
    rules: {
      test: 'match',
      include: 'replace',
      exclude: 'replace',
      use: 'replace',
    },
  },
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'andric',
    projectName: 'locally-developed',
    webpackConfigEnv,
    argv,
  })

  return mergeWithRules(mergeRules)(defaultConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'standalone/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName: 'standalone',
        },
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'standalone'),
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            },
          ],
        },
      ],
    },
  });
};
