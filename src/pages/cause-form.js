import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import CauseForm from 'forms/cause'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object
  },

  render () {
    const {cause} = this.props

    return (
      <div className='cause-form-page'>
        <CauseForm cause={cause}/>
      </div>
    )
  }
})
