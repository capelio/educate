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
      <div key={student.id} className='student-summary grid-flex-container'>
        <div className='grid-flex-cell'>
          <h3 className='student-summary_name'>
            <a href={student.viewUrl}>{student.name}</a>
          </h3>

          <FundingProgress
            canDonate={false}
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
