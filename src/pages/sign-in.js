import app from 'ampersand-app'
import React from 'react'
import request from 'superagent'
import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  getInitialState () {
    return {
      email: '',
      password: ''
    }
  },

  onEmailChange (event) {
    const email = event.target.value
    this.setState({
      email
    })
  },

  onPasswordChange (event) {
    const password = event.target.value
    this.setState({
      password
    })
  },

  onFormSubmit (event) {
    event.preventDefault()

    spinner.start()

    const url = app.config.apiRoot + '/signin'
    request.post(url)
      .send(this.state)
      .end(function (err, res) {
        spinner.stop()

        if (err && err.status === 401) {
          modal.open({
            title: 'Unauthorized',
            body: 'The email address and password combination you provided were not valid. Please double check the values you entered and try again.'
          })
        } else if (err) {
          modal.open({
            title: 'Error',
            body: 'We encountered an error signing you in. Please wait a few minutes and try again. If the problem persists, please contact support.'
          })
        } else {
          app.me.token = res.body.token
          app.router.navigate('/dashboard')
        }
      })
  },

  onCancelClick (event) {
    event.preventDefault()
    window.history.back()
  },

  render () {
    const {email, password} = this.state

    return (
      <div className='sign-in-page'>
        <form onSubmit={this.onFormSubmit}>
          <fieldset>
            <div className='form-element'>
              <label htmlFor='email'>Email Address</label>
              <input className='form-input' value={email} onChange={this.onEmailChange} type='text' id='email' placeholder='Email Address' required/>
            </div>

            <div className='form-element'>
              <label htmlFor='password'>Password</label>
              <input className='form-input' value={password} onChange={this.onPasswordChange} type='password' id='password' placeholder='Password' required/>
            </div>

            <button type='submit' className='button button-approve'>Sign In</button>&nbsp;
            <button onClick={this.onCancelClick} type='button' className='button button-neutral'>Cancel</button>

          </fieldset>
        </form>
      </div>
    )
  }
})
