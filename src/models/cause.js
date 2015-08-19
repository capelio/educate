import app from 'ampersand-app'
import Model from 'ampersand-model'

import DonationCollection from 'models/donation-collection'
import tokenMixin from 'helpers/token-mixin'

export default Model.extend(tokenMixin, {
  urlRoot () {
    return app.config.apiRoot + '/causes'
  },

  props: {
    id: 'string',
    name: 'string',
    story: 'string',
    goal: 'number',
    createdAt: 'string',
    updatedAt: 'string',

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

    createDonationRoute: {
      deps: ['id'],

      fn () {
        return '/causes/' + this.id + '/donations/create'
      }
    },

    donateRoute: {
      deps: ['id'],

      fn () {
        return '/causes/' + this.id + '/donate'
      }
    },

    editRoute: {
      deps: ['id'],

      fn () {
        return '/causes/' + this.id + '/edit'
      }
    },

    manageDonationsRoute: {
      deps: ['id'],

      fn () {
        return '/causes/' + this.id + '/donations'
      }
    },

    manageImagesRoute: {
      deps: ['id'],

      fn () {
        return '/causes/' + this.id + '/images'
      }
    },

    manageProfileRoute: {
      deps: ['id'],

      fn () {
        return '/causes/' + this.id + '/profile'
      }
    },

    thankYouRoute: {
      deps: ['id'],

      fn () {
        return '/causes/' + this.id + '/thankyou'
      }
    },

    viewRoute: {
      deps: ['id'],

      fn () {
        return '/causes/' + this.id
      }
    },

    /*
     * URL properties point to the REST API. They are not client routes.
     */

    donateByCardUrl: {
      deps: ['id'],

      fn () {
        return this.url() + '/donate/card'
      }
    },

    profileImageUrl: {
      deps: ['profileImage'],

      fn () {
        return app.config.imagesRoot + '/' + this.profileImage
      }
    }
  }
})
