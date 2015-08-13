import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import CauseDetails from 'components/cause-details'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object
  },

  render () {
    const {cause} = this.props

    return (
      <div className='cause-details-page'>
        <CauseDetails cause={cause} donations={cause.donations}/>
      </div>
    )
  }
})
