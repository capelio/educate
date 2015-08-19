import app from 'ampersand-app'
import {inherits} from 'util'
import extend from 'lodash.assign'

function ClientError (props) {
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  extend(this, props)
}
inherits(ClientError, Error)

function ServerError (props) {
  this.name = this.constructor.name
  extend(this, props)
}
inherits(ServerError, Error)

export function NotFoundError (message = 'NotFoundError') {
  const {supportEmail} = app.config

  return new ServerError({
    name: 'NotFoundError',
    message: `We were unable to locate what you were looking for. This could be due to a temporary problem. Please wait a few moments and use the Try Again button below. If the problem persists, please contact support at ${supportEmail}.`,
    status: 404
  })
}

export function InternalError (message = 'InternalError') {
  const {supportEmail} = app.config

  return new ServerError({
    name: 'InternalError',
    message: `We encountered an error while attempting to fulfill your request. This could be a temporary problem. Please wait a few moments and use the Try Again button below. If the problem persists, please contact support at ${supportEmail}.`,
    status: 500
  })
}
