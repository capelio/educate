import app from 'ampersand-app'
import React from 'react'

export default React.createClass({
  mixins: [],

  propTypes: {
    error: React.PropTypes.object
  },

  onTryAgain () {
    app.router.reload()
  },

  render () {
    const {error} = this.props

    return (
      <div className='error-page'>
        <h1>Oops!</h1>
        <p>{error.message}</p>
        <p>{error.stack}</p>
        <p><button className='button' onClick={this.onTryAgain}>Try Again</button></p>
      </div>
    )
  }
})
