import React from 'react'
import NavHelper from 'components/nav-helper'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render () {
    return (
      <NavHelper>
        <nav className='top-nav top-nav-dark cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>

          <ul className='list-unstyled list-inline cf'>
            <li>Educate</li>
            <li><a href='/'>Students</a></li>
            <li><a href='/partners'>Partners</a></li>
            <li><a href='/teachers'>Teachers</a></li>
          </ul>
        </nav>

        <div className='page container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
})
