import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import DonationsList from 'components/donations-list'
import ManualDonationForm from 'components/manual-donation-form'
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

          <div className='grid-flex-container'>
            <div className='grid-flex-cell'>
              <StudentAdminBar
                deactivateRedirect={deactivateRedirect}
                student={student}
              />
            </div>
          </div>

          <h3>Donations</h3>
          <ManualDonationForm student={student}/>
          <DonationsList donations={student.donations}/>
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
