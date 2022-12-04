import React from 'react'
import OneOnOne from './OneOnOne'
const Content = ({ currentService, setValues, state }) => {
  if (currentService === '1 on 1 Session') {
    return <OneOnOne setValues={setValues} state={state.oneOnOne} />
  }
  return <div>Content</div>
}

export default Content
