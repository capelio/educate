import app from 'ampersand-app'
import React from 'react'
import localLinks from 'local-links'

const {array} = React.PropTypes

export default React.createClass({
  propTypes: {
    children: array
  },

  onClick (event) {
    const pathname = localLinks.getLocalPathname(event)

    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },

  render () {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
})
