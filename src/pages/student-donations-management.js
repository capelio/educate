import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import DonationsList from 'components/donations-list'
import StudentManagementMenu from 'components/student-management-menu'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  render () {
    const {student} = this.props

    return (
      <div className='student-donations-management'>
        <StudentManagementMenu student={student} active='donations'/>

        <h3>{student.name} Donations</h3>

        <a href={student.createDonationRoute} className='button'>Add New Donation</a>

        <DonationsList donations={student.donations}/>
      </div>
    )
  }
})
