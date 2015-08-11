import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import sum from 'lodash.sum'

import StudentCard from 'components/student-card'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    students: React.PropTypes.object
  },

  render () {
    const {students} = this.props

    const unfundedStudents = students.filter(student => {
      const donated = sum(student.donations.models, 'amount')
      return donated < student.goal
    })

    return (
      <div className='students-page'>
        <h3 style={{textAlign: 'center'}}>Keep Nepal's earthquake affected children in school</h3>

        {unfundedStudents.map(student => {
          return <StudentCard key={student.id} student={student}/>
        })}
      </div>
    )
  }
})
