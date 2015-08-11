import app from 'ampersand-app'
import Collection from 'ampersand-rest-collection'
import request from 'superagent'

import Student from 'models/student'
import tokenMixin from 'helpers/token-mixin'

export default Collection.extend(tokenMixin, {
  model: Student,

  url () {
    return app.config.apiRoot + '/students'
  },

  fetchFunded (callback) {
    request.get(this.url())
      .query({ funded: true })
      .end(function (err, res) {
        if (err) return callback(err)

        app.students.add(res.body)
        callback(null)
      })
  },

  fetchUnfunded (callback) {
    request.get(this.url())
      .query({ funded: false })
      .end(function (err, res) {
        if (err) return callback(err)

        app.students.add(res.body)
        callback(null)
      })
  }
})
