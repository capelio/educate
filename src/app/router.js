import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'

// Custom errors
import {InternalError, NotFoundError} from 'app/errors'

// Layout and Pages
import Layout from 'app/layout'
import CauseDetailsPage from 'pages/cause-details'
import CauseFormPage from 'pages/cause-form'
import CauseDonationsMgmtPage from 'pages/cause-donations-mgmt'
import CauseImagesMgmtPage from 'pages/cause-images-mgmt'
import CauseProfileMgmtPage from 'pages/cause-profile-mgmt'
import CausesPage from 'pages/causes'
import DashboardPage from 'pages/dashboard'
import DonatePage from 'pages/donate'
import DonationDetailsPage from 'pages/donation-details'
import DonationFormPage from 'pages/donation-form'
import ErrorPage from 'pages/error'
import HowItWorksPage from 'pages/how-it-works'
import MessagePage from 'pages/message'
import SignInPage from 'pages/sign-in'

// Models
import Cause from 'models/cause'
import Donation from 'models/donation'

function auth (handler) {
  return function () {
    if (app.me.token) {
      this[handler].apply(this, arguments)
    } else {
      this.redirectTo('/signin')
    }
  }
}

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    React.render(page, document.getElementById('app'))
  },

  routes: {
    '': 'viewCauses',
    'causes/create': auth('createCause'),
    'causes/:id': 'viewCause',
    'causes/:id/donate': 'donate',
    'causes/:id/donations/create': auth('createDonation'),
    'causes/:id/edit': auth('editCause'),
    'causes/:id/donations': auth('viewCauseDonations'),
    'causes/:id/images': auth('viewCauseImages'),
    'causes/:id/profile': auth('viewCauseProfile'),
    'causes/:id/thankyou': 'donationConfirmation',
    'causes/:causeId/donations/:id': auth('viewDonation'),
    'causes/:causeId/donations/:id/edit': auth('editDonation'),
    'dashboard': auth('dashboard'),
    'howitworks': 'howItWorks',
    'signin': 'signIn',
    '*path': 'notFound'
  },

  howItWorks () {
    this.renderPage(<HowItWorksPage/>)
  },

  signIn () {
    this.renderPage(<SignInPage/>)
  },

  viewCauses () {
    app.causes.fetchUnfunded(err => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        this.renderPage(<CausesPage causes={app.causes}/>)
      }
    })
  },

  createCause () {
    const cause = new Cause()
    this.renderPage(<CauseFormPage cause={cause}/>)
  },

  viewCause (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        this.renderPage(<CauseDetailsPage cause={cause}/>)
      }
    })
  },

  donate (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        this.renderPage(<DonatePage cause={cause}/>)
      }
    })
  },

  editCause (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        this.renderPage(<CauseFormPage cause={cause}/>)
      }
    })
  },

  viewCauseDonations (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        this.renderPage(<CauseDonationsMgmtPage cause={cause}/>)
      }
    })
  },

  viewCauseImages (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        this.renderPage(<CauseImagesMgmtPage cause={cause}/>)
      }
    })
  },

  viewCauseProfile (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        this.renderPage(<CauseProfileMgmtPage cause={cause}/>)
      }
    })
  },

  createDonation (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        const donation = new Donation({causeId: cause.id})
        this.renderPage(<DonationFormPage cause={cause} donation={donation}/>)
      }
    })
  },

  viewDonation (causeId, id) {
    app.causes.fetchById(causeId, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        const donation = cause.donations.get(id)
        this.renderPage(<DonationDetailsPage cause={cause} donation={donation}/>)
      }
    })
  },

  editDonation (causeId, id) {
    app.causes.fetchById(causeId, (err, cause) => {
      if (err && err.message === 'not found') {
        this.renderPage(<ErrorPage error={NotFoundError()}/>)
      } else if (err) {
        this.renderPage(<ErrorPage error={InternalError()}/>)
      } else {
        const donation = cause.donations.get(id)
        this.renderPage(<DonationFormPage cause={cause} donation={donation}/>)
      }
    })
  },

  dashboard () {
    app.causes.fetch({
      success: () => {
        this.renderPage(<DashboardPage causes={app.causes}/>)
      },

      error: (collection, res) => {
        if (res.status === 404) {
          this.renderPage(<ErrorPage error={NotFoundError()}/>)
        } else {
          this.renderPage(<ErrorPage error={InternalError()}/>)
        }
      }
    })
  },

  donationConfirmation () {
    this.renderPage(<MessagePage title='Thank you!' body='Your donation has successfully been processed and a receipt has been sent to your email address.'/>)
  },

  notFound () {
    this.renderPage(<MessagePage title='Page Not Found'/>)
  }
})
