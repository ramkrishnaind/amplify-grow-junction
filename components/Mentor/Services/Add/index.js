import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'
import { API } from 'aws-amplify'
import { toast } from 'react-toastify'
import {
  createOneOnOne,
  createWorkshop,
  createCourses,
  createPackages
} from '../../../../src/graphql/mutations'
import { createTextQuery } from '../../../../src/graphql/mutations'

const AddService = () => {
  const items = ['1 on 1 Session', 'Workshop', 'Courses', 'Text query', 'Packages']
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
    textQuery: {
      title: '',
      description: '',
      responseTime: '',
      responseTimeIn: 'day',
      listedPrice: '',
      finalPrice: '',
      // questions: [],
    },
    workshop: {
      title: '',
      description: '',
      callDuration: '',
      callDurationIn: 'min',
      listedPrice: '',
      finalPrice: '',
      workshopDate: '',
      workshopTime: '',
      workshopImage: '',
      hideService: '',
      limitedParticipants: '',
      audienceSize: '',
      // questions: [],
    },
    courses: {
      courseTitle: '',
      description: '',
      numberOfSessions: '',
      sessionDuration: '',
      sessionDurationIn: 'min',
      listedPrice: '',
      finalPrice: '',
      courseDate: '',
      courseTime: '',
      hideService: '',
      limitParticipants: '',
      audienceSize: '',
      courseImage: '',
      // session: [],
    },
    packages: {
      packageTitle: '',
      description: '',
      listedPrice: '',
      finalPrice: '',
      packageImage: '',
      emailContent: '',
      uploadFile:'',
      hideService: '',
      limitParticipants: '',
      audienceSize: '',
      // packageService: [],
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
    setState((prev) => ({ ...prev, textQuery: values }))
  }
  const textQuerySave = async () => {
    debugger
    if (
      !state.textQuery.title ||
      !state.textQuery.description ||
      !state.textQuery.responseTime ||
      !state.textQuery.listedPrice ||
      !state.textQuery.finalPrice
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
      toast.success('Text query added successfully')
      window.location.href = '/mentor/services'
    } catch (error) {
      toast.error(`Save Error:${error.errors[0].message}`)
    }
  }

  const handleWorkshopChange = (values) => {
    setState((prev) => ({ ...prev, workshop: values }))
  }
  const workshopSave = async () => {
    debugger
    if (
      !state.workshop.title ||
      !state.workshop.description ||
      !state.workshop.callDuration ||
      !state.workshop.listedPrice ||
      !state.workshop.finalPrice ||
      !state.workshop.workshopDate ||
      !state.workshop.workshopTime
    ) {
      toast.error('Mandatory fields not entered')
      return
    }
    try {
      await API.graphql({
        query: createWorkshop,
        variables: { input: { ...state.workshop } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      toast.success('Workshop added successfully')
      window.location.href = '/mentor/services'
    } catch (error) {
      toast.error(`Save Error:${error.errors[0].message}`)
    }
  }

  const handleCoursesChange = (values) => {
    setState((prev) => ({ ...prev, courses: values }))
  }
  const coursesSave = async () => {
    debugger
    if (
      !state.courses.courseTitle ||
      !state.courses.description ||
      !state.courses.numberOfSessions ||
      !state.courses.sessionDuration||
      !state.courses.listedPrice ||
      !state.courses.finalPrice ||
      !state.courses.courseDate ||
      !state.courses.courseTime
    ) {
      toast.error('Mandatory fields not entered')
      return
    }
    try {
      await API.graphql({
        query: createCourses,
        variables: { input: { ...state.courses } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      toast.success('Courses added successfully')
      window.location.href = '/mentor/services'
    } catch (error) {
      toast.error(`Save Error:${error.errors[0].message}`)
    }
  }

  const handlePackagesChange = (values) => {
    setState((prev) => ({ ...prev, packages: values }))
  }
  const packagesSave = async () => {
    debugger
    if (
      !state.packages.packageTitle ||
      !state.packages.description ||
      !state.packages.listedPrice ||
      !state.packages.finalPrice
    ) {
      toast.error('Mandatory fields not entered')
      return
    }
    try {
      await API.graphql({
        query: createPackages,
        variables: { input: { ...state.packages } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      toast.success('Packages added successfully')
      window.location.href = '/mentor/services'
    } catch (error) {
      toast.error(`Save Error:${error.errors[0].message}`)
    }
  }


  const setValues = (values) => {
    switch (currentService) {
      case items[0]:
        handleOneOnOneChange(values)
        break
      case items[1]:
        handleWorkshopChange(values)
        break
      case items[2]:
        handleCoursesChange(values)
        break
      case items[3]:
        handleTextQueryChange(values)
      case items[4]:
      default:
        handlePackagesChange(values)
    }
  }

  const saveClick = () => {
    switch (currentService) {
      case '1 on 1 Session':
        oneOnOneSave()
        break
      case 'Courses':
        coursesSave()
        break
      case 'Text query':
        textQuerySave()
        break
      case 'Workshop':
        workshopSave()
        break
      case 'Packages':
        packagesSave()
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
        setValues={setValues}
      />
    </main>
  )
}

export default AddService
