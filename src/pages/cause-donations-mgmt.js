import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import DonationsList from 'components/donations-list'
import CauseMgmtMenu from 'components/cause-mgmt-menu'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object
  },

  render () {
    const {cause} = this.props

    return (
      <div className='cause-donations-mgmt'>
        <CauseMgmtMenu cause={cause} active='donations'/>

        <h3>{cause.name} Donations</h3>

        <p>
          <a href={cause.createDonationRoute} className='button'>Add New Donation</a>
        </p>

        <DonationsList donations={cause.donations}/>
      </div>
    )
  }
})
