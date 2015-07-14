import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'

import Layout from 'app/layout'
import DonationPage from 'pages/donation'
import HowItWorksPage from 'pages/how-it-works'
import MessagePage from 'pages/message'
import DashboardPage from 'pages/dashboard'
import SignInPage from 'pages/sign-in'
import StudentDetailsPage from 'pages/student-details'
import StudentFormPage from 'pages/student-form'
import StudentsPage from 'pages/students'
import Student from 'models/student'
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
    '': 'students',
    'dashboard': auth('dashboard'),
    'howitworks': 'howItWorks',
    'signin': 'signIn',
    'students/create': auth('createStudent'),
    'students/:id': 'viewStudent',
    'students/:id/edit': auth('editStudent'),
    'students/:id/donate': 'donate',
    '*path': 'notFound'
  },

  howItWorks () {
    this.renderPage(<HowItWorksPage/>)
  },

  signIn () {
    this.renderPage(<SignInPage/>)
  },

  students () {
    app.students.fetch({
      success: () => {
        app.students.each(s => s.donations.fetch())

        this.renderPage(<StudentsPage students={app.students}/>)
      }
    })
  },

  createStudent () {
    const student = new Student()

    this.renderPage(<StudentFormPage student={student}/>)
  },

  viewStudent (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contat support.'
        })
      } else {
        this.renderPage(<StudentDetailsPage student={student}/>)
      }
    })
  },

  editStudent (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contat support.'
        })
      } else {
        this.renderPage(<StudentFormPage student={student}/>)
      }
    })
  },

  donate (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contat support.'
        })
      } else {
        this.renderPage(<DonationPage student={student}/>)
      }
    })
  },

  dashboard () {
    app.students.fetch({
      success: () => {
        app.students.each(s => s.donations.fetch())

        this.renderPage(<DashboardPage students={app.students}/>)
      }
    })
  },

  notFound () {
    this.renderPage(<MessagePage title='Page Not Found'/>)
  }
})
