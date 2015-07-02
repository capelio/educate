import React from 'react'
import Spinner from 'components/spinner'

let element

export default {
  start (props) {
    element = document.createElement('div')
    document.body.appendChild(element)
    React.render(<Spinner {...props}/>, element)
    document.body.classList.toggle('has-modal')
  },

  stop () {
    React.unmountComponentAtNode(element)
    document.body.classList.toggle('has-modal')
    document.body.removeChild(element)
  }
}
