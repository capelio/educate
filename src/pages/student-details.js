import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import StudentDetails from 'components/student-details'
import StudentAdminBar from 'components/student-admin-bar'

export default React.createClass({
  mixins: [ampersandMixin],

  render () {
    const {student, isPartner} = this.props
    let content

    if (isPartner) {
      content = (
        <div className='student-details-page'>
          <StudentDetails student={student}/>
          <StudentAdminBar student={student}/>
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
