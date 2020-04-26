const path = require('path');
const webpack = require('webpack');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const common = require('./webpack.common');

const commonConfig = common({
  mode: 'development',
});

module.exports = {
  ...commonConfig,
  mode: 'development',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    ...commonConfig.entry,
  ],
  devtool: 'cheap-module-source-map',
  plugins: [...commonConfig.plugins, new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port: 3002,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: {
      disableDotRule: true,
      index: '/',
    },

    // for webpackHotDevClient
    hot: true,
    transportMode: 'ws',
    injectClient: false,

    watchOptions: {
      // reduce cpu usage from polling these files
      ignored: ignoredFiles(path.join(__dirname, 'src')),
    },
    before(app, server) {
      app.use(evalSourceMapMiddleware(server));

      // set up error overlay
      app.use(errorOverlayMiddleware());
    },
    after(app) {
      app.use(redirectServedPath('/'));
    },
  },
};
