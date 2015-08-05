import React from 'react'

import Spinner from 'components/spinner'

export default {
  _element: undefined,
  _timer: undefined,

  start (props = {}) {
    this._timer = setTimeout(() => {
      if (!this._element) {
        this._element = document.body.appendChild(document.createElement('div'))
        React.render(<Spinner {...props}/>, this._element)
        document.body.classList.toggle('has-modal')
      }
    }, 1000)
  },

  stop () {
    if (this._element) {
      React.unmountComponentAtNode(this._element)
      document.body.removeChild(this._element)
      document.body.classList.toggle('has-modal')
      this._element = undefined
    }

    clearTimeout(this._timer)
  }
}
