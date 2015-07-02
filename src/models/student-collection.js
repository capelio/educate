import app from 'ampersand-app'
import Collection from 'ampersand-rest-collection'
import Student from 'models/student'

export default Collection.extend({
  url () {
    return app.config.apiRoot + '/students'
  },

  model: Student
})
