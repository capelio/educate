# TODO

## NEXT

- resize spinner in portrait on phone
- why doesn't image reload on phone after upload?
- fix page not found when loading students/:id page
- convert API to ES6 using Babel

## LATER

- add donation flows
- fix forceUpdate() warnings when editing a student
- delete student's old profile image when updated
- improve flow when encountering an error when viewing students/:id in the case when visiting the direct link (i.e. going from google.com to the students/:id page)
- show stack trace in error modal using 'Advanced' expansion approach. show HTTP response codes, etc, as well
- improve the classes = canEdit logic in comp/profile-image render()
- preserve paragraph formatting in student story textarea (WYSIWYG overkill?)
- update isPartner/canEdit check for profile images to only allow the partner who owns the student to edit the profile image
- research image cropping and optimization process (SaaS avail?)
- add validation to express endpoints, use a method that can be reused on the client (is there a way to unify React.PropTypes, Ampersand model definitions, Express param validation, etc?)
- setup commit/tag GPG signing flows
- replace confirm option in student deactivation flow with an Undo option
- fix issue when navigating partners -> edit -> save -> deactivate (change return location based on displayName of parent React component?)
- can we use a mixin to reuse our model props for propTypes?
- look for or create a Upload ampersand model in a rest-collection

## DONE

### 2015-07-03
- add 200.html to support deep linking

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
