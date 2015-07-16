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
      amount: 0
    }
  },

  onAmountChange (event) {
    let amount = event.target.value.slice(1)
    amount = parseInt(amount, 10)

    this.setState({
      amount
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
    const {amount} = this.state
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

            <button type='submit' className='button button-primary'>Save</button>
          </fieldset>
        </form>
      </div>
    )
  }
})
