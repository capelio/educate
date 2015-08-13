import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'

// Layout and Pages
import Layout from 'app/layout'
import CauseDetailsPage from 'pages/cause-details'
import CauseFormPage from 'pages/cause-form'
import CauseDonationsMgmtPage from 'pages/cause-donations-mgmt'
import CauseImagesMgmtPage from 'pages/cause-images-mgmt'
import CauseProfileMgmtPage from 'pages/cause-profile-mgmt'
import CausesPage from 'pages/causes'
import DashboardPage from 'pages/dashboard'
import DonationPage from 'pages/donation'
import DonationDetailsPage from 'pages/donation-details'
import DonationFormPage from 'pages/donation-form'
import HowItWorksPage from 'pages/how-it-works'
import MessagePage from 'pages/message'
import SignInPage from 'pages/sign-in'

// Models
import Cause from 'models/cause'
import Donation from 'models/donation'

// Helpers
import modal from 'helpers/modal'

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

    React.render(page, document.body)
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
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        app.causes.each(cause => cause.donations.fetch())
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
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        cause.donations.fetch()
        this.renderPage(<CauseDetailsPage cause={cause}/>)
      }
    })
  },

  donate (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        this.renderPage(<DonationPage cause={cause}/>)
      }
    })
  },

  editCause (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        this.renderPage(<CauseFormPage cause={cause}/>)
      }
    })
  },

  viewCauseDonations (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        this.renderPage(<CauseDonationsMgmtPage cause={cause}/>)
      }
    })
  },

  viewCauseImages (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        this.renderPage(<CauseImagesMgmtPage cause={cause}/>)
      }
    })
  },

  viewCauseProfile (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        this.renderPage(<CauseProfileMgmtPage cause={cause}/>)
      }
    })
  },

  createDonation (id) {
    app.causes.fetchById(id, (err, cause) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        const donation = new Donation({causeId: cause.id})

        this.renderPage(<DonationFormPage cause={cause} donation={donation}/>)
      }
    })
  },

  viewDonation (causeId, id) {
    app.causes.fetchById(causeId, (err, cause) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        cause.donations.fetchById(id, (err, donation) => {
          if (err) {
            modal.open({
              title: 'Error',
              body: 'We encountered an error retrieving the donation. Please wait a few minutes and try again. If the problem persists, please contact support.'
            })
          } else {
            this.renderPage(<DonationDetailsPage cause={cause} donation={donation}/>)
          }
        })
      }
    })
  },

  editDonation (causeId, id) {
    app.causes.fetchById(causeId, (err, cause) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error. Please wait a few minutes and try again. If the problem persists, please contact support.'
        })
      } else {
        cause.donations.fetchById(id, (err, donation) => {
          if (err) {
            modal.open({
              title: 'Error',
              body: 'We encountered an error retrieving the donation. Please wait a few minutes and try again. If the problem persists, please contact support.'
            })
          } else {
            this.renderPage(<DonationFormPage cause={cause} donation={donation}/>)
          }
        })
      }
    })
  },

  dashboard () {
    app.causes.fetch({
      success: () => {
        app.causes.each(cause => cause.donations.fetch())

        this.renderPage(<DashboardPage causes={app.causes}/>)
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
