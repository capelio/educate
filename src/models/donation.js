import Model from 'ampersand-model'
import tokenMixin from 'helpers/token-mixin'

export default Model.extend(tokenMixin, {
  props: {
    id: 'string',
    studentId: 'string',
    amount: 'number'
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    }
  }
})
