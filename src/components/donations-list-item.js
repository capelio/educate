import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    donation: React.PropTypes.object
  },

  getInitialState () {
    const {amount} = this.props.donation

    return {
      amount
    }
  },

  componentDidUpdate () {
    if (this.state.editing) {
      React.findDOMNode(this.refs.amount).focus()
    }
  },

  onEditClick (event) {
    this.props.donation.editing = true
  },

  onRemoveClick (event) {
    if (window.confirm('Are you sure you want to remove this donation?')) {
      spinner.start()

      this.props.donation.destroy({
        wait: true,

        success () {
          spinner.stop()
        },

        error () {
          spinner.stop()

          modal.open({
            title: 'Error',
            body: 'We encountered an error while removing the donation. Please wait a few minutes and try again. If the problem persists, please contact support.'
          })
        }
      })
    }
  },

  onFormSubmit (event) {
    event.preventDefault()

    const {donation} = this.props

    spinner.start()

    donation.save(this.state, {
      wait: true,

      success: () => {
        spinner.stop()

        donation.editing = false
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

  onCancelClick (event) {
    this.props.donation.editing = false
    this.setState(this.getInitialState())
  },

  onAmountChange (event) {
    let amount = event.target.value.slice(1)
    amount = parseInt(amount, 10)

    this.setState({
      amount
    })
  },

  render () {
    const {editing} = this.props.donation
    const {amount} = this.state
    const prettyAmount = '$' + (amount ? amount : '')

    if (editing) {
      return (
        <tr>
          <td>
            <form onSubmit={this.onFormSubmit}>
              <input className='form-input form-element' onChange={this.onAmountChange} name='amount' ref='amount' value={prettyAmount}/>
            </form>
          </td>
          <td>
            <button className='button' onClick={this.onFormSubmit}>Save</button>
            &nbsp;
            <button className='button button-warn' onClick={this.onCancelClick}>Cancel</button>
          </td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>
            {prettyAmount}
          </td>
          <td>
            <button className='button' onClick={this.onEditClick}>Edit</button>
            &nbsp;
            <button className='button button-warn' onClick={this.onRemoveClick}>Remove</button>
          </td>
        </tr>
      )
    }
  }
})
