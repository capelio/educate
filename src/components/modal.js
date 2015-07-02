import React from 'react'

const {func, string} = React.PropTypes

export default React.createClass({
  propTypes: {
    body: string,
    onClose: func,
    title: string
  },

  onCloseClick (event) {
    event.preventDefault()
    this.props.onClose()
  },

  render () {
    const {body, title} = this.props

    return (
      <div className='modal'>
        <div className='modal-head cf'>
          <h3 className='modal-title'>{title}</h3>
          <a href='' onClick={this.onCloseClick} className='modal-close'>x</a>
        </div>

        <div className='modal-body'>
          <p>{body}</p>
        </div>

        <div className='modal-footer'>
          <button onClick={this.onCloseClick} className='button'>Okay</button>
        </div>
      </div>
    )
  }
})
