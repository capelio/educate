import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import CausesTabularList from 'components/causes-tabular-list'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    causes: React.PropTypes.object
  },

  render () {
    const {causes} = this.props

    return (
      <div className='dashboard-page'>
        <p>
          <a href='/causes/create' className='button'> Add New Student</a>
        </p>

        <CausesTabularList causes={causes}/>
      </div>
    )
  }
})
