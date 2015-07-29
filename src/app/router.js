import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'

import Layout from 'app/layout'
import DonationPage from 'pages/donation'
import HowItWorksPage from 'pages/how-it-works'
import MessagePage from 'pages/message'
import DashboardPage from 'pages/dashboard'
import DonationDetailsPage from 'pages/donation-details'
import DonationFormPage from 'pages/donation-form'
import SignInPage from 'pages/sign-in'
import StudentDetailsPage from 'pages/student-details'
import StudentFormPage from 'pages/student-form'
import StudentDonationsManagementPage from 'pages/student-donations-management'
import StudentImagesManagementPage from 'pages/student-images-management'
import StudentProfileManagementPage from 'pages/student-profile-management'
import StudentsPage from 'pages/students'
import Donation from 'models/donation'
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
    'students/:id/donate': 'donate',
    'students/:id/edit': auth('editStudent'),
    'students/:id/manage': auth('manageStudentProfile'),
    'students/:id/manage/donations': auth('manageStudentDonations'),
    'students/:id/manage/images': auth('manageStudentImages'),
    'students/:id/manage/profile': auth('manageStudentProfile'),
    'students/:id/donations/create': auth('createDonation'),
    'students/:studentId/donations/:id': auth('viewDonation'),
    'students/:studentId/donations/:id/edit': auth('editDonation'),
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
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        this.renderPage(<StudentDetailsPage student={student}/>)
      }
    })
  },

  donate (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        this.renderPage(<DonationPage student={student}/>)
      }
    })
  },

  editStudent (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        this.renderPage(<StudentFormPage student={student}/>)
      }
    })
  },

  manageStudentDonations (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        this.renderPage(<StudentDonationsManagementPage student={student}/>)
      }
    })
  },

  manageStudentImages (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        this.renderPage(<StudentImagesManagementPage student={student}/>)
      }
    })
  },

  manageStudentProfile (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        this.renderPage(<StudentProfileManagementPage student={student}/>)
      }
    })
  },

  createDonation (id) {
    app.students.fetchById(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        const donation = new Donation({collection: student.donations})
        student.donations.add(donation)

        this.renderPage(<DonationFormPage student={student} donation={donation}/>)
      }
    })
  },

  viewDonation (studentId, id) {
    app.students.fetchById(studentId, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        student.donations.fetchById(id, (err, donation) => {
          if (err) {
            modal.open({
              title: 'Error',
              body: 'We encountered an error retrieving the donation. Please wait a few minutes and try again. If the problems persists, please contact support.'
            })
          } else {
            this.renderPage(<DonationDetailsPage student={student} donation={donation}/>)
          }
        })
      }
    })
  },

  editDonation (studentId, id) {
    app.students.fetchById(studentId, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contact support.'
        })
      } else {
        student.donations.fetchById(id, (err, donation) => {
          if (err) {
            modal.open({
              title: 'Error',
              body: 'We encountered an error retrieving the donation. Please wait a few minutes and try again. If the problems persists, please contact support.'
            })
          } else {
            this.renderPage(<DonationFormPage student={student} donation={donation}/>)
          }
        })
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
