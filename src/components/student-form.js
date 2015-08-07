import app from 'ampersand-app'
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
    const {goal, name, story} = this.props.student

    return {
      goal,
      name,
      story
    }
  },

  onSubmitForm (event) {
    event.preventDefault()

    const {student} = this.props

    spinner.start()

    student.save(this.state, {
      wait: true,

      success () {
        spinner.stop()
        app.router.history.navigate(student.manageUrl)
      },

      error () {
        spinner.stop()

        modal.open({
          title: 'Error',
          body: 'We encountered an error while creating the new student. Please wait a few minutes and try again. If the problem persists, please contact support.'
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
    const {goal, name, story} = this.state

    let prettyGoal = '$' + (goal ? goal : '')

    return (
      <form className='student-form' onSubmit={this.onSubmitForm}>
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
          <button onClick={this.onCancelClick} type='button' className='button button-neutral'>Cancel</button>

        </fieldset>
      </form>
    )
  }
})
