import app from 'ampersand-app'
import Model from 'ampersand-model'

import DonationCollection from 'models/donation-collection'
import tokenMixin from 'helpers/token-mixin'

export default Model.extend(tokenMixin, {
  urlRoot () {
    return app.config.apiRoot + '/students'
  },

  props: {
    id: 'string',
    name: 'string',
    story: 'string',
    goal: 'number',
    createdAt: 'string',
    updatedAt: 'string',

    funded: {
      type: 'boolean',
      default: false
    },

    profileImage: {
      type: 'string',
      default: 'default-profile-image.png'
    }
  },

  collections: {
    donations: DonationCollection
  },

  derived: {
    /*
     * Route properties are URLs for navigating within the application.
     * They do NOT point to the REST API.
     */

    viewRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id
      }
    },

    createDonationRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/donations/create'
      }
    },

    thankYouRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/thankyou'
      }
    },

    donateRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/donate'
      }
    },

    editRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/edit'
      }
    },

    manageRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/manage'
      }
    },

    manageDonationsRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/manage/donations'
      }
    },

    manageImagesRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/manage/images'
      }
    },

    manageProfileRoute: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/manage/profile'
      }
    },

    /*
     * URL properties point to the REST API. They are not client routes.
     */

    profileImageUrl: {
      deps: ['profileImage'],

      fn () {
        return app.config.imagesRoot + '/' + this.profileImage
      }
    },

    donateByCardUrl: {
      deps: ['id'],

      fn () {
        return this.url() + '/donate/card'
      }
    }
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.donations.fetch()
  }
})
