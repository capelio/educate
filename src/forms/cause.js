import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object
  },

  getInitialState () {
    const {goal, name, story} = this.props.cause

    return {
      goal,
      name,
      story
    }
  },

  onSubmitForm (event) {
    event.preventDefault()

    const {cause} = this.props

    spinner.start()

    cause.save(this.state, {
      wait: true,

      success () {
        spinner.stop()
        app.router.history.navigate(cause.manageProfileRoute)
      },

      error () {
        spinner.stop()

        modal.open({
          title: 'Error',
          body: 'We encountered an error while creating the new cause. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      }
    })
  },

  onCancelClick () {
    window.history.back()
  },

  onGoalChange (event) {
    let goal = event.target.value.slice(1)
    goal = parseInt(goal, 10)

    this.setState({
      goal
    })
  },

  onNameChange (event) {
    this.setState({
      name: event.target.value
    })
  },

  onStoryChange (event) {
    this.setState({
      story: event.target.value
    })
  },

  render () {
    const {id, manageProfileRoute} = this.props.cause
    const {goal, name, story} = this.state

    let prettyGoal = '$' + (goal ? goal : '')

    return (
      <form className='cause-form' onSubmit={this.onSubmitForm}>
        <fieldset>
          <legend>Student Details</legend>

          <div className='form-element'>
            <label htmlFor='name'>Name</label>
            <input className='form-input' value={name} onChange={this.onNameChange} type='text' id='name' placeholder='Full name' required/>
          </div>

          <div className='form-element'>
            <label htmlFor='goal'>Goal</label>
            <input className='form-input' value={prettyGoal} onChange={this.onGoalChange} type='text' id='goal' placeholder='Fundraising goal' required/>
          </div>

          <div className='form-element'>
            <label htmlFor='story'>Story</label>
            <textarea className='form-input' value={story} onChange={this.onStoryChange} type='text' id='story' placeholder='Story' required></textarea>
          </div>

          <button type='submit' className='button button-approve'>Save</button>&nbsp;
          <a href={id ? manageProfileRoute : '/dashboard'} className='button button-neutral'>Cancel</a>
        </fieldset>
      </form>
    )
  }
})
