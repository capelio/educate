import app from 'ampersand-app'
import Collection from 'ampersand-rest-collection'
import Donation from 'models/donation'

export default Collection.extend({
  model: Donation,

  url () {
    return app.config.apiRoot + '/students/' + this.parent.id + '/donations'
  }
})
