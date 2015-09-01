import app from 'ampersand-app'
import React from 'react'
import request from 'superagent'

import logoImage from 'assets/images/logo-white.svg'
import NavHelper from 'components/nav-helper'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  onSignOut (event) {
    event.preventDefault()

    /*
     * Optimistically signout with the API. If the request fails,
     * the token will remain in the API's token pool. The next time
     * the client signs in, however, they will be handed a new token.
     *
     * TODO: Fix this when we do proper authentication
     */
    const url = app.config.apiRoot + '/signout'
    request.post(url)
      .set('Authorization', app.me.token)
      .end()

    // Clear the token from localStorage
    window.localStorage.clear()

    // Clear the token from the me model
    app.me.unset('token')

    if (window.location.pathname === '/') {
      app.router.reload()
    } else {
      app.router.history.navigate('/')
    }
  },

  render () {
    const {isAuthenticated} = app.me

    return (
      <NavHelper>
        <nav className='top-nav top-nav-dark cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>

          <ul className='list-unstyled list-inline cf'>
            <li className='logo'>
              <a href='/'><img src={logoImage} alt='Lift Up Nepal'/></a>
            </li>
            <li><a href='/'>Students in Need</a></li>
            <li><a href='/howitworks'>How it Works</a></li>
            <li className='pull-right'>{isAuthenticated ? <a href='' onClick={this.onSignOut}>Sign Out</a> : <a href='/signin'>Sign In</a>}</li>
            {isAuthenticated ? <li className='pull-right'><a href='/dashboard'>Dashboard</a></li> : ''}
          </ul>
        </nav>

        <div className='page container'>
          {this.props.children}

          <footer>
            <p>
              Lift Up Nepal is powered by <a href='https://liftupjs.github.io/' target='_blank'>LiftUp.js</a>, a suite of free and open source fundraising tools focused on empowering grassroots activists around the world.
            </p>
            <p>
              Teamwork logo icon was created by <a href='https://thenounproject.com/factor_e/' target='_blank'>factor[e] design initiative</a>. Thanks factor[e]!
            </p>
          </footer>
        </div>
      </NavHelper>
    )
  }
})
