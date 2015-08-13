import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import FormattedText from 'formatted-text'

import DonorsList from 'components/donors-list'
import FundingSummary from 'components/funding-summary'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object,
    donations: React.PropTypes.object
  },

  renderDonorsList () {
    const {donations} = this.props

    if (donations.length) {
      return <DonorsList donations={donations}/>
    } else {
      return <div>Be the first to donate by using the Donate Now button above!</div>
    }
  },

  render () {
    const {cause, donations} = this.props
    const {donateRoute} = cause

    return (
      <div className='cause-details grid-flex-container'>
        <div className='grid-flex-cell-1of3'>
          <figure className='media-outlined'>
            <img src={cause.profileImageUrl} width='300px'/>
          </figure>

          <div className='funding-summary' style={{textAlign: 'center'}}>
            <FundingSummary cause={cause} donations={donations}/>
          </div>

          <div className='donate-button' style={{textAlign: 'center'}}>
            <a href={donateRoute} className='button'>Donate Now</a>
          </div>

          <div className='donors-list'>
            <h4>Donors</h4>
            {this.renderDonorsList()}
          </div>
        </div>

        <div className='grid-flex-cell'>
          <h3 className='name'>{cause.name}</h3>

          <FormattedText>
            {cause.story}
          </FormattedText>
        </div>
      </div>
    )
  }
})
