import React from 'react'

import Spinner from 'components/spinner'

let timer, element

export default {
  start (props = {}) {
    timer = setTimeout(() => {
      element = document.createElement('div')
      document.body.appendChild(element)
      React.render(<Spinner {...props}/>, element)
      document.body.classList.toggle('has-modal')
    }, 1000)
  },

  stop () {
    if (element) {
      React.unmountComponentAtNode(element)
      document.body.removeChild(element)
      document.body.classList.toggle('has-modal')
    }

    clearTimeout(timer)
  }
}
