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
      <div className='students-page'>
        {students.map(student =>
          <StudentSummary key={student.id} student={student}/>
        )}
      </div>
    )
  }
})
