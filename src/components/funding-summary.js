import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donations: React.PropTypes.object,
    student: React.PropTypes.object
  },

  render () {
    const {donations, student} = this.props
    const {goal} = student

    const startTotalAt = 0
    const raised = donations.reduce((total, d) => total + d.amount, startTotalAt)
    const toGo = goal - raised
    const summary = `$${raised} raised, $${toGo} to go`

    return (
      <span>{summary}</span>
    )
  }
})
