var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/app/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production'
})
