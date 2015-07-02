# TODO

## NEXT

- push to Git
- use a modal instead of console.error in the client
- resize spinner in portrait on phone
- why doesn't image reload on phone after upload?
- fix page not found when loading students/:id page
- convert API to ES6 using Babel

## LATER

- add donation flows
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

### 2015-07-02

- add spinner to all ajax calls, etc
- remove donation bits

### 2015-07-01

- figure out why profile image doesn't save on reload
- delete profile image when deleting student
- display student's profile image on student detail page
- don't display update-able profile image to visitors
- use plural resources in client routing for uniformity
- create loading modals
