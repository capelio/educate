import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object,
    donations: React.PropTypes.object
  },

  render () {
    const {cause, donations} = this.props
    const {goal} = cause

    const startTotalAt = 0
    const raised = donations.reduce((total, d) => total + d.amount, startTotalAt)
    const toGo = goal - raised
    const summary = `$${raised} raised, $${toGo} to go`

    return (
      <span>{summary}</span>
    )
  }
})
