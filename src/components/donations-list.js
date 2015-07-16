import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import DonationsListItem from 'components/donations-list-item'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donations: React.PropTypes.object
  },

  render () {
    const {donations} = this.props

    return (
      <div className='donations-list'>
        <table className='table-striped'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map(d => {
              return <DonationsListItem key={d.id} donation={d}/>
            })}
          </tbody>
        </table>
      </div>
    )
  }
})
