import React from 'react'
import OneOnOne from './OneOnOne'
const Content = ({ currentService }) => {
  if (currentService === '1 on 1 Session') {
    return <OneOnOne />
  }
  return <div>Content</div>
}

export default Content
