const path = require('path')
const Testplugin = require('./plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].chunk.js'
  },
  plugins: [new Testplugin()]
}
