import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import moment from 'moment'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donations: React.PropTypes.object,
    student: React.PropTypes.object
  },

  onArchiveClick (event) {
    app.trace('archive student')
  },

  render () {
    const {donations, student} = this.props
    const {goal, manageRoute} = student

    const prettyDate = moment(student.createdAt).format('DD MMM YYYY')

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
          <a href={manageRoute}>{student.name}</a>
        </td>
        <td>
          {fundingStatus}
        </td>
      </tr>
    )
  }
})
