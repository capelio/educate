import React from 'react'

const {number, object, shape, string} = React.PropTypes

export default {
  student: shape({
    id: string,
    name: string,
    story: string,
    profileImage: string,
    goal: number,
    addUrl: string,
    donateUrl: string,
    editUrl: string,
    profileImageUrl: string
  }),

  students: object
}
