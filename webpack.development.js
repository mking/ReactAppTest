const path = require('path');
const webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const common = require('./webpack.common');

const commonConfig = common({
  mode: 'development',
});

module.exports = {
  ...commonConfig,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    ...commonConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 3002,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      // reduce cpu usage from polling these files
      ignored: ignoredFiles(path.join(__dirname, 'src')),
    },
  },
};
