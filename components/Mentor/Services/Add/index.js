import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'
import { API } from 'aws-amplify'
import { toast } from 'react-toastify'
import { createOneOnOne } from '../../../../src/graphql/mutations'
import {createTextQuery} from '../../../../src/graphql/mutations'

const AddService = () => {
  const items = ['1 on 1 Session', 'Workshop', 'Courses', 'Text query']
  const [state, setState] = useState({
    oneOnOne: {
      sessionTitle: '',
      listedPrice: '',
      finalPrice: '',
      numberOfSessions: '',
      sessionDuration: '',
      sessionDurationIn: 'min',
      description: '',
      // questions: [],
    },
    textQuery:{
      title: '',
      description: '',
      responseTime: '',
      responseTimeIn:'day',
      listedPrice: '',
      finalPrice: '',
     // questions: [],
    },
  })
  const [currentService, setCurrentService] = useState(items[0])
  const handleOneOnOneChange = (values) => {
    debugger
    setState((prev) => ({ ...prev, oneOnOne: values }))
  }
  const oneOnOneSave = async () => {
    debugger
    if (
      !state.oneOnOne.sessionTitle ||
      !state.oneOnOne.finalPrice ||
      !state.oneOnOne.listedPrice ||
      !state.oneOnOne.sessionDuration ||
      !state.oneOnOne.numberOfSessions
    ) {
      toast.error('Mandatory fields not entered')
      return
    }
    try {
      await API.graphql({
        query: createOneOnOne,
        variables: { input: { ...state.oneOnOne } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      toast.success('Profile added successfully')
      window.location.href = '/mentor/services'
    } catch (error) {
      toast.error(`Save Error:${error.errors[0].message}`)
    }
  }
  const handleTextQueryChange = (values) => {
    setState((prev) => ({ ...prev, oneOnOne: values }))
  }
  const textQuerySave = async () => {
    if (
      !state.textQuery.title ||
      !state.textQuery.description||
      !state.textQuery.responseTime||
      !state.textQuery.responseTimeIn||
      !state.oneOnOne.listedPrice||
      !state.oneOnOne.finalPrice
    ) {
      toast.error('Mandatory fields not entered')
      return
    }
    try {
      await API.graphql({
        query: createTextQuery,
        variables: { input: { ...state.textQuery } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      toast.success('Profile added successfully')
      window.location.href = '/mentor/services'
    } catch (error) {
      toast.error(`Save Error:${error.errors[0].message}`)
    }
  }
  const saveClick = () => {
    switch (currentService) {
      case '1 on 1 Session':
        oneOnOneSave()
        break
        case 'Text query':
          textQuerySave()
          break
    }
  }
  console.log('state', state)
  return (
    <main className="flex flex-col justify-start p-10 md:p-20 ">
      <Header
        currentService={currentService}
        setCurrentService={setCurrentService}
        items={items}
        saveClick={saveClick}
      />
      <Content
        currentService={currentService}
        state={state}
        setValues={handleOneOnOneChange}
      />
       <Content
        currentService={currentService}
        state={state}
        setValues={handleTextQueryChange}
      />
    </main>
  )
}

export default AddService
