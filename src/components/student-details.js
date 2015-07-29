import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import FormattedText from 'formatted-text'

import FundingProgress from 'components/funding-progress'
import ProfileImage from 'components/profile-image'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  render () {
    const {student} = this.props
    const {isAuthenticated} = app.me

    return (
      <div className='student-details grid-flex-container'>
        <div className='grid-flex-cell'>
          <h3 className='student-details_name'>{student.name}</h3>

          <FundingProgress
            canDonate={true}
            donations={student.donations}
            student={student}
          />

          <FormattedText>
            {student.story}
          </FormattedText>
        </div>

        <div className='grid-flex-cell grid-flex-cell-1of4'>
          <ProfileImage student={student} canEdit={isAuthenticated}/>
        </div>
      </div>
    )
  }
})
