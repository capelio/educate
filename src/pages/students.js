import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import StudentCard from 'components/student-card'

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
          return <StudentCard key={student.id} student={student}/>
        })}
      </div>
    )
  }
})
