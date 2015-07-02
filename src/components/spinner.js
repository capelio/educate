import React from 'react'
import Spinner from 'spin.js'

export default React.createClass({
  componentDidMount () {
    this.spinner = new Spinner()
    this.spinner.spin(React.findDOMNode(this.refs.spinnerContainer))
  },

  render () {
    return (
      <div className='spinner modal modal-no-sections'>
        <p ref='spinnerContainer'></p>
      </div>
    )
  }
})
