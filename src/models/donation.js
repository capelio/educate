import app from 'ampersand-app'
import Model from 'ampersand-model'

import tokenMixin from 'helpers/token-mixin'

export default Model.extend(tokenMixin, {
  urlRoot () {
    return app.config.apiRoot + '/students/' + this.studentId + '/donations'
  },

  props: {
    id: 'string',
    studentId: 'string',
    amount: 'number',
    description: 'string',
    donor: 'string',
    createdAt: 'string',
    updatedAt: 'string'
  },

  derived: {
    donationsRoute: {
      deps: ['studentId'],

      fn () {
        return '/students/' + this.studentId + '/manage/donations'
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
        return '/students/' + this.studentId + '/donations/' + this.id
      }
    }
  }
})
