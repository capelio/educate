import app from 'ampersand-app'

import config from 'app/config'
import Router from 'app/router'
import Me from 'models/me'
import CauseCollection from 'models/cause-collection'
import trace from 'app/trace'

// Require our CSS styles. Webpack takes care of turning the
// Stylus in CSS as well as link'ing the files in index.html
require('styles/app.styl')
require('octicons/octicons/octicons.css')

// Expose app to browser console for easier debugging
window.app = app

app.extend({
  init () {
    this.me = new Me()
    this.causes = new CauseCollection()

    this.router = new Router()
    this.router.history.start()
  },

  config: config,
  trace: trace
})

app.init()
