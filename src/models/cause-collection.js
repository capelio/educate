import app from 'ampersand-app'
import Collection from 'ampersand-rest-collection'
import request from 'superagent'

import Cause from 'models/cause'
import tokenMixin from 'helpers/token-mixin'

export default Collection.extend(tokenMixin, {
  model: Cause,

  url () {
    return app.config.apiRoot + '/causes'
  },

  fetchFunded (callback) {
    request.get(this.url())
      .query({ funded: true })
      .end(function (err, res) {
        if (err) return callback(err)

        app.causes.add(res.body)
        callback(null)
      })
  },

  fetchUnfunded (callback) {
    request.get(this.url())
      .query({ funded: false })
      .end(function (err, res) {
        if (err) return callback(err)

        app.causes.add(res.body)
        callback(null)
      })
  }
})
