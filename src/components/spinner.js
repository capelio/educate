import React from 'react'
import Spinner from 'spin.js'

export default React.createClass({
  componentDidMount () {
    this.spinner = new Spinner({
      className: 'spinjs-spinner'
    })

    this.spinner.spin(React.findDOMNode(this.refs.container))
  },

  render () {
    return (
      <div className='spinner' ref='container'></div>
    )
  }
})
