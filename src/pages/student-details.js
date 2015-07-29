import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import StudentDetails from 'components/student-details'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  render () {
    const {student} = this.props

    return (
      <div className='student-details-page'>
        <StudentDetails student={student}/>
      </div>
    )
  }
})
