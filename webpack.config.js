var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/app/app.js',
  out: 'public',
  clearBeforeBuild: true,
  isDev: process.env.NODE_ENV !== 'production',

  html: function (context) {
    var template = context.defaultTemplate()
    template = template.replace(/<body>/, '<body><div id="app"></div>')

    return {
      '200.html': template,
      'index.html': template
    }
  }
})
