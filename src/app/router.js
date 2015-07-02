import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import Layout from 'app/layout'
import StudentsPage from 'pages/students'
import TeachersPage from 'pages/teachers'
import PartnersPage from 'pages/partners'
import StudentDetailsPage from 'pages/student-details'
import StudentFormPage from 'pages/student-form'
import MessagePage from 'pages/message'
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
    'partners': 'partners',
    'students/create': 'createStudent',
    'students/:id': 'viewStudent',
    'students/:id/edit': 'editStudent',
    'teachers': 'teachers',
    '*path': 'notFound'
  },

  students () {
    this.renderPage(<StudentsPage students={app.students}/>)
  },

  createStudent () {
    const student = new Student()
    this.renderPage(<StudentFormPage student={student}/>)
  },

  viewStudent (id) {
    app.students.getOrFetch(id, (err, student) => {
      if (err) {
        modal.open({
          title: 'Error',
          body: 'We encountered an error retrieving the student. Please wait a few minutes and try again. If the problems persists, please contat support.'
        })
      } else {
        this.renderPage(<StudentDetailsPage student={student} isPartner={app.me.isPartner}/>)
      }
    })
  },

  editStudent (id) {
    app.students.getOrFetch(id, (err, student) => {
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

  partners () {
    this.renderPage(<PartnersPage students={app.students}/>)
  },

  teachers () {
    this.renderPage(<TeachersPage/>)
  },

  notFound () {
    this.renderPage(<MessagePage title='Page Not Found'/>)
  }
})
