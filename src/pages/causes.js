import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import sum from 'lodash.sum'

import CauseCard from 'components/cause-card'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    causes: React.PropTypes.object
  },

  render () {
    const {causes} = this.props

    const unfundedCauses = causes.filter(cause => {
      return cause.goal >= sum(cause.donations.models, 'amount')
    })

    return (
      <div className='causes-page'>
        <h3 style={{textAlign: 'center'}}>Keep Nepal's earthquake affected children in school</h3>

        {unfundedCauses.map(cause => {
          return <CauseCard key={cause.id} cause={cause}/>
        })}
      </div>
    )
  }
})
