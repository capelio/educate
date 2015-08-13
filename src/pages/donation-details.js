import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import moment from 'moment'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'
import CauseMgmtMenu from 'components/cause-mgmt-menu'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object,
    donation: React.PropTypes.object
  },

  onRemoveClick (event) {
    if (window.confirm('Are you sure you want to remove this donation?')) {
      spinner.start()

      this.props.donation.destroy({
        wait: true,

        success: () => {
          spinner.stop()

          app.router.history.navigate(this.props.cause.manageDonationsRoute)
        },

        error () {
          spinner.stop()

          modal.open({
            title: 'Error',
            body: 'We encountered an error while removing the donation. Please wait a few minutes and try again. If the problem persists, please contact support.'
          })
        }
      })
    }
  },

  render () {
    const {donation, cause} = this.props
    const prettyDate = moment(donation.createdAt).format('DD MMM YYYY')
    const prettyAmount = '$' + donation.amount

    return (
      <div className='donation-details'>
        <CauseMgmtMenu cause={cause} active='donations'/>

        <p>{prettyDate}</p>
        <p>{prettyAmount}</p>
        <p>{donation.donor}</p>
        <p>{donation.description}</p>
        <p>{donation.email}</p>

        <div>
          <a href={donation.editRoute} className='button'>Edit</a>
          &nbsp;
          <button onClick={this.onRemoveClick} className='button button-warn'>Remove</button>
        </div>
      </div>
    )
  }
})
