import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import StudentAdminBar from 'components/student-admin-bar'
import StudentProfile from 'components/student-profile'
import StudentManagementMenu from 'components/student-management-menu'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  render () {
    const {student} = this.props

    return (
      <div className='student-management'>
        <StudentManagementMenu student={student} active='profile'/>

        <StudentProfile student={student}/>

        <StudentAdminBar student={student}/>
      </div>
    )
  }
})
