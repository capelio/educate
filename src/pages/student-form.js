import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import StudentForm from 'components/student-form'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
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
