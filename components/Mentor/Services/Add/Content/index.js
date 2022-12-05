import React from 'react'
import OneOnOne from './OneOnOne'
import TextQuery from './TextQuery'
const Content = ({ currentService, setValues, state }) => {
  if (currentService === '1 on 1 Session') {
    return <OneOnOne setValues={setValues} state={state.oneOnOne} />
  }
  if (currentService === 'Text query') {
    return <TextQuery setValues={setValues} state={state.TextQuery} />
  }
  return <div>Content</div>
}

export default Content
