var fs = require('fs')
var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/app/app.js',
  out: 'public',
  clearBeforeBuild: true,
  isDev: process.env.NODE_ENV !== 'production',

  html: function (context) {
    var path = './src/index.html'
    var opts = { encoding: 'utf8' }
    var file = fs.readFileSync(path, opts)

    return {
      '200.html': file,
      'index.html': file
    }
  }
})
