import app from 'ampersand-app'
import config from 'app/config'
import Router from 'app/router'
import Me from 'models/me'
import StudentCollection from 'models/student-collection'

/*
 * Webpack takes care of injecting styles for us, so we
 * can safely ignore standard's no-unused-vars rule here.
 */
import styles from 'styles/app.styl' // eslint-disable-line no-unused-vars

// Expose app to browser console for easier debugging
window.app = app

app.extend({
  init () {
    this.me = new Me()
    this.students = new StudentCollection()

    this.router = new Router()
    this.router.history.start()
  },

  config: config
})

app.init()
