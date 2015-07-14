import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import StudentAdminBar from 'components/student-admin-bar'
import StudentDetails from 'components/student-details'
import types from 'helpers/prop-types'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: types.student
  },

  render () {
    const {student} = this.props
    const {isAuthenticated} = app.me
    const deactivateRedirect = '/dashboard'

    let content

    if (isAuthenticated) {
      content = (
        <div className='student-details-page'>
          <StudentDetails student={student}/>
          <StudentAdminBar
            deactivateRedirect={deactivateRedirect}
            student={student}
          />
        </div>
      )
    } else {
      content = (
        <div className='student-details-page'>
          <StudentDetails student={student}/>
        </div>
      )
    }

    return content
  }
})
