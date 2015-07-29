import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donation: React.PropTypes.object,
    onCancel: React.PropTypes.func,
    onSuccess: React.PropTypes.func
  },

  getInitialState () {
    const {amount, description} = this.props.donation

    return {
      amount,
      description
    }
  },

  onAmountChange (event) {
    let amount = event.target.value.slice(1)
    amount = parseInt(amount, 10)

    this.setState({
      amount
    })
  },

  onDescriptionChange (event) {
    this.setState({
      description: event.target.value
    })
  },

  onCancelClick (event) {
    this.props.onCancel()
  },

  onFormSubmit (event) {
    event.preventDefault()

    const {donation, onSuccess} = this.props

    spinner.start()

    donation.save(this.state, {
      wait: true,

      success () {
        spinner.stop()

        onSuccess()
      },

      error () {
        spinner.stop()

        modal.open({
          title: 'Error',
          body: 'We encountered an error while saving the donation. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      }
    })
  },

  render () {
    const {amount, description} = this.state
    const prettyAmount = '$' + (amount ? amount : '')

    return (
      <div className='donation-form'>
        <form onSubmit={this.onFormSubmit}>
          <fieldset>
            <legend>Donation</legend>

            <div className='form-element'>
              <label htmlFor='amount'>Amount</label>
              <input
                className='form-input'
                value={prettyAmount}
                onChange={this.onAmountChange}
                type='text'
                id='amount'
                name='amount'
                placeholder='Amount'
                required
              />
            </div>

            <div className='form-element'>
              <label htmlFor='description'>Description</label>
              <input
                className='form-input'
                value={description}
                onChange={this.onDescriptionChange}
                type='text'
                id='description'
                name='description'
                placeholder='Description'
                required
              />
            </div>

            <button
              type='submit'
              className='button button-approve'
            >Save</button>

            &nbsp;

            <button
              onClick={this.onCancelClick}
              type='button'
              className='button button-neutral'
            >Cancel</button>
          </fieldset>
        </form>
      </div>
    )
  }
})
