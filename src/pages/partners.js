import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import StudentSummary from 'components/student-summary'
import types from 'helpers/prop-types'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    students: types.students
  },

  render () {
    const {students} = this.props

    return (
      <div className='partners-page'>
        <p>
          <a href='/students/create' className='button'><span className='octicon octicon-plus'></span> Add New Student</a>
        </p>

        {students.map(student =>
          <StudentSummary key={student.id} student={student}/>
        )}
      </div>
    )
  }
})
