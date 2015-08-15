# TODO

## FIXES

- don't persist empty-string email addresses when saving donations
- split modal error objects into their own file
- pull updateability out of the profile image and into its own component
- pull signInLink and accountMenu logic into their own render functions in layout
- change image tap action to view full size image
- when focusing $ fields, place cursor after $ character
- add validation to forms
- in tabular-lists, make entire row a click/tap target
- only list organization causes on org dashboard
- use the Express CORS module
- collapse hamburger menu after item selection
- delete student's old profile image when uploading a new one
- improve flow when encountering an error when viewing a deeplinked page

## FEATURES

- rename cause.name to cause.title
- rename cause profile to something less studenty
- turn <type>-tabular-list into a reusable tabular-list
- rename ProfileImage to Image
- rename pages/donation something else
- rename dashboard to org-dashboard
- rename donation-details to donation
- move forms into forms folder
- save orgId to causes
- add Accounts
- add Organizations
- use JWT, Macaroons, or Hawk for authentication
- add auth/role layer for restricting actions (only owning Org can change a Cause, etc)
- add Reports to Causes
- display Organization mission
- display Organization updates
- add Ledger to Organizations
- optimize image uploads, create different sizes
- create Admin dashboard
- add multiple Images to Causes
- add Years of Education concept
- add Universal and Recurring donations
- add page for viewing all students, funding and unfunded
- add paging/infinite scroll to tabular and feature lists
- change db to append-only log easily read by reducers
- add "archive" concept to persistence
- add trace instrumentation across app
- add Advanced tab to error modals, include stack, HTTP response codes, etc
- devise a pattern for separating compositional components that need to know about styling from structural components
- devise validation strategy that can be shared across client (models, forms) and API (express)

## CONTENT

## PROCESS

- add calendar reminders for renewing/redownloading SSL certs
- setup commit/tag GPG signing flow
- convert API to ES6 with Babel
- split API resources into their own files

## DEVOPS

- ensure pm2 and dropboxd restart on machine restart
- finish hardening nginx as ssl-only reverse proxy
- finish hardening API server

## MODULES

- publish clean API for sending email, publish mailgun adapter
- publish clean API for writing JSON to a append-only log, publish leveldb adapter

## DONE

### 2015-08-15

- add How it Works content

### 2015-08-14

- create a better logo

### 2015-08-13

- rename Students to Causes
- rename cause-list and donation-list to <type>-tabular-list
- rename management to mgmt (capitalized version too)
- write student-to-cause db migration (don't forget studentId on donations)
- create migration to rename students to causes in database
- create forms symlink in node_modules

### 2015-08-11

- only display unfunded students on front page
- don't render to document.body
- get rid of the /manage part of the student route, update model derived routes
- change layout's signedIn method to use app.me.isAuthenticated

### 2015-08-06

- send email receipt for donations
- add active/inactive mgmt section buttons
- display donor name on the donation view component
- after adding a new student, redirect to the student's profile mgmt page
- when editing a student's profile from the dashboard, return to profile mgmt route on save/cancel
- add email to manual donations
- change viewUrl, editUrl, etc to viewRoute, editRoute, etc to distinguish from API URLs
- order derived model properties alphabetically

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
