import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    deactivateRedirect: React.PropTypes.string,
    student: React.PropTypes.object
  },

  onDeactivateClick () {
    if (window.confirm('Are you sure you want to deactivate this student?')) {
      spinner.start()

      this.props.student.destroy({
        wait: true,

        success: () => {
          spinner.stop()

          app.router.history.navigate(this.props.deactivateRedirect)
        },

        error () {
          spinner.stop()

          modal.open({
            title: 'Error',
            body: 'We encountered an error while deactivating the student. Please wait a few minutes and try again. If the problem persists, please contact support.'
          })
        }
      })
    }
  },

  render () {
    const {student} = this.props

    return (
      <div>
        <a href={student.editRoute} className='button'>Edit</a>&nbsp;
        <button onClick={this.onDeactivateClick} className='button button-warn'>Deactivate</button>
      </div>
    )
  }
})
