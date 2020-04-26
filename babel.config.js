module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        alias: {
          '@app/src': './src',
        },
      },
    ],
  ],
};
