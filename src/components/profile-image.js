import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import request from 'superagent'
import spinner from 'helpers/spinner'
import types from 'helpers/prop-types'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: types.student,
    canEdit: React.PropTypes.bool
  },

  onClick () {
    if (this.props.canEdit) {
      this.refs.fileSelect.getDOMNode().click()
    }
  },

  onFileChange (event) {
    event.preventDefault()

    const {student} = this.props
    const url = app.config.apiRoot + '/uploads/images'
    const file = event.target.files[0]
    const extension = file.name.slice(file.name.lastIndexOf('.'))

    spinner.start()

    request
      .post(url)
      .attach('image', file, file.name)
      .end((err, res) => {
        if (err) {
          spinner.stop()

          console.error(err)
        } else {
          spinner.stop()

          student.profileImage = res.body.filename + extension

          student.save({
            error () {
              // TODO: what error details are available here?
              console.error('Error saving profileImageUrl to server')
            }
          })
        }
      })
  },

  render () {
    const {student, canEdit} = this.props

    let classes
    if (canEdit) {
      classes = 'profileImage editable'
    } else {
      classes = 'profileImage'
    }

    return (
      <div className={classes} onClick={this.onClick}>
        <figure className='media-outlined'>
          <img src={student.profileImageUrl}/>
          <figcaption style={{display: canEdit ? 'block' : 'none'}}>Tap image to change</figcaption>
        </figure>
        <input {...this.props} id='fileSelect' ref='fileSelect' style={{display: 'none'}} type='file' onChange={this.onFileChange} accept='image/*'/>
      </div>
    )
  }
})
