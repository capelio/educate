import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import FormattedText from 'formatted-text'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  render () {
    const {student} = this.props

    return (
      <div className='student-profile'>
        <h3>{student.name}</h3>

        <p>Funding Goal: ${student.goal}</p>

        <FormattedText>
          {student.story}
        </FormattedText>
      </div>
    )
  }
})
