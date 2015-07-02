import React from 'react'
import modal from 'helpers/modal'

const {string, shape} = React.PropTypes

export default React.createClass({
  propTypes: {
    student: shape({
      id: string,
      name: string,
      story: string
    })
  },

  onDeactivateClick () {
    if (window.confirm('Are you sure you want to deactivate this student?')) {
      this.props.student.destroy({
        wait: true,

        success () {
          window.history.back()
        },

        error () {
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
