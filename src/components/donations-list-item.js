import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donation: React.PropTypes.object
  },

  onRemoveClick (event) {
    if (window.confirm('Are you sure you want to remove this donation?')) {
      spinner.start()

      this.props.donation.destroy({
        wait: true,

        success () {
          spinner.stop()
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
    const {donation} = this.props
    const prettyDonation = '$' + donation.amount

    return (
      <tr>
        <td>{prettyDonation}</td>
        <td>
          <button className='button button-warn' onClick={this.onRemoveClick}>Remove</button>
        </td>
      </tr>
    )
  }
})
