// note that babel.config.js only allows from babel v7.8.0
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~': './src/',
        },
      },
    ],
  ],
}
