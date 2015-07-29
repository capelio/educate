import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import StudentManagementMenu from 'components/student-management-menu'
import ProfileImage from 'components/profile-image'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  render () {
    const {student} = this.props

    return (
      <div className='student-images-management'>
        <StudentManagementMenu student={student} active='images'/>

        <ProfileImage student={student} canEdit={true}/>
      </div>
    )
  }
})

