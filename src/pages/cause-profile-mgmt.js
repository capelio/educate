import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import CauseAdminBar from 'components/cause-admin-bar'
import CauseProfile from 'components/cause-profile'
import CauseMgmtMenu from 'components/cause-mgmt-menu'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object
  },

  render () {
    const {cause} = this.props

    return (
      <div className='cause-mgmt'>
        <CauseMgmtMenu cause={cause} active='profile'/>

        <CauseProfile cause={cause}/>

        <CauseAdminBar cause={cause} deactivateRedirect='/dashboard'/>
      </div>
    )
  }
})
