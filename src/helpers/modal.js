import React from 'react'
import Modal from 'components/modal'

let element

export default {
  open (props) {
    element = document.createElement('div')
    document.body.appendChild(element)
    React.render(<Modal {...props} onClose={this.close}/>, element)
    document.body.classList.toggle('has-modal')
  },

  close () {
    React.unmountComponentAtNode(element)
    document.body.removeChild(element)
    document.body.classList.toggle('has-modal')
  }
}
