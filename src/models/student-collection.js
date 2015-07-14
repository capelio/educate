import app from 'ampersand-app'
import Collection from 'ampersand-rest-collection'
import Student from 'models/student'
import tokenMixin from 'helpers/token-mixin'

export default Collection.extend(tokenMixin, {
  model: Student,

  url () {
    return app.config.apiRoot + '/students'
  }
})
