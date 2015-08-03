import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donations: React.PropTypes.object
  },

  render () {
    const {donations} = this.props

    return (
      <div>
        {donations.map(d => {
          return (
            <div key={d.id}>
              {d.donor}
            </div>
          )
        })}
      </div>
    )
  }
})
