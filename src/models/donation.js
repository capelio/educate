import app from 'ampersand-app'
import Model from 'ampersand-model'

import tokenMixin from 'helpers/token-mixin'

export default Model.extend(tokenMixin, {
  urlRoot () {
    return app.config.apiRoot + '/students/' + this.collection.parent.id + '/donations'
  },

  props: {
    id: 'string',
    studentId: 'string',
    amount: 'number',
    description: 'string',
    createdAt: 'string',
    updatedAt: 'string'
  },

  derived: {
    donationsRoute: {
      deps: ['studentId'],

      fn () {
        const studentId = this.collection.parent.id

        return '/students/' + studentId + '/manage/donations'
      }
    },

    editRoute: {
      deps: ['viewRoute'],

      fn () {
        return this.viewRoute + '/edit'
      }
    },

    viewRoute: {
      deps: ['id'],

      fn () {
        const studentId = this.collection.parent.id

        return '/students/' + studentId + '/donations/' + this.id
      }
    }
  }
})
