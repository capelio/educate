import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import request from 'superagent'

import modal from 'helpers/modal'
import spinner from 'helpers/spinner'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    student: React.PropTypes.object,
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
      .set('Authorization', app.me.token)
      .attach('image', file, file.name)
      .end((err, res) => {
        if (err) {
          spinner.stop()

          modal.open({
            title: 'Error',
            body: 'We encountered an error while uploading the new profile image. Please wait a few minutes and try again. If the problem persists, please contact support.'
          })
        } else {
          student.save({
            profileImage: res.body.filename + extension
          }, {
            wait: true,

            success () {
              spinner.stop()
            },

            error () {
              spinner.stop()

              modal.open({
                title: 'Error',
                body: 'We encountered an error while updating the student. Please wait a few minutes and try again. If the problem persists, please contact support.'
              })
            }
          })
        }
      })
  },

  render () {
    const {student, canEdit} = this.props

    let classes
    if (canEdit) {
      classes = 'profile-image editable'
    } else {
      classes = 'profile-image'
    }

    return (
      <div className={classes} onClick={this.onClick}>
        <figure className='profile-image_figure media-outlined'>
          <img src={student.profileImageUrl}/>
          <figcaption style={{display: canEdit ? 'block' : 'none'}}>Tap image to change</figcaption>
        </figure>
        <input {...this.props} id='fileSelect' ref='fileSelect' style={{display: 'none'}} type='file' onChange={this.onFileChange} accept='image/*'/>
      </div>
    )
  }
})
