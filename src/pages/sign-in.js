import React from 'react'

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
    // TODO: hook up sign in
    console.log('Attempt sign in')
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
