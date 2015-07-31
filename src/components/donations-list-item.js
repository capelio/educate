import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import moment from 'moment'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donation: React.PropTypes.object
  },

  render () {
    const {amount, createdAt, description, donor, viewRoute} = this.props.donation
    const prettyDate = moment(createdAt).format('DD MMM YYYY')
    const prettyAmount = '$' + (amount ? amount : '')

    return (
      <tr>
        <td>
          {prettyDate}
        </td>
        <td>
          {donor}
        </td>
        <td>
          {description}
        </td>
        <td>
          <a href={viewRoute}>{prettyAmount}</a>
        </td>
      </tr>
    )
  }
})
