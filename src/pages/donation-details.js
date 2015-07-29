import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import moment from 'moment'

import StudentManagementMenu from 'components/student-management-menu'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donation: React.PropTypes.object,
    student: React.PropTypes.object
  },

  render () {
    const {donation, student} = this.props
    const prettyDate = moment(donation.createdAt).format('DD MMM YYYY')
    const prettyAmount = '$' + donation.amount

    return (
      <div className='donation-details'>
        <StudentManagementMenu student={student} active='donations'/>

        <p>{prettyDate}</p>
        <p>{prettyAmount}</p>
        <p>{donation.description}</p>
        <div>
          <a href={donation.editRoute} className='button'>Edit</a>
          &nbsp;
          <button onClick={this.onRemoveClick} className='button button-warn'>Remove</button>
        </div>
      </div>
    )
  }
})
