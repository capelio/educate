import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    canDonate: React.PropTypes.bool,
    donations: React.PropTypes.object,
    student: React.PropTypes.object
  },

  render () {
    const {canDonate, donations, student} = this.props
    const {donateUrl, goal} = student

    const startTotalAt = 0
    const raised = donations.reduce((total, d) => total + d.amount, startTotalAt)
    const toGo = goal - raised

    return (
      <div className='funding-progress grid-flex-container'>
        <div className='grid-flex-cell funding-progress_remaining'>
          <span>${raised} raised, ${toGo} to go</span>
        </div>

        <div className='grid-flex-cell funding-progress_donate' style={{display: canDonate ? 'block' : 'none', textAlign: 'right'}}>
          <a href={donateUrl} className='button'>Donate</a>
        </div>
      </div>
    )
  }
})
