import app from 'ampersand-app'
import Model from 'ampersand-model'

import tokenMixin from 'helpers/token-mixin'

export default Model.extend(tokenMixin, {
  urlRoot () {
    return app.config.apiRoot + '/causes/' + this.causeId + '/donations'
  },

  props: {
    id: 'string',
    chargeId: 'string',
    causeId: 'string',
    amount: 'number',
    description: 'string',
    donor: 'string',
    email: 'string',
    createdAt: 'string',
    updatedAt: 'string'
  },

  derived: {
    donationsRoute: {
      deps: ['causeId'],

      fn () {
        return '/causes/' + this.causeId + '/donations'
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
        return '/causes/' + this.causeId + '/donations/' + this.id
      }
    }
  }
})
