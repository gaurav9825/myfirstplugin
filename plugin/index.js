const chalk = require('chalk')

/**
 * See the webpack docs for more information about plugins:
 * https://github.com/webpack/docs/wiki/how-to-write-a-plugin
 */

function Testplugin (options) {
  // Setup the plugin instance with options...
}

Testplugin.prototype.apply = function (compiler) {
  compiler.plugin(['run', 'watch-run'], function (compilation, callback) {
    const pinkMessage = chalk.magenta('\n\nHello World\n\n')
    console.log(pinkMessage)
    // callback()
  })
}

module.exports = Testplugin
