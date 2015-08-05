import app from 'ampersand-app'
import React from 'react'
import {ReactScriptLoaderMixin} from 'react-script-loader'
import request from 'superagent'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  mixins: [ReactScriptLoaderMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  getInitialState () {
    return {
      donor: '',
      email: '',

      amount: 0,
      number: '',
      cvc: '',
      expirationMonth: '',
      expirationYear: '',

      scriptError: false,
      scriptReady: false
    }
  },

  getScriptURL () {
    return 'https://js.stripe.com/v2/'
  },

  onScriptLoaded () {
    Stripe.setPublishableKey(app.config.stripeKey) // eslint-disable-line no-undef

    this.setState({
      scriptReady: true
    })
  },

  onScriptError () {
    this.setState({
      scriptError: true
    })
  },

  onDonorChange (event) {
    this.setState({
      donor: event.target.value
    })
  },

  onEmailChange (event) {
    this.setState({
      email: event.target.value
    })
  },

  onAmountChange (event) {
    let amount = event.target.value.slice(1)
    amount = parseInt(amount, 10)

    this.setState({
      amount
    })
  },

  onNumberChange (event) {
    this.setState({
      number: event.target.value
    })
  },

  onCvcChange (event) {
    this.setState({
      cvc: event.target.value
    })
  },

  onExpirationMonthChange (event) {
    this.setState({
      expirationMonth: event.target.value
    })
  },

  onExpirationYearChange (event) {
    this.setState({
      expirationYear: event.target.value
    })
  },

  onSubmitForm (event) {
    event.preventDefault()

    const {student} = this.props
    const form = document.getElementById('payment-form')
    const paymentErrors = React.findDOMNode(this.refs.paymentErrors)
    const submitButton = React.findDOMNode(this.refs.submitButton)

    spinner.start()
    submitButton.disabled = true

    Stripe.card.createToken(form, (status, res) => { // eslint-disable-line no-undef
      if (res.error) {
        paymentErrors.style.display = 'block'
        paymentErrors.innerHTML = res.error.message

        spinner.stop()
        submitButton.disabled = false

        // TODO: log error
      } else {
        const {amount, donor, email} = this.state

        const body = {
          amount,
          donor,
          email,
          token: res.id
        }

        request.post(student.donateByCardUrl)
          .send(body)
          .end(function (err, res) {
            if (err) {
              spinner.stop()
              submitButton.disabled = false

              modal.open({
                title: 'Error',
                body: 'We encountered an error processing your donation. Please wait a few minutes and try again. If the problem persists, please contact support.'
              })

              // TODO: log error
            } else {
              student.donations.add(res.body)

              spinner.stop()
              submitButton.disabled = false

              app.router.history.navigate(student.thankYouRoute)
            }
          })
      }
    })
  },

  render () {
    if (this.state.scriptReady) {
      const {viewUrl, name, profileImageUrl} = this.props.student
      const {donor, email} = this.state
      const {amount, cvc, expirationMonth, expirationYear, number} = this.state
      const prettyAmount = '$' + (amount ? amount : '')

      return (
        <div className='donation-page'>
          <h3>Donate to {name}</h3>

          <div className='grid-flex-container'>
            <div className='grid-flex-cell'>
              <form
                method='POST'
                onSubmit={this.onSubmitForm}
                id='payment-form'
              >
                <fieldset>
                  <div className='form-element'>
                    <label htmlFor='donor'>Your Full Name</label>
                    <input
                      className='form-input'
                      value={donor}
                      onChange={this.onDonorChange}
                      type='text'
                      id='donor'
                      placeholder='Your Full Name'
                      required
                    />
                  </div>

                  <div className='form-element'>
                    <label htmlFor='email'>Your Email Address</label>
                    <input
                      className='form-input'
                      value={email}
                      onChange={this.onEmailChange}
                      type='text'
                      id='email'
                      placeholder='Your Email Address'
                      required
                    />
                  </div>

                  <div className='form-element'>
                    <label htmlFor='amount'>Amount</label>
                    <input
                      className='form-input'
                      value={prettyAmount}
                      onChange={this.onAmountChange}
                      type='text'
                      id='amount'
                      placeholder='Amount'
                      required
                    />
                  </div>

                  <div className='form-element'>
                    <label>Card Number</label>
                    <input
                      className='form-input'
                      value={number}
                      onChange={this.onNumberChange}
                      type='text'
                      size='20'
                      placeholder='Card Number'
                      data-stripe='number'
                      required
                    />
                  </div>

                  <div className='form-element'>
                    <label>CVC</label>
                    <input
                      className='form-input'
                      value={cvc}
                      onChange={this.onCvcChange}
                      type='text'
                      size='4'
                      placeholder='CVC'
                      data-stripe='cvc'
                      required
                    />
                  </div>

                  <div className='form-element'>
                    <label>Expiration Month</label>
                    <input
                      className='form-input'
                      value={expirationMonth}
                      onChange={this.onExpirationMonthChange}
                      type='text'
                      size='2'
                      placeholder='MM'
                      data-stripe='exp-month'
                      required
                    />
                  </div>

                  <div className='form-element'>
                    <label>Expiration Year</label>
                    <input
                      className='form-input'
                      value={expirationYear}
                      onChange={this.onExpirationYearChange}
                      type='text'
                      size='4'
                      placeholder='YYYY'
                      data-stripe='exp-year'
                      required
                    />
                  </div>

                  <div className='paymentErrors message message-alert' ref='paymentErrors' style={{display: 'none'}}></div>

                  <button ref='submitButton' type='submit' className='button button-approve'>Donate</button>&nbsp;
                  <a href={viewUrl} className='button button-neutral'>Cancel</a>
                </fieldset>
              </form>
            </div>

            <div className='grid-flex-cell'>
              <img src={profileImageUrl}/>
            </div>
          </div>
        </div>
      )
    } else {
      return <p></p>
    }
  }
})
