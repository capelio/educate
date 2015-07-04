import app from 'ampersand-app'
import React from 'react'
import modal from 'helpers/modal'
import spinner from 'helpers/spinner'
import types from 'helpers/prop-types'

export default React.createClass({
  propTypes: {
    student: types.student
  },

  getInitialState () {
    return {
      amount: 0
    }
  },

  onAmountChange (event) {
    const amount = parseInt(event.target.value, 10)

    this.setState({
      amount: amount
    })
  },

  onSubmitForm (event) {
    event.preventDefault()

    const {student} = this.props

    spinner.start()

    student.donations.create(this.state, {
      wait: true,

      success () {
        spinner.stop()
        app.router.navigate('/students/' + student.id)
      },

      error () {
        spinner.stop()

        modal.open({
          title: 'Error',
          body: 'We encountered an error while processing your donation. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      }
    })
  },

  render () {
    const {name, profileImageUrl} = this.props.student
    const {amount} = this.state

    return (
      <div className='donationPage'>
        <h3>Donate to {name}</h3>
        <div className='grid-flex-container'>
          <div className='grid-flex-cell'>
            <form onSubmit={this.onSubmitForm}>
              <fieldset>
                <div className='form-element'>
                  <label htmlFor='amount'>Name</label>
                  <input className='form-input' value={amount} onChange={this.onAmountChange} type='text' id='amount' placeholder='Amount' required/>
                </div>

                <button type='submit' className='button button-approve'>Donate</button>&nbsp;
                <button onClick={this.onCancelClick} type='button' className='button button-neutral'>Cancel</button>
              </fieldset>
            </form>
          </div>

          <div className='grid-flex-cell'>
            <img src={profileImageUrl}/>
          </div>
        </div>
      </div>
    )
  }
})
