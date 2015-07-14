import app from 'ampersand-app'
import React from 'react'
import NavHelper from 'components/nav-helper'
import request from 'superagent'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  signedIn () {
    return !!app.me.token
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
      .send({ token: app.me.token })
      .end()

    // Clear the token from localStorage
    window.localStorage.clear()

    /*
     * Unset app.me.token silently. If silent were not used, the
     * model would generate a change event for me's token
     * property, which would cause app.me.token to be set to
     * "undefined" - the toString()'d result of attempting to
     * lookup a localStorage property that doesn't exist
     */
    app.me.unset('token', {silent: true})

    app.router.history.navigate('/')
  },

  render () {
    return (
      <NavHelper>
        <nav className='top-nav top-nav-dark cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>

          <ul className='list-unstyled list-inline cf'>
            <li>Empower Nepal</li>
            <li><a href='/'>Students in Need</a></li>
            <li><a href='/howitworks'>How it Works</a></li>
            <li className='pull-right'>{this.signedIn() ? <a href='' onClick={this.onSignOut}>Sign Out</a> : <a href='/signin'>Sign In</a>}</li>
            {this.signedIn() ? <li className='pull-right'><a href='/dashboard'>Dashboard</a></li> : ''}
          </ul>
        </nav>

        <div className='page container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
})
