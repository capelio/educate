import Model from 'ampersand-model'

import tokenMixin from 'helpers/token-mixin'

export default Model.extend(tokenMixin, {
  initialize () {
    if (window.localStorage && window.localStorage.token) {
      this.token = window.localStorage.token
    }

    this.on('change:token', this.onTokenChange)
  },

  props: {
    id: 'number',
    name: 'string',
    token: 'string'
  },

  derived: {
    isAuthenticated: {
      deps: ['token'],

      fn () {
        return !!this.token
      }
    }
  },

  onTokenChange () {
    if (window.localStorage) {
      window.localStorage.token = this.token
    }
  }
})
