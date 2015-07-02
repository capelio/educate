import React from 'react'

const {object, shape, string} = React.PropTypes

export default {
  student: shape({
    id: string,
    name: string,
    story: string,
    profileImage: string,
    addUrl: string,
    editUrl: string,
    profileImageUrl: string
  }),

  students: object
}
