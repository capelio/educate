# TODO

## NEXT

- display donor name on the donation view component
- when editing a student's profile from the dashboard, return to profile mgmt route on save/cancel
- add email to manual donations
- don't allow manual editing of credit card donations
- only display unfunded students on front page
- add page for viewing all students, funded and unfunded, with paging/infinite scroll
- add paging/infinite scroll to dashboard

- change viewUrl, editUrl, etc to viewRoute, editRoute, etc to distinguish from API URLs
- change students/:id/manage/profile|donations routes to student/:id/profile|donations routes (in model/donation.js donationsRoute prop too)

- finish hardening nginx as ssl-only reverse proxy
- finish hardening API server
- change image tap action to view fullscreen image
- setup reminders to renew/redownload certs
- pull editability of profile image out from the profile-image component. compose the two together in the dashboard. ensure no editability outside of the dashboard (but fullscreen should still work)
- change layout's signedIn method to use app.me.isAuthenticated
- add renderSignInLink and renderAccountMenu to layout
- change deactivate student to archive student
- update db calls to exclude archived students unless explicitly asked for
- add/edit/archive student case studies
- add student/organization relationship to student creation and db process
- create admin page
- create org add/edit/archive components
- create user add/edit/archive components
- save orgId when saving students
- only list organization students on dashboard
- view archived students
- add expenses page for organizations
- list students and expenses on organization dashboard
- add Organizations pages (mission, updates, etc) using Org entered copy (Org settings page?)
- fix bug when submitting empty signin form
- when focusing Goal field on student form, place cursor at end of $
- add $ pretty format to donate form, do focus trick as well
- make entire summary div a tap target for viewing student details
- when creating new donation models, do 'studentId: this.parent.id' equiv instead of relying on the API to add it to JSON
- figure out why image doesn't reload on phone after upload of large image files
- fix error when: visit deep link student profile -> donate button -> donate $ -> return student profile, $ raised is wrong
- restart pm2 and dropbox on server restart

## LATER

- create clean API module for sending email, write mailgun adapter
- create clean API module for persisting JSON, write leveldb adapter
- add multiple images for students
- put API calls behind a api.js module (api.getStudents(), api.getDonation(id), etc))
- figure out how to deal with updating collection after a model save
- come up with a pattern for separating compositional layout components (that need to know about Yeti/Bootstrap, etc) from reusable functional components
- split express routes into routes/resource.js files
- turn token generator into a module
- turn db layer into a fully journaled db (easy audit logging, replay, etc)
- add trace instrumentation
- add and use express.js cors module
- use JWT, Macaroons, or Hawk for authentication
- add real user dashboard pages
- add validation for funding goal amount during create/update
- add validation for donation amount on pages/donation
- collapse menu after selection
- fix forceUpdate() warnings when editing a student
- remove the confusion! camelCase everything (JS, CSS, filenames, etc), too many exceptions to remember
- delete student's old profile image when uploading a new one
- improve flow when encountering an error viewing a deep link from another website (i.e. going from google.com to students/:id page)
- show stack trace in error modal using 'Advanced' expansion approach. show HTTP response codes, etc, as well
- improve the classes = canEdit logic in components/profile-image render()
- update isPartner/canEdit check for profile images to only allow the partner who owns the student to edit the profile image
- research image cropping and optimization process (SaaS avail? browser-side JS library?)
- add validation to express endpoints, use a method that can be reused on the client (is there a way to unify React.PropTypes, Ampersand model definitions, Express param validation, etc?)
- replace confirm option in student deactivation flow with an Undo option
- does it make sense to use an ampersand model for uploads? multiple uploaded images, files, etc, would need collections
- can we add a check for className strings with commas in them to standard or another linter? (common mistake of className='one, two' instead of className='one two')
- use a currency pretty formatter (commas, etc)
- convert API to ES6 using Babel
- setup commit/tag GPG signing flows
- add universal and recurring donations
- use "donate for X years of education" messaging

## DONE

### 2015-08-06

- send email receipt for donations
- add active/inactive mgmt section buttons
- after adding a new student, redirect to the student's profile mgmt page

### 2015-08-04

- test real money donations in production
- fix spinner "The node to be removed is not a child of this node" bug

### 2015-08-03

- hook up real donations
- add SSL, force everything over HTTPS

### 2015-08-02

- remove Archive button from dashboard student listing

### 2015-07-31

- add donor field to donations
- enable donation removal
- update Students in Need layout to better fit existing pictures
- display donors on student-details page, clean up layout
- redirect to the donations mgmt page after creating/editing a donation
- remove the funding-progress component

### 2015-07-29

- use an Add Donation button instead of an inline form, point button to form
- remove isAuthenticated/management switches from student-details
- remove manual-donation-form component
- on "In Need" page, use a student-card component that composes student info and funding/donation functionality for each student
- remove the student-summary component
- unlink student name in student-details component
- on "Manage Profile" page, use student-profile component that displays student profile info only
- add "Manage Images" page to student management, display profile image component

### 2015-07-23

- use menu for managing student profile and student donations
- move donation Edit and Remove buttons to donation-details component
- remove Edit & Remove buttons from donations-list, link amount to a donation-details page, put Edit and Remove buttons there
- link donation Edit button to a donation-form

### 2015-07-21

- create separate students-list and students-list-item components and use for dashboard
- link to students/:id/manage from the dashboard, render pages/student-management.js

### 2015-07-16

- allow organizations to manually add/edit/archive donations
- remove propTypes helper
- add newline to separate npm imports from local imports
- fix issue with admin bar functions still avail after signout
- add createdAt and updatedAt timestamps to all records
- add Date/createdAt column to DonationsList
- delete and re-add production students so timestamp are created
- add description field to donation models
- preserve paragraph formatting in student story textarea (is WYSIWYG overkill?)
- add trace module and expose via app

### 2015-07-13

- add How it Works page
- add login/logout flows
- rename Partner page to Dashboard, update all links to /partners
- remove Teachers page and route
- change appUrl to viewUrl
- change instances of app.router.navigate to app.router.history.navigate
- change isPartner/canEdit checks to look for app.me.token, remove app.me.isPartner

### 2015-07-08

- upgrade prod server to 15.04
- setup hourly backup for prod data

### 2015-07-06

- use Empower Nepal as temporary branding
- make story textarea larger
- fix NaN error when editing a student
- change donation amount label from Name to Amount

### 2015-07-04

- add "make a donation" flow
- add donation collection and model
- persist donations
- fetch student donations when getting students for the /students page
- sum donations to calculate "raised" value for funding progress component
- display donation progress on student details page
- hook up Cancel button on donation page (return to student's profile)
- fix issue when navigating partners -> edit -> save -> deactivate (make the redirectUrl configurable)

### 2015-07-03
- add 200.html to support deep linking
- fix page not found when loading students/:id page
- put profileImage styles into their own file
- put spinner styles into their own file
- resize spinner in portrait on phone
- add funding goal to student model and student create/edit flows
- display funding progress in summary

### 2015-07-02

- push to Git
- add spinner to all ajax calls, etc
- remove donation bits
- use a modal instead of console.error in the client
- add spinner to admin bar deactivate
- only show spinner if it's taken more than 1 second
- remove X Page titles

### 2015-07-01

- figure out why profile image doesn't save on reload
- delete profile image when deleting student
- display student's profile image on student detail page
- don't display update-able profile image to visitors
- use plural resources in client routing for uniformity
- create loading modals
