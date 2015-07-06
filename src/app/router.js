import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'

import Layout from 'app/layout'
import DonationPage from 'pages/donation'
import HowItWorksPage from 'pages/how-it-works'
import MessagePage from 'pages/message'
import PartnersPage from 'pages/partners'
import SignInPage from 'pages/sign-in'
import StudentDetailsPage from 'pages/student-details'
import StudentFormPage from 'pages/student-form'
import StudentsPage from 'pages/students'
import TeachersPage from 'pages/teachers'
import Student from 'models/student'
import modal from 'helpers/modal'

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
    'howitworks': 'howItWorks',
    'partners': 'partners',
    'signin': 'signIn',
    'students/create': 'createStudent',
    'students/:id': 'viewStudent',
    'students/:id/edit': 'editStudent',
    'students/:id/donate': 'donate',
    'teachers': 'teachers',
    '*path': 'notFound'
  },

  howItWorks () {
    this.renderPage(<HowItWorksPage/>)
  },

  signIn () {
    this.renderPage(<SignInPage/>)
  },

  students () {
    const {students} = app

    // TODO: find a better way to get donations for each student
    students.fetch({
      success: () => {
        students.each(d => d.donations.fetch())

        this.renderPage(<StudentsPage students={students}/>)
      }
    })
  },

  createStudent () {
    const student = new Student()

    this.renderPage(<StudentFormPage student={student}/>)
  },

  viewStudent (id) {
    const {students} = app

    students.getOrFetch(id, (err, student) => {
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
    const {students} = app

    students.getOrFetch(id, (err, student) => {
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
    const {students} = app

    students.getOrFetch(id, (err, student) => {
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

  partners () {
    const {students} = app

    this.renderPage(<PartnersPage students={students}/>)
  },

  teachers () {
    this.renderPage(<TeachersPage/>)
  },

  notFound () {
    this.renderPage(<MessagePage title='Page Not Found'/>)
  }
})
