import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import FormattedText from 'formatted-text'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object
  },

  render () {
    const {cause} = this.props

    return (
      <div className='cause-profile'>
        <h3>{cause.name}</h3>

        <p>Funding Goal: ${cause.goal}</p>

        <FormattedText>
          {cause.story}
        </FormattedText>
      </div>
    )
  }
})
