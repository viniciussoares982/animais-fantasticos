const path = require('path')

module.exports = {
  entry: ['whatwg-fetch', '@babel/polyfill', './js/script.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
  },
  resolve: {
    preferRelative: true,
  },
}
