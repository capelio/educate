import app from 'ampersand-app'
import Collection from 'ampersand-rest-collection'
import Donation from 'models/donation'
import tokenMixin from 'helpers/token-mixin'

export default Collection.extend(tokenMixin, {
  model: Donation,

  url () {
    return app.config.apiRoot + '/students/' + this.parent.id + '/donations'
  }
})
