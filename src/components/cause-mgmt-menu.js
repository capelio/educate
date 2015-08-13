import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    active: React.PropTypes.string,
    cause: React.PropTypes.object
  },

  determineButtonClasses (button, active) {
    let baseClasses = 'button button-outlined'

    if (button === active) {
      return baseClasses + ' button-active'
    } else {
      return baseClasses
    }
  },

  render () {
    const {active, cause} = this.props

    return (
      <nav className='cause-mgmt-menu button-group'>
        <a href={cause.manageProfileRoute} className={this.determineButtonClasses('profile', active)}><span className='octicon octicon-book'></span> Profile</a>
        <a href={cause.manageImagesRoute} className={this.determineButtonClasses('images', active)}><span className='octicon octicon-device-camera'></span> Images</a>
        <a href={cause.manageDonationsRoute} className={this.determineButtonClasses('donations', active)}><span className='octicon octicon-credit-card'></span> Donations</a>
      </nav>
    )
  }
})
