import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import StudentForm from 'components/student-form'
import types from 'helpers/prop-types'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: types.student
  },

  render () {
    const {student} = this.props

    return (
      <div className='student-form-page'>
        <StudentForm student={student}/>
      </div>
    )
  }
})
