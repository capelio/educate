import React from 'react'
import Spinner from 'components/spinner'

let element

export default {
  start () {
    element = document.createElement('div')
    document.body.appendChild(element)
    React.render(<Spinner/>, element)
    document.body.classList.toggle('has-modal')
  },

  stop () {
    React.unmountComponentAtNode(element)
    document.body.classList.toggle('has-modal')
    document.body.removeChild(element)
  }
}
