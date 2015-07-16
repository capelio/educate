import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object
  },

  getInitialState () {
    return {
      amount: 0,
      description: ''
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
    const description = event.target.value

    this.setState({
      description
    })
  },

  onFormSubmit (event) {
    event.preventDefault()

    const {student} = this.props

    spinner.start()

    student.donations.create(this.state, {
      at: 0,

      wait: true,

      success: () => {
        spinner.stop()

        this.setState(this.getInitialState())
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
      <div>
        <form onSubmit={this.onFormSubmit}>
          <fieldset>
            <legend>Add an Offline Donation</legend>

            <div className='form-element'>
              <label htmlFor='amount'>Amount</label>
              <input
                id='amount'
                type='text'
                className='form-input'
                value={prettyAmount}
                onChange={this.onAmountChange}
              />
            </div>

            <div className='form-element'>
              <label htmlFor='description'>Description</label>
              <input
                id='description'
                type='text'
                className='form-input'
                value={description}
                placeholder='Short description of the donation'
                onChange={this.onDescriptionChange}
              />
            </div>

            <button type='submit' className='button button-primary'>Save</button>
          </fieldset>
        </form>
      </div>
    )
  }
})
