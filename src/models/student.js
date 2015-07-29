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

    profileImage: {
      type: 'string',
      default: 'default-profile-image.png'
    }
  },

  collections: {
    donations: DonationCollection
  },

  derived: {
    viewUrl: {
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

    manageUrl: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/manage'
      }
    },

    manageDonationsUrl: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/manage/donations'
      }
    },

    manageImagesUrl: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/manage/images'
      }
    },

    manageProfileUrl: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id + '/manage/profile'
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
