import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import FundingSummary from 'components/funding-summary'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  render () {
    const {student} = this.props
    const {viewUrl} = student
    let {story} = student

    const CUTOFF = 380
    if (story.length > CUTOFF) {
      story = story.slice(0, CUTOFF) + '...'
    }

    return (
      <div className='student-card'>
        <a href={viewUrl}>
          <figure className='profile-image_figure media-outlined'>
            <img src={student.profileImageUrl} width='300px'/>
          </figure>
        </a>
        <div>
          <a href={viewUrl}><h3 className='name'>{student.name}</h3></a>
        </div>
        <div>
          <p className='story'>{story} <span><a href={viewUrl}>Read more</a></span></p>
        </div>
        <div>
          <FundingSummary student={student} donations={student.donations}/>
        </div>
      </div>
    )
  }
})
