import React from 'react'

const {string} = React.PropTypes

export default React.createClass({
  propTypes: {
    title: string.isRequired,
    body: string
  },

  render () {
    return (
      <div className='message-page'>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    )
  }
})
