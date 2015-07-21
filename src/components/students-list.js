import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import StudentsListItem from 'components/students-list-item'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    students: React.PropTypes.object
  },

  render () {
    const {students} = this.props

    return (
      <div className='students-list'>
        <table className='table-striped'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Funding</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => {
              return (
                <StudentsListItem
                  key={s.id}
                  student={s}
                  donations={s.donations}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
})
