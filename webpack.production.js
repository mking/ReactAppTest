const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

const commonConfig = common({
  mode: 'production',
});

module.exports = {
  ...commonConfig,
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    ...commonConfig.plugins,
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'public/favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: {
        source: false,
      },
    }),
  ],
};
