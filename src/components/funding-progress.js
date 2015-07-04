import React from 'react'
import types from 'helpers/prop-types'

const {bool, number} = React.PropTypes

export default React.createClass({
  propTypes: {
    allowDonations: bool,
    goal: number,
    raised: number,
    student: types.student
  },

  render () {
    const {allowDonations, goal, raised, student} = this.props
    const toGo = goal - raised

    return (
      <div className='funding-progress grid-flex-container'>
        <div className='grid-flex-cell funding-progress_remaining'>
          <span>${raised} raised, ${toGo} to go</span>
        </div>

        <div className='grid-flex-cell funding-progress_donate' style={{display: allowDonations ? 'block' : 'none', textAlign: 'right'}}>
          <a href={student.donateUrl} className='button'>Donate</a>
        </div>
      </div>
    )
  }
})
