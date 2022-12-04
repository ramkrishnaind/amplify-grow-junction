import React from 'react'
import OneOnOne from './OneOnOne'
const Content = ({ currentService, setValues }) => {
  if (currentService === '1 on 1 Session') {
    return <OneOnOne setValues={setValues} />
  }
  return <div>Content</div>
}

export default Content
