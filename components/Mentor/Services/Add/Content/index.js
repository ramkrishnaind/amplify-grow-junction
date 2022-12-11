import React from 'react'
import OneOnOne from './OneOnOne'
import TextQuery from './TextQuery'
import Workshop from './Workshop';
const Content = ({ currentService, setValues, state }) => {
  if (currentService === '1 on 1 Session') {
    return <OneOnOne setValues={setValues} state={state.oneOnOne} />
  }
  if (currentService === 'Text query') {
    return <TextQuery setValues={setValues} state={state.TextQuery} />
  }
  if (currentService === 'Workshop') {
    return <Workshop setValues={setValues} state={state.workshop} />
  }
  return <div>Content</div>
}

export default Content
