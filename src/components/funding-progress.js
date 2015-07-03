import React from 'react'

const {number} = React.PropTypes

export default React.createClass({
  propTypes: {
    raised: number,
    goal: number
  },

  render () {
    const {raised, goal} = this.props
    const toGo = goal - raised

    return (
      <div className='funding-progress'>
        <p>${raised} raised, ${toGo} to go</p>
      </div>
    )
  }
})
