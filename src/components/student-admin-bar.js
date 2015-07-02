import React from 'react'

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
      this.props.student.destroy()
      window.history.back()
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
