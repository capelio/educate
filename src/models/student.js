import app from 'ampersand-app'
import Model from 'ampersand-model'
import DonationCollection from 'models/donation-collection'

export default Model.extend({
  urlRoot () {
    return app.config.apiRoot + '/students'
  },

  props: {
    id: 'string',
    name: 'string',
    story: 'string',
    goal: 'number',

    profileImage: {
      type: 'string',
      default: 'default-profile-image.png'
    }
  },

  collections: {
    donations: DonationCollection
  },

  derived: {
    appUrl: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id
      }
    },

    donateUrl: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/donate'
      }
    },

    editUrl: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/edit'
      }
    },

    profileImageUrl: {
      deps: ['profileImage'],

      fn () {
        return app.config.imagesRoot + '/' + this.profileImage
      }
    }
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.donations.fetch()
  }
})
