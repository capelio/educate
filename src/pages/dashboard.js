import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import StudentsList from 'components/students-list'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    students: React.PropTypes.object
  },

  render () {
    const {students} = this.props

    return (
      <div className='dashboard-page'>
        <p>
          <a href='/students/create' className='button'> Add New Student</a>
        </p>

        <StudentsList students={students}/>
      </div>
    )
  }
})
