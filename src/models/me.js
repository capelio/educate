import Model from 'ampersand-model'

export default Model.extend({
  props: {
    id: 'number',
    name: 'string',

    isPartner: {
      type: 'boolean',
      default: true
    }
  }
})
