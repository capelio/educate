import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import FundingProgress from 'components/funding-progress'
import ProfileImage from 'components/profile-image'
import types from 'helpers/prop-types'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: types.student
  },

  render () {
    const {student} = this.props
    const {isPartner} = app.me

    return (
      <div className='student-details grid-flex-container'>
        <div className='grid-flex-cell'>
          <h3 className='student-details_name'>
            <a href={student.appUrl}>{student.name}</a>
          </h3>

          <FundingProgress
            canDonate={true}
            donations={student.donations}
            student={student}
          />

          <p>{student.story}</p>
        </div>

        <div className='grid-flex-cell grid-flex-cell-1of4'>
          <ProfileImage student={student} canEdit={isPartner}/>
        </div>
      </div>
    )
  }
})
