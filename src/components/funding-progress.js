import React from 'react'

const {number} = React.PropTypes

export default React.createClass({
  propTypes: {
    raised: number,
    goal: number
  },

  render () {
    const {raised, goal} = this.props

    return (
      <div className='funding-progress'>
        <p>${raised} raised, ${goal} to go</p>
      </div>
    )
  }
})
