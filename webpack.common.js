const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '.env.development') });

const _ = require('lodash');
const fp = require('lodash/fp');
const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const getReactAppVars = () => {
  return fp.reduce(
    (env, k) => ({
      ...env,
      ...(/^REACT_APP_/.test(k) ? { [k]: JSON.stringify(process.env[k]) } : {}),
    }),
    {}
  )(_.keys(process.env));
};

module.exports = ({ mode }) => ({
  entry: [path.resolve(__dirname, 'src/index')],
  output: {
    filename: `static/js/[name]${
      mode === 'development' ? '' : '.[hash]'
    }.bundle.js`,
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    plugins: [
      // prevent importing files outside of src and node_modules
      new ModuleScopePlugin(path.resolve(__dirname, 'src'), [
        path.resolve(__dirname, 'package.json'),
      ]),
    ],
  },
  module: {
    rules: [
      // add eslint to webpack
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        enforce: 'pre',
        loader: require.resolve('eslint-loader'),
        options: {
          configFile: path.resolve(__dirname, '.eslintrc'),
        },
      },
      {
        oneOf: [
          // compile javascript with babel
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              // improve cache restore speed at the expense of disk space
              cacheCompression: false,
            },
          },
          // include images
          {
            loader: require.resolve('file-loader'),
            include: /\.(jpg|png|svg)$/,
            options: {
              name: `[name]${mode === 'development' ? '' : '.[hash]'}.[ext]`,
              outputPath: 'static/assets',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // generate index.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    // set global variables
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      ...getReactAppVars(),
    }),
    // add additional info to module not found errors
    new ModuleNotFoundPlugin(__dirname),
    // warn if import and filename have different cases
    new CaseSensitivePathsPlugin(),
    // restart dev server if node modules change
    new WatchMissingNodeModulesPlugin(path.resolve(__dirname, 'node_modules')),
    // exclude large files from the build
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
});
