import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

import CauseMgmtMenu from 'components/cause-mgmt-menu'
import ProfileImage from 'components/profile-image'

export default React.createClass({
  mixins: [ampersandMixin],

  propTypes: {
    cause: React.PropTypes.object
  },

  render () {
    const {cause} = this.props

    return (
      <div className='cause-images-mgmt'>
        <CauseMgmtMenu cause={cause} active='images'/>

        <ProfileImage cause={cause} canEdit={true}/>
      </div>
    )
  }
})

