import app from 'ampersand-app'
import Model from 'ampersand-model'

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

  derived: {
    appUrl: {
      deps: ['id'],

      fn () {
        return '/students/' + this.id
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
  }
})
