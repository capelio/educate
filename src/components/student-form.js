import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import spinner from 'helpers/spinner'
import types from 'helpers/prop-types'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: types.student
  },

  getInitialState () {
    const {name, story} = this.props.student

    return {
      name,
      story
    }
  },

  onSubmitForm (event) {
    event.preventDefault()

    const {student} = this.props

    spinner.start()

    student.save(this.state, {
      success () {
        spinner.stop()
        app.router.navigate('/students/' + student.id)
      },

      error () {
        spinner.stop()
        console.error('Error saving student to server')
      }
    })
  },

  onCancelClick () {
    window.history.back()
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
    const {name, story} = this.state

    return (
      <form onSubmit={this.onSubmitForm}>
        <fieldset>
          <legend>Student Details</legend>

          <div className='form-element'>
            <label htmlFor='name'>Name</label>
            <input className='form-input' value={name} onChange={this.onNameChange} type='text' id='name' placeholder='Full name' required/>
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
