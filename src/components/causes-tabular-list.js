import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import CausesTabularListItem from 'components/causes-tabular-list-item'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    causes: React.PropTypes.object
  },

  render () {
    const {causes} = this.props

    return (
      <div className='causes-tabular-list'>
        <table className='table-striped'>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Funding</th>
            </tr>
          </thead>
          <tbody>
            {causes.map(cause => {
              return (
                <CausesTabularListItem
                  key={cause.id}
                  cause={cause}
                  donations={cause.donations}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
})
