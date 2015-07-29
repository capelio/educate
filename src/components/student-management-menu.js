import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    active: React.PropTypes.string,
    student: React.PropTypes.object
  },

  render () {
    const {active, student} = this.props

    return (
      <div className='student-management-menu'>
        <ul>
          <li>
            <a href={student.manageProfileUrl} className={active === 'profile' ? 'active' : ''}>Profile</a>
          </li>
          <li>
            <a href={student.manageImagesUrl} className={active === 'images' ? 'active' : ''}>Images</a>
          </li>
          <li>
            <a href={student.manageDonationsUrl} className={active === 'donations' ? 'active' : ''}>Donations</a>
          </li>
        </ul>
      </div>
    )
  }
})
