import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import FundingSummary from 'components/funding-summary'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object
  },

  render () {
    const {cause} = this.props
    const {viewRoute} = cause
    let {story} = cause

    const cutoff = 480
    if (story.length > cutoff) {
      story = story.slice(0, cutoff) + '...'
    }

    return (
      <div className='cause-card grid-flex-container'>
        <div className='grid-flex-cell-1of3'>
          <a href={viewRoute}>
            <figure className='profile-image_figure media-outlined'>
              <img src={cause.profileImageUrl} width='300px'/>
            </figure>
          </a>

          <div style={{textAlign: 'center'}}>
            <FundingSummary cause={cause} donations={cause.donations}/>
          </div>
        </div>
        <div className='grid-flex-cell'>
          <a href={viewRoute}><h3 className='name'>{cause.name}</h3></a>

          <p className='story'>{story} <span><a href={viewRoute}>Read more</a></span></p>
        </div>
      </div>
    )
  }
})
