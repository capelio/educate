import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import DonationForm from 'components/donation-form'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donation: React.PropTypes.object
  },

  onCancel () {
    const {donation} = this.props
    let route

    if (donation.isNew()) {
      route = donation.donationsRoute
    } else {
      route = donation.viewRoute
    }

    app.router.history.navigate(route)
  },

  onSuccess () {
    const {donation} = this.props
    let route

    if (donation.isNew()) {
      route = donation.donationsRoute
    } else {
      route = donation.viewRoute
    }

    app.router.history.navigate(route)
  },

  render () {
    const {donation} = this.props

    return (
      <div className='donation-form-page'>
        <DonationForm
          donation={donation}
          onCancel={this.onCancel}
          onSuccess={this.onSuccess}
        />
      </div>
    )
  }
})
