import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import modal from 'helpers/modal'
import spinner from 'helpers/spinner'
import types from 'helpers/prop-types'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: types.student
  },

  onDeactivateClick () {
    if (window.confirm('Are you sure you want to deactivate this student?')) {
      spinner.start()

      this.props.student.destroy({
        wait: true,

        success () {
          spinner.stop()
          window.history.back()
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
        <a href={student.editUrl} className='button'>Edit</a>&nbsp;
        <button onClick={this.onDeactivateClick} className='button button-warn'>Deactivate</button>
      </div>
    )
  }
})
