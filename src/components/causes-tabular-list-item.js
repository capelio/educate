import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import moment from 'moment'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object,
    donations: React.PropTypes.object
  },

  onArchiveClick (event) {
    app.trace('archive cause')
  },

  render () {
    const {cause, donations} = this.props
    const {goal, manageProfileRoute} = cause

    const prettyDate = moment(cause.createdAt).format('DD MMM YYYY')

    const startTotalAt = 0
    const raised = donations.reduce((total, d) => total + d.amount, startTotalAt)
    const toGo = goal - raised
    const fundingStatus = `$${raised} raised, $${toGo} to go`

    return (
      <tr>
        <td>
          {prettyDate}
        </td>
        <td>
          <a href={manageProfileRoute}>{cause.name}</a>
        </td>
        <td>
          {fundingStatus}
        </td>
      </tr>
    )
  }
})
