import app from 'ampersand-app'

export default {
  ajaxConfig () {
    if (app.me.token) {
      return {
        headers: {
          Authorization: app.me.token
        }
      }
    }
  }
}
