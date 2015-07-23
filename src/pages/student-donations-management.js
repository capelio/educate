import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import DonationsList from 'components/donations-list'
import ManualDonationForm from 'components/manual-donation-form'
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

        <ManualDonationForm student={student}/>
        <DonationsList donations={student.donations}/>
      </div>
    )
  }
})
