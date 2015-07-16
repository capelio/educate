import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import StudentSummary from 'components/student-summary'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    students: React.PropTypes.object
  },

  render () {
    const {students} = this.props

    return (
      <div className='students-page'>
        <h3 style={{textAlign: 'center'}}>Keep Nepal's earthquake affected children in school</h3>

        {students.map(student => {
          return <StudentSummary key={student.id} student={student}/>
        })}
      </div>
    )
  }
})
