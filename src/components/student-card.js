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

    const cutoff = 480
    if (story.length > cutoff) {
      story = story.slice(0, cutoff) + '...'
    }

    return (
      <div className='student-card grid-flex-container'>
        <div className='grid-flex-cell-1of3'>
          <a href={viewUrl}>
            <figure className='profile-image_figure media-outlined'>
              <img src={student.profileImageUrl} width='300px'/>
            </figure>
          </a>
          <div style={{textAlign: 'center'}}>
            <FundingSummary student={student} donations={student.donations}/>
          </div>
        </div>
        <div className='grid-flex-cell'>
          <a href={viewUrl}><h3 className='name'>{student.name}</h3></a>
          <p className='story'>{story} <span><a href={viewUrl}>Read more</a></span></p>
        </div>
      </div>
    )
  }
})
