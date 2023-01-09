import React, { useState, useEffect, useReducer, useRef, use } from 'react'
import classes from './Home.module.css'
import { toast } from 'react-toastify'
// import { useRouter } from 'next/router'
import OneOnOne from '../../../Student/Services/Home/OneOnOne'
import TextQuery from '../../../Student/Services/Home/TextQuery'
import Workshop from '../../../Student/Services/Home/Workshop'
import Courses from '../../../Student/Services/Home/Courses'
import Packages from '../../../Student/Services/Home/Packages'
import Link from 'next/link'
import TextField from '../../../../pages/ui-kit/TextField'
import { API, Auth, Storage, graphqlOperation } from 'aws-amplify'
import { listOneOnOnes } from '/src/graphql/queries'
import { listTextQueries } from '/src/graphql/queries'
import { listWorkshops } from '/src/graphql/queries'
import { listCourses } from '/src/graphql/queries'
import { listPackages } from '/src/graphql/queries'
import { useSelector, useDispatch } from 'react-redux'
import { RxCrossCircled } from 'react-icons/rx'
import Preview from '../../../Mentor/Profile/Preview'
import {
  getLoggedinUserEmail,
  getMentorData,
  getMentorDataOnName,
} from '../../../../utilities/user'
import { setMentors } from '../../../../redux/actions/MentorTitleAction'
import DatePicker from 'react-multi-date-picker'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import { AmplifySelectMfaType } from '@aws-amplify/ui-react'
import Multiselect from 'multiselect-react-dropdown'
const Home = () => {
  const mentorsState = useSelector((state) => state.MentorHeaderReducer)
  useEffect(() => {
    debugger
    if (!mentorsState.mentors || mentorsState.mentors?.length === 0) {
      debugger
      setMentors(dispatch)
    }
  }, [])
  const tabs = [
    { name: 'All', id: 0 },
    { name: 'One On One', id: 1 },
    { name: 'Workshops', id: 2 },
    { name: 'Courses', id: 3 },
    { name: 'Text query', id: 4 },
    { name: 'Packages', id: 5 },
  ]
  const onSelect = (selectedList, selectedItem) => {
    console.log('Add-selectedList', selectedList)
    console.log('Add-selectedItem', selectedItem)
    if (selectedItem.name === 'All') {
      setSelectedvalue([...tabs])
    } else {
      if (selectedList.length === 5) {
        setSelectedvalue([...tabs])
      } else {
        setSelectedvalue([...selectedList])
      }
    }
  }
  const searchClick = () => {}
  const onRemove = (selectedList, removedItem) => {
    console.log('Remove-selectedList', selectedList)
    console.log('Remove-selectedItem', removedItem)
    if (removedItem.name === 'All') {
      setSelectedvalue([])
    } else {
      setSelectedvalue([...selectedList.filter((item) => item.name !== 'All')])
    }
  }
  const [selectedValue, setSelectedvalue] = useState([
    { name: 'All', id: 0 },
    { name: 'One On One', id: 1 },
    { name: 'Workshops', id: 2 },
    { name: 'Courses', id: 3 },
    { name: 'Text query', id: 4 },
    { name: 'Packages', id: 5 },
  ])
  // return <div>Hi</div>
  // const router= useRouter()
  useEffect(() => {
    setShowSession(selectedValue.some((item) => item.name === 'One On One'))
    setShowWorkshop(selectedValue.some((item) => item.name === 'Workshops'))
    setShowTextquery(selectedValue.some((item) => item.name === 'Text query'))
    setShowCourses(selectedValue.some((item) => item.name === 'Courses'))
    setShowPackages(selectedValue.some((item) => item.name === 'Packages'))
  }, [selectedValue])
  console.log('selectedValue', selectedValue)
  const searchRef = useRef()
  const [openTab, setOpenTab] = React.useState(1)
  const [showSession, setShowSession] = useState(true)
  const [showWorkshop, setShowWorkshop] = useState(false)
  const [showTextquery, setShowTextquery] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const [showPackages, setShowPackages] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sessionResults, setSessionResults] = useState([])
  const [workshopResults, setWorkshopResults] = useState([])
  const [textQueryResults, setTextQueryResults] = useState([])
  const [coursesResults, setCoursesResults] = useState([])
  const [packagesResults, setPackagesResults] = useState([])
  const [sessionFilteredResults, setSessionFilteredResults] = useState([])
  const [workshopFilteredResults, setWorkshopFilteredResults] = useState([])
  const [textQueryFilteredResults, setTextQueryFilteredResults] = useState([])
  const [coursesFilteredResults, setCoursesFilteredResults] = useState([])
  const [packagesFilteredResults, setPackagesFilteredResults] = useState([])
  const [showServiceDetail, setShowServiceDetail] = useState(false)
  const [bookNow, setBookNow] = useState([])
  const [value, onChange] = useState(new Date())
  const [timeZone, setTimeZone] = useState({})

  const [bookSession1, setBookSession1] = useState(false)
  const [bookSession2, setBookSession2] = useState(false)
  const [bookSession3, setBookSession3] = useState(false)
  const [mentor, setMentor] = useState([])
  const [showMentor, setShowMentor] = useState(false)
  const [image, setImage] = useState('')
  const [fieldName, setFieldName] = useState('title')
  const [mentorName, setMentorName] = useState('')
  const [serviceName, setServiceName] = useState('')
  const [mentorData, setMentorData] = useState([])
  const [mentorUserName, setMentorUserName] = useState('')
  // const [filterSessionResults, setFilterSessionResults] = useState([])
  const addmentorData = (items) => {
    items.forEach((item) => {
      if (item.username) {
        item.user = getMentorData(item.username)
      }
    })
  }
  const showPreview = async (mentorPassed) => {
    if (mentorPassed) {
      if (mentorPassed.profile_image) {
        const img = await Storage.get(mentorPassed.profile_image)
        console.log('image - ', img)
        setImage(img)
      }

      setMentor(mentorPassed)
      setShowServiceDetail(false)
      setShowMentor(true)
    }
    debugger
    console.log('mentorPassed', mentorPassed)
  }
  const loadOneOnOne = async () => {
    try {
      debugger
      // const usrname = getLoggedinUserEmail()
      // console.log('usr', usr)
      const results = await API.graphql(graphqlOperation(listOneOnOnes))
      debugger
      if (results.data.listOneOnOnes.items.length > 0) {
        addmentorData(results.data.listOneOnOnes.items)
        setSessionResults(results.data.listOneOnOnes.items)
        setSessionFilteredResults(results.data.listOneOnOnes.items)
        // console.log('oneonone- ', sessionResults)
      }
    } catch (error) {
      // console.log(`Load Error:${error}`)
    }
  }

  const loadWorkshop = async () => {
    debugger
    try {
      // const usrname = getLoggedinUserEmail()
      // console.log('usr', usr)
      const results = await API.graphql(graphqlOperation(listWorkshops))
      if (results.data.listWorkshops.items.length > 0) {
        addmentorData(results.data.listWorkshops.items)
        setWorkshopResults(results.data.listWorkshops.items)
        setWorkshopFilteredResults(results.data.listWorkshops.items)
        console.log('workshop- ', workshopResults)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadCourses = async () => {
    try {
      // const usrname = getLoggedinUserEmail()
      // console.log('usr', usr)
      const results = await API.graphql(graphqlOperation(listCourses))
      if (results.data.listCourses.items.length > 0) {
        addmentorData(results.data.listCourses.items)
        setCoursesResults(results.data.listCourses.items)
        setCoursesFilteredResults(results.data.listCourses.items)
        console.log('courses- ', coursesResults)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadTextQuery = async () => {
    try {
      // const usrname = getLoggedinUserEmail()
      // console.log('usr', usr)
      const results = await API.graphql(graphqlOperation(listTextQueries))
      if (results.data.listTextQueries.items.length > 0) {
        addmentorData(results.data.listTextQueries.items)
        setTextQueryResults(results.data.listTextQueries.items)
        setTextQueryFilteredResults(results.data.listTextQueries.items)
        console.log('textquery- ', textQueryResults)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadPackages = async () => {
    try {
      // const usrname = getLoggedinUserEmail()
      // console.log('usr', usr)
      const results = await API.graphql(graphqlOperation(listPackages))
      if (results.data.listPackages.items.length > 0) {
        addmentorData(results.data.listPackages.items)
        setPackagesResults(results.data.listPackages.items)
        setPackagesFilteredResults(results.data.listPackages.items)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  useEffect(() => {
    loadOneOnOne()
    loadTextQuery()
    loadWorkshop()
    loadCourses()
    loadPackages()
  }, [])

  // useEffect(() => {
  //   setSessionResults(filterSessionResults)
  // }, [filterSessionResults])

  useEffect(() => {
    setMentorUserName(mentorUserName)
  }, [mentorUserName])

  const handleChange = (e) => {
    debugger
    const service = e.target?.value
    setServiceName(service)
    if (service) {
      if (service === 'session') {
        setShowSession(true)
        setShowWorkshop(false)
        setShowTextquery(false)
        setShowCourses(false)
        setShowPackages(false)
      } else if (service === 'workshop') {
        setShowWorkshop(true)
        setShowSession(false)
        setShowTextquery(false)
        setShowCourses(false)
        setShowPackages(false)
      } else if (service === 'textquery') {
        setShowTextquery(true)
        setShowSession(false)
        setShowWorkshop(false)
        setShowCourses(false)
        setShowPackages(false)
      } else if (service === 'courses') {
        setShowCourses(true)
        setShowSession(false)
        setShowWorkshop(false)
        setShowTextquery(false)
        setShowPackages(false)
      } else if (service === 'packages') {
        setShowPackages(true)
        setShowSession(false)
        setShowWorkshop(false)
        setShowTextquery(false)
        setShowCourses(false)
      } else if (service === 'all') {
        setShowPackages(true)
        setShowSession(true)
        setShowWorkshop(true)
        setShowTextquery(true)
        setShowCourses(true)
      }
    }
    //setShowSession(false)
  }

  const handleTypeChange = (e) => {
    const type = e.target?.value
    setFieldName(type)
  }

  const handleSearch = (menName) => {
    debugger
    // if (fieldName === 'name' && mentorName !== null) {
    //   const mentor = getMentorDataOnName(mentorName)
    //   // setMentorData(mentor)
    //   setMentorUserName(mentor.username)
    // }
    // if (serviceName && fieldName && mentorName) {
    // if (serviceName === 'session') {
    if (fieldName === 'title') {
      if (menName) {
        const resultsSess = sessionResults.filter(function (session) {
          return session.sessionTitle
            .toLowerCase()
            .includes(menName.toLowerCase())
        })
        setSessionFilteredResults(resultsSess)
        const resultsWork = workshopResults.filter(function (session) {
          return session.title.toLowerCase().includes(menName.toLowerCase())
        })
        setWorkshopFilteredResults(resultsWork)
        const resultsCour = coursesResults.filter(function (session) {
          return session.courseTitle
            .toLowerCase()
            .includes(menName.toLowerCase())
        })
        setCoursesFilteredResults(resultsCour)
        const resultsText = textQueryResults.filter(function (session) {
          return session.title.toLowerCase().includes(menName.toLowerCase())
        })
        setTextQueryFilteredResults(resultsText)
        const resultsPack = packagesResults.filter(function (session) {
          return session.packageTitle
            .toLowerCase()
            .includes(menName.toLowerCase())
        })
        setPackagesFilteredResults(resultsPack)
      } else {
        setSessionFilteredResults([...sessionResults])
        setWorkshopFilteredResults([...workshopResults])
        setCoursesFilteredResults([...coursesResults])
        setTextQueryFilteredResults([...textQueryResults])
        setPackagesFilteredResults([...packagesResults])
      }
    } else if (fieldName === 'name') {
      if (menName) {
        const resultsSess = sessionResults.filter(function (session) {
          return `${session?.user?.about_yourself.first_name} ${session?.user?.about_yourself.last_name}`
            .toLowerCase()
            .includes(menName.toLowerCase())
        })
        setSessionFilteredResults(resultsSess)
        const resultsWork = workshopResults.filter(function (session) {
          return `${session?.user?.about_yourself.first_name} ${session?.user?.about_yourself.last_name}`
            .toLowerCase()
            .includes(menName.toLowerCase())
        })
        setWorkshopFilteredResults(resultsWork)
        const resultsCour = coursesResults.filter(function (session) {
          return `${session?.user?.about_yourself.first_name} ${session?.user?.about_yourself.last_name}`
            .toLowerCase()
            .includes(menName.toLowerCase())
        })
        setCoursesFilteredResults(resultsCour)
        const resultsText = textQueryResults.filter(function (session) {
          return `${session?.user?.about_yourself.first_name} ${session?.user?.about_yourself.last_name}`
            .toLowerCase()
            .includes(menName.toLowerCase())
        })
        setTextQueryFilteredResults(resultsText)
        const resultsPack = packagesResults.filter(function (session) {
          return `${session?.user?.about_yourself.first_name} ${session?.user?.about_yourself.last_name}`
            .toLowerCase()
            .includes(menName.toLowerCase())
        })
        setPackagesFilteredResults(resultsPack)
      } else {
        setSessionFilteredResults([...sessionResults])
        setWorkshopFilteredResults([...workshopResults])
        setCoursesFilteredResults([...coursesResults])
        setTextQueryFilteredResults([...textQueryResults])
        setPackagesFilteredResults([...packagesResults])
      }
    }
    // }
  }

  const handleSessionClick = (index) => {
    debugger
    setShowServiceDetail(true)
    const id = index
    setBookNow(sessionResults[id])
    console.log('id=', sessionResults[id])
  }

  const handleWorkshopClick = (index) => {
    debugger
    setShowServiceDetail(true)
    const id = index
    setBookNow(workshopResults[id])
    console.log('id=', workshopResults[id])
  }
  const handleCoursesClick = (index) => {
    debugger
    setShowServiceDetail(true)
    const id = index
    setBookNow(coursesResults[id])
    console.log('id=', coursesResults[id])
  }
  const handleTextqueryClick = (index) => {
    debugger
    setShowServiceDetail(true)
    const id = index
    setBookNow(textQueryResults[id])
    console.log('id=', textQueryResults[id])
  }
  const handlePackagesClick = (index) => {
    debugger
    setShowServiceDetail(true)
    const id = index
    setBookNow(packagesResults[id])
    console.log('id=', packagesResults[id])
  }
  const handleBookClick = () => {
    setShowServiceDetail(false)
    setBookSession1(true)
  }

  const handleBookSession2 = () => {
    setBookSession1(false)
    setBookSession2(true)
  }

  const handleBookSession3 = () => {
    setBookSession2(false)
    setBookSession3(true)
  }

  if (loading) return null
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center item-center mt-10 w-auto ">
          <div className="flex md:flex-row lg:flex-row justify-center item-center bg-white mb-5 w-auto p-6 rounded-lg">
            <Multiselect
              showCheckbox
              placeholder="Select services"
              options={tabs} // Options to display in the dropdown
              selectedValues={selectedValue} // Preselected value to persist in dropdown
              onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
            />
            {/* <select
              className="h-16 px-10 py-4 text-lg  bg-white border-2 border-gray-300 rounded-lg"
              multiple=""
              //value={values.bookingPeriodIn}
              name="service"
              onChange={handleChange}
            >
              <option value="session">1 on 1 Session</option>
              <option value="workshop">Workshop</option>
              <option value="textquery">Text query</option>
              <option value="courses">Courses</option>
              <option value="packages">Packages</option>
              <option value="all">All</option>
            </select> */}

            <select
              className=" h-16 ml-5 px-10 py-4 text-lg  bg-white border-2 border-gray-300 rounded-lg"
              name="type"
              onChange={handleTypeChange}
            >
              <option value="title">Title</option>
              <option value="name">Mentor</option>
            </select>
            <div className="ml-5 w-1/2 relative h-16 flex items-center ">
              <TextField
                type="text"
                id="name"
                value={mentorName}
                classOverrideContainer="mb-0"
                placeholder="Title/Mentor name"
                onChange={(e) => setMentorName(e.target.value)}
              />
              {mentorName && (
                <div
                  className="absolute cursor-pointer right-2 flex items-start"
                  onClick={(e) => {
                    setMentorName('')
                    // setTimeout(() => {
                    handleSearch('')
                    // }, 1000)
                  }}
                >
                  <RxCrossCircled color="black" />
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                handleSearch(mentorName)
              }}
              className="h-16 ml-5 w-2/6 text-lg font-semibold bg-white hover:bg-gray-900 hover:text-white text-black border-gray-300  border rounded-lg"
            >
              Search
            </button>
          </div>
          <div className=""></div>
        </div>
        <div className="flex flex-row w-full">
          <div className="w-full">
            <div className="bg-grey-50">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                {showSession && (
                  <li className="mr-2">
                    <a
                      href="#"
                      className={
                        openTab === 1
                          ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                          : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(1)
                      }}
                    >
                      1 on 1 Session
                    </a>
                  </li>
                )}
                {showWorkshop && (
                  <li className="mr-2">
                    <a
                      href="#"
                      className={
                        openTab === 2
                          ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                          : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(2)
                      }}
                    >
                      Workshop
                    </a>
                  </li>
                )}
                {showCourses && (
                  <li className="mr-2">
                    <a
                      href="#"
                      className={
                        openTab === 3
                          ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                          : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(3)
                      }}
                    >
                      Courses
                    </a>
                  </li>
                )}
                {showTextquery && (
                  <li className="mr-2">
                    <a
                      href="#"
                      className={
                        openTab === 4
                          ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                          : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(4)
                      }}
                    >
                      Text query
                    </a>
                  </li>
                )}
                {showPackages && (
                  <li className="mr-2">
                    <a
                      href="#"
                      className={
                        openTab === 5
                          ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                          : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(5)
                      }}
                    >
                      Packages
                    </a>
                  </li>
                )}
              </ul>

              <div className={openTab === 1 ? 'block' : 'hidden'}>
                {showSession &&
                  (sessionFilteredResults.length > 0 ? (
                    <div className="my-3 bg-white p-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                        {sessionFilteredResults.map((item, index) => {
                          // debugger
                          // debugger
                          // const mentor = getMentorData(item.username)
                          // console.log('mentor', mentor)
                          // console.log('item.username', item.username)
                          return (
                            <div
                              key={index}
                              className="flex justify-center align-center mb-10  "
                            >
                              <div
                                className={` bg-white text-center border border-b-2 cursor-pointer rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
                                onClick={() => handleSessionClick(index)}
                              >
                                <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                                  <div className="flex justify-between p-2">
                                    <img
                                      src="../../../assets/icon/clock.png"
                                      alt=""
                                      className="w-3 h-3 mt-2"
                                    ></img>
                                    <span className="text-base font-normal md:text-xl lg:text-xl ml-2">
                                      1 on 1 mock interview
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <div className="hidden">{item.id}</div>
                                  <div className="flex justify-start text-black text-2xl font-semibold p-6">
                                    {item.sessionTitle}
                                  </div>
                                  <div className="flex justify-start text-black text-lg font-semibold p-6">
                                    {item.description}
                                  </div>
                                  {item?.user && (
                                    <div
                                      className="flex cursor-pointer text-lg font-bold bg-slate-100 capitalize justify-end border-2
                                 text-black p-10"
                                      onClick={showPreview.bind(
                                        null,
                                        item?.user,
                                      )}
                                    >
                                      {'- '}{' '}
                                      {item?.user.about_yourself.first_name +
                                        ' ' +
                                        item?.user.about_yourself.last_name}
                                    </div>
                                  )}
                                  <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                </div>
                                <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                  {/* <div className="flex justify-end"> */}
                                  <div className="flex">
                                    {/* <button
                                        className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                                        type="button"
                                      > */}
                                    <div className="flex items-center py-1 px-3 border-2 mr-5 border-black rounded-full min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/clock-two.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        {item.sessionDuration}{' '}
                                        {item.sessionDurationIn}
                                      </span>
                                    </div>

                                    {/* </button> */}

                                    {/* <button
                                        className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                                        type="button"
                                      > */}
                                    <div className="flex items-center  py-1 px-4 border-2 border-black rounded-full min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/price.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        ₹
                                        {item.listedPrice ===
                                        item.finalPrice ? (
                                          item.finalPrice
                                        ) : (
                                          <>
                                            <span className="  text-red-800 bold">
                                              <s className="bold">
                                                {item.listedPrice}
                                              </s>
                                            </span>{' '}
                                            <span className="bold">
                                              {item.finalPrice}
                                            </span>
                                          </>
                                        )}
                                      </span>
                                    </div>
                                    {/* </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* outer */}
                    </div>
                  ) : (
                    <div className="bg-white py-5 px-5 w-full rounded-md text-2xl text-center cursor-pointer">
                      No sessions found
                    </div>
                  ))}
              </div>

              <div className={openTab === 2 ? 'block' : 'hidden'}>
                {showWorkshop &&
                  (workshopFilteredResults.length > 0 ? (
                    <div className="my-3 bg-white p-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                        {workshopFilteredResults.map((item, index) => {
                          // const mentor = getMentorData(item.username)
                          // console.log('mentor', mentor)
                          return (
                            <div
                              key={index}
                              className="flex justify-center align-center mb-10  "
                            >
                              <div
                                className={` bg-white text-center border border-b-2 cursor-pointer rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
                                onClick={() => handleWorkshopClick(index)}
                              >
                                <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                                  <div className="flex justify-between p-2">
                                    <img
                                      src="../../../assets/icon/clock.png"
                                      alt=""
                                      className="w-3 h-3 mt-2"
                                    ></img>
                                    <span className="text-base font-normal md:text-xl lg:text-xl ml-2">
                                      Workshop
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <div className="hidden">{item.id}</div>
                                  <div className="flex justify-start text-black text-2xl font-semibold p-6">
                                    {item.title}
                                  </div>
                                  <div className="flex justify-start text-black text-lg font-semibold p-6">
                                    {item.description}
                                  </div>
                                  {item?.user && (
                                    <div
                                      className="flex cursor-pointer text-lg font-bold bg-slate-100 capitalize justify-end   border-2
                                 text-black p-10"
                                      onClick={showPreview.bind(
                                        null,
                                        item?.user,
                                      )}
                                    >
                                      {'- '}{' '}
                                      {item?.user.about_yourself.first_name +
                                        ' ' +
                                        item?.user.about_yourself.last_name}
                                    </div>
                                  )}

                                  <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                </div>
                                <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                  {/* <div className="flex justify-end"> */}
                                  <div className="flex">
                                    {/* <button
                                    className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                                    type="button"
                                  > */}
                                    <div className="flex items-center py-1 px-3 border-2 mr-5 border-black rounded-full min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/clock-two.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        {item.callDuration}{' '}
                                        {item.callDurationIn}
                                      </span>
                                    </div>

                                    {/* </button> */}

                                    {/* <button
                                    className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                                    type="button"
                                  > */}
                                    <div className="flex items-center  py-1 px-4 border-2 border-black rounded-full min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/price.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        ₹
                                        {item.listedPrice ===
                                        item.finalPrice ? (
                                          item.finalPrice
                                        ) : (
                                          <>
                                            <span className="  text-red-800 bold">
                                              <s className="bold">
                                                {item.listedPrice}
                                              </s>
                                            </span>{' '}
                                            <span className="bold">
                                              {item.finalPrice}
                                            </span>
                                          </>
                                        )}
                                      </span>
                                    </div>
                                    {/* </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* outer */}
                    </div>
                  ) : (
                    <div className="bg-white py-5 px-5 w-full rounded-md text-2xl text-center cursor-pointer">
                      No Workshop found
                    </div>
                  ))}
              </div>

              <div className={openTab === 3 ? 'block' : 'hidden'}>
                {showCourses &&
                  (coursesFilteredResults.length > 0 ? (
                    <div className="my-3 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                        {coursesFilteredResults.map((item, index) => {
                          // const mentor = getMentorData(item.username)
                          // console.log('mentor', mentor)
                          return (
                            <div
                              key={index}
                              className="flex justify-center align-center mb-10  "
                            >
                              <div
                                className={` bg-white text-center cursor-pointer border border-b-2 rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
                                onClick={() => handleCoursesClick(index)}
                              >
                                <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                                  <div className="flex justify-between p-2">
                                    <img
                                      src="../../../assets/icon/clock.png"
                                      alt=""
                                      className="w-3 h-3 mt-2"
                                    ></img>
                                    <span className="text-base font-normal md:text-xl lg:text-xl ml-2">
                                      Courses
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <div className="hidden">{item.id}</div>
                                  <div className="flex justify-start text-black text-2xl font-semibold p-6">
                                    {item.courseTitle}
                                  </div>
                                  <div className="flex justify-start text-black text-lg font-semibold p-6">
                                    {item.description}
                                  </div>
                                  {item?.user && (
                                    <div
                                      className="flex cursor-pointer text-lg font-bold bg-slate-100 capitalize justify-end  border-2
                                 text-black p-10"
                                      onClick={showPreview.bind(
                                        null,
                                        item?.user,
                                      )}
                                    >
                                      {'- '}{' '}
                                      {item?.user.about_yourself.first_name +
                                        ' ' +
                                        item?.user.about_yourself.last_name}
                                    </div>
                                  )}

                                  <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                </div>
                                <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                  {/* <div className="flex justify-end"> */}
                                  <div className="flex">
                                    {/* <button
                                      className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                                      type="button"
                                    > */}
                                    <div className="flex items-center py-1 px-3 border-2 mr-5 border-black rounded-full min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/clock-two.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        {item.sessionDuration}{' '}
                                        {item.sessionDurationIn}
                                      </span>
                                    </div>

                                    {/* </button> */}

                                    {/* <button
                                      className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                                      type="button"
                                    > */}
                                    <div className="flex items-center  py-1 px-4 border-2 rounded-full border-black min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/price.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        ₹
                                        {item.listedPrice ===
                                        item.finalPrice ? (
                                          item.finalPrice
                                        ) : (
                                          <>
                                            <span className="  text-red-800 bold">
                                              <s className="bold">
                                                {item.listedPrice}
                                              </s>
                                            </span>{' '}
                                            <span className="bold">
                                              {item.finalPrice}
                                            </span>
                                          </>
                                        )}
                                      </span>
                                    </div>
                                    {/* </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* outer */}
                    </div>
                  ) : (
                    <div
                      className="bg-white py-5 px-5 w-full rounded-md text-2xl text-center cursor-pointer"
                      onClick={searchClick}
                    >
                      No courses found
                    </div>
                  ))}
              </div>

              <div className={openTab === 4 ? 'block' : 'hidden'}>
                {showTextquery &&
                  (textQueryFilteredResults.length > 0 ? (
                    <div className="my-3 bg-white p-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                        {textQueryFilteredResults.map((item, index) => {
                          // const mentor = getMentorData(item.username)
                          // console.log('mentor', mentor)
                          return (
                            <div
                              key={index}
                              className="flex justify-center align-center mb-10  "
                            >
                              <div
                                className={` bg-white text-center cursor-pointer border border-b-2 rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
                                onClick={() => handleTextqueryClick(index)}
                              >
                                <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                                  <div className="flex justify-between p-2">
                                    <img
                                      src="../../../assets/icon/clock.png"
                                      alt=""
                                      className="w-3 h-3 mt-2"
                                    ></img>
                                    <span className="text-base font-normal md:text-xl lg:text-xl ml-2">
                                      Text Query
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <div className="hidden">{item.id}</div>
                                  <div className="flex justify-start text-black text-2xl font-semibold p-6">
                                    {item.title}
                                  </div>
                                  <div className="flex justify-start text-black text-lg font-semibold p-6">
                                    {item.description}
                                  </div>
                                  {item?.user && (
                                    <div
                                      className="flex cursor-pointer text-lg font-bold bg-slate-100 capitalize justify-end border-2
                                 text-black p-10"
                                      onClick={showPreview.bind(
                                        null,
                                        item?.user,
                                      )}
                                    >
                                      {'- '}{' '}
                                      {item?.user.about_yourself.first_name +
                                        ' ' +
                                        item?.user.about_yourself.last_name}
                                    </div>
                                  )}

                                  <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                </div>
                                <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                  {/* <div className="flex justify-end"> */}
                                  <div className="flex">
                                    {/* <button
                                      className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                                      type="button"
                                    > */}
                                    <div className="flex items-center py-1 px-3 border-2 mr-5 border-black rounded-full min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/clock-two.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        {item.responseTime}{' '}
                                        {item.responseTimeIn}
                                      </span>
                                    </div>

                                    {/* </button> */}

                                    {/* <button
                                      className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                                      type="button"
                                    > */}
                                    <div className="flex items-center  py-1 px-4 border-2 border-black rounded-full min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/price.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        ₹
                                        {item.listedPrice ===
                                        item.finalPrice ? (
                                          item.finalPrice
                                        ) : (
                                          <>
                                            <span className="  text-red-800 bold">
                                              <s className="bold">
                                                {item.listedPrice}
                                              </s>
                                            </span>{' '}
                                            <span className="bold">
                                              {item.finalPrice}
                                            </span>
                                          </>
                                        )}
                                      </span>
                                    </div>
                                    {/* </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* outer */}
                    </div>
                  ) : (
                    <div className="bg-white py-5 px-5 w-full rounded-md text-2xl text-center cursor-pointer">
                      No text query found
                    </div>
                  ))}
              </div>

              <div className={openTab === 5 ? 'block' : 'hidden'}>
                {showPackages &&
                  (packagesFilteredResults.length > 0 ? (
                    <div className="my-3 bg-white p-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                        {packagesFilteredResults.map((item, index) => {
                          // const mentor = getMentorData(item.username)
                          // console.log('mentor', mentor)
                          return (
                            <div
                              key={index}
                              className="flex justify-center align-center mb-10  "
                            >
                              <div
                                className={` bg-white text-center cursor-pointer border border-b-2 rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
                                onClick={() => handlePackagesClick(index)}
                              >
                                <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                                  <div className="flex justify-between p-2">
                                    <img
                                      src="../../../assets/icon/clock.png"
                                      alt=""
                                      className="w-3 h-3 mt-2"
                                    ></img>
                                    <span className="text-base font-normal md:text-xl lg:text-xl ml-2">
                                      Packages
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <div className="hidden">{item.id}</div>
                                  <div className="flex justify-start text-black text-2xl font-semibold p-6">
                                    {item.packageTitle}
                                  </div>
                                  <div className="flex justify-start text-black text-lg font-semibold p-6">
                                    {item.description}
                                  </div>
                                  {item?.user && (
                                    <div
                                      className="flex cursor-pointer text-lg font-bold bg-slate-100 capitalize justify-end border-2
                                 text-black p-10"
                                      onClick={showPreview.bind(
                                        null,
                                        item?.user,
                                      )}
                                    >
                                      {'- '}{' '}
                                      {item?.user.about_yourself.first_name +
                                        ' ' +
                                        item?.user.about_yourself.last_name}
                                    </div>
                                  )}

                                  <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                </div>
                                <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                  {/* <div className="flex justify-end"> */}
                                  <div className="flex">
                                    <div className="flex items-center  py-1 px-4 border-2 border-black rounded-full min-w-[20%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/price.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        ₹
                                        {item.listedPrice ===
                                        item.finalPrice ? (
                                          item.finalPrice
                                        ) : (
                                          <>
                                            <span className="  text-red-800 bold">
                                              <s className="bold">
                                                {item.listedPrice}
                                              </s>
                                            </span>{' '}
                                            <span className="bold">
                                              {item.finalPrice}
                                            </span>
                                          </>
                                        )}
                                      </span>
                                    </div>
                                    {/* </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* outer */}
                    </div>
                  ) : (
                    <div
                      className="bg-white py-5 px-5 w-full rounded-md text-2xl text-center cursor-pointer"
                      onClick={searchClick}
                    >
                      No packages found
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* service display start */}
        {/* <div className="mb-10">
        </div> */}
      </div>

      {showServiceDetail ? (
        <>
          <div className="flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" bg-white text-center mt-9 rounded-2xl shadow-lg w-full md:w-2/5 lg:w-2/5">
              <div className="flex justify-between px-8 py-4  border-gray-300">
                <div className="flex flex-row justify-start items-start px-6 py-6 bg-gray-100 rounded-md">
                  <div
                    className={`${classes['img-profile']} bg-gray-300 rounded-md`}
                  ></div>
                  <div className="ml-2 mt-6 p-2">
                    <span className="text-3xl font-semibold ">
                      1 on 1 Mock Interview
                    </span>
                    <div className="flex flex-row justify-start items-start mt-2">
                      {/* <span className="text-4xl font-bold mt-4">
                        Rs. {bookNow.listedPrice} {bookNow.finalPrice}
                      </span> */}
                      <span className="text-4xl font-bold py-3">
                        ₹
                        {bookNow.listedPrice === bookNow.finalPrice ? (
                          bookNow.finalPrice
                        ) : (
                          <>
                            <span className="  bold">
                              <span className="bold">
                                {bookNow.listedPrice}
                              </span>
                            </span>{' '}
                            <s className="text-xl   text-red-800 bold">
                              {bookNow.finalPrice}
                            </s>
                          </>
                        )}
                        <span className="text-xl font-semibold ml-5">
                          {`(`}
                          {(bookNow.finalPrice - bookNow.listedPrice) / 100}
                        </span>
                        <span className="text-xl font-semibold">%{`)`}</span>
                      </span>
                    </div>
                    <div
                      className="flex justify-center items-center px-4 py-2 mt-4 border-2 border-gray-900 rounded-full w-1/2 text-2xl font-semibold hover:bg-gray-900 hover:text-white w-auto"
                      onClick={() => handleBookClick()}
                    >
                      Book Now
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className=""
                    type="button"
                    onClick={() => setShowServiceDetail(false)}
                  >
                    <img
                      src="../../../assets/icon/cross.png"
                      alt=""
                      className="w-4 h-4 mr-2 ml-2"
                    ></img>
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start ml-10">
                <div className="mt-5">
                  <p className="text-xl font-bold mb-3 -ml-4">
                    Session includes
                  </p>
                  <p className="flex text-sm font-semibold mb-2">
                    <img
                      src="../../../assets/icon/approve.png"
                      alt=""
                      className="w-4 h-4 mr-2"
                    />
                    1 on 1 mock interviwes
                  </p>

                  <p className="flex text-sm font-semibold mb-2">
                    <img
                      src="../../../assets/icon/approve.png"
                      alt=""
                      className="w-4 h-4 mr-2"
                    />
                    Career guidance
                  </p>

                  <p className="flex text-sm font-semibold mb-2">
                    <img
                      src="../../../assets/icon/approve.png"
                      alt=""
                      className="w-4 h-4 mr-2"
                    />
                    portfolio review
                  </p>

                  <p className="flex text-sm font-semibold mb-10">
                    <img
                      src="../../../assets/icon/approve.png"
                      alt=""
                      className="w-4 h-4 mr-2"
                    />
                    Placement guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {bookSession1 && (
        <>
          <div className="flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" bg-white text-center mt-9 rounded-2xl shadow-lg w-full md:w-2/5 lg:w-2/5">
              <div className="flex justify-between px-8 py-4 border-b border-gray-300">
                <div className="flex flex-col justify-start items-start border=b-2">
                  <span className="text-2xl font-semibold mt-3">
                    Select the date you want to schedule a meet
                  </span>
                </div>
                <div>
                  <button
                    className=""
                    type="button"
                    onClick={() => setBookSession1(false)}
                  >
                    <img
                      src="../../../assets/icon/cross.png"
                      alt=""
                      className="w-4 h-4 mr-2 mt-5"
                    ></img>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-0">
                <div className="border-r-2">
                  <div className="bg-gray-100 m-2 mr-3 w-auto rounded-lg ">
                    <div className="flex flex-row justify-start items-start px-4 py-2">
                      <img
                        src="../../../images/student.png"
                        alt=""
                        className="w-20 h-20 mt-2"
                      />
                      <div>
                        <p className=" flex justify-start items-start text-lg font-semibold mt-5 px-6">
                          Call with Michael
                        </p>
                        <p className="flex justify-start items-start text-sm font-normal text-gray-700  px-6">
                          For 1 on 1 mock interview
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-around w-full p-2">
                      <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../assets/icon/clock.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                          30 minutes
                        </p>
                      </button>
                      <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../images/camera.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                          Video session
                        </p>
                      </button>
                      <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../assets/icon/money.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                          ₹ 1000
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" text-base font-normal p-8 w-full">
                    <DatePicker onChange={onChange} value={value} />
                  </div>
                  <div className="select-wrapper  text-base font-normal w-full p-6">
                    <TimezoneSelect
                      value={timeZone}
                      onChange={setTimeZone}
                      timezones={{
                        ...allTimezones,
                        'America/Lima': 'Pittsburgh',
                        'Europe/Berlin': 'Frankfurt',
                      }}
                    />
                  </div>
                </div>
                {/* gird */}
              </div>
              <div className="flex justify-evenly w-full">
                <div className="py-4 px-6 border-t border-gray-300 w-full">
                  <div className="flex justify-center items-center w-full">
                    <button
                      className="flex justify-center items-center text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-2 border border-black w-full rounded-md"
                      onClick={() => setBookSession1(false)}
                    >
                      <span className="text-base font-semibold py-1">
                        Close
                      </span>
                    </button>
                  </div>
                </div>

                <div className="py-4 px-6 border-t border-gray-300 w-full">
                  <div className="flex justify-center items-center w-full">
                    <button
                      className="flex justify-center items-center text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-2 border border-black w-full rounded-md"
                      onClick={() => handleBookSession2()}
                    >
                      <span className="text-base font-semibold py-1">
                        Continue
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {bookSession2 && (
        <>
          <div className="flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" bg-white text-center mt-9 rounded-2xl shadow-lg w-full md:w-2/5 lg:w-2/5">
              <div className="flex justify-between px-8 py-4 border-b border-gray-300">
                <div className="flex flex-col justify-start items-start border=b-2">
                  <span className="text-2xl font-semibold mt-3">
                    Select the date you want to schedule a meet
                  </span>
                </div>
                <div>
                  <button
                    className=""
                    type="button"
                    onClick={() => setBookSession2(false)}
                  >
                    <img
                      src="../../../assets/icon/cross.png"
                      alt=""
                      className="w-4 h-4 mr-2 mt-5"
                    ></img>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-0">
                <div className="border-r-2">
                  <div className="bg-gray-100 m-2 mr-3 w-auto rounded-lg ">
                    <div className="flex flex-row justify-start items-start px-4 py-2">
                      <img
                        src="../../../images/student.png"
                        alt=""
                        className="w-20 h-20 mt-2"
                      />
                      <div>
                        <p className=" flex justify-start items-start text-lg font-semibold mt-5 px-6">
                          Call with Michael
                        </p>
                        <p className="flex justify-start items-start text-sm font-normal text-gray-700  px-6">
                          For 1 on 1 mock interview
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-around w-full p-2">
                      <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../assets/icon/clock.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                          30 minutes
                        </p>
                      </button>
                      <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../images/camera.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                          Video session
                        </p>
                      </button>
                      <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../assets/icon/money.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                          ₹ 1000
                        </p>
                      </button>
                    </div>
                  </div>
                  <span className="flex justify-start text-sm font-semibold p-4">
                    Pick a time
                  </span>
                  <div className="flex justify-start w-full px-4 py-2">
                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        05:00 AM
                      </p>
                    </button>

                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        05:30 AM
                      </p>
                    </button>

                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        06:00 AM
                      </p>
                    </button>
                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        07:00 AM
                      </p>
                    </button>
                  </div>
                  <div className="flex justify-start w-full px-4 py-2">
                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        04:00 PM
                      </p>
                    </button>
                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        05:00 PM
                      </p>
                    </button>
                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        07:00 PM
                      </p>
                    </button>
                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        08:00 PM
                      </p>
                    </button>
                  </div>
                  <div className="flex justify-start w-full px-4 py-2 mb-10">
                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        11:00 PM
                      </p>
                    </button>
                    <button className="flex justify-center items-center border-2 border-gray-500 hover:border-none hover:bg-blue-700 hover:text-white text-white p-1 mr-2 rounded-full">
                      <p className="text-sm text-black  hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                        11:30 PM
                      </p>
                    </button>
                  </div>
                </div>
                <div>
                  <div className=" text-base font-normal py-8 w-full mt-10">
                    <DatePicker onChange={onChange} value={value} />
                  </div>
                  <div className="select-wrapper  text-base font-normal w-full p-6">
                    <TimezoneSelect
                      value={timeZone}
                      onChange={setTimeZone}
                      timezones={{
                        ...allTimezones,
                        'America/Lima': 'Pittsburgh',
                        'Europe/Berlin': 'Frankfurt',
                      }}
                    />
                  </div>
                </div>
                {/* gird */}
              </div>
              <div className="flex justify-evenly w-full">
                <div className="py-4 px-6 border-t border-gray-300 w-full">
                  <div className="flex justify-center items-center w-full">
                    <button
                      className="flex justify-center items-center text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-2 border border-black w-full rounded-md"
                      onClick={() => setBookSession2(false)}
                    >
                      <span className="text-base font-semibold py-1">
                        Close
                      </span>
                    </button>
                  </div>
                </div>

                <div className="py-4 px-6 border-t border-gray-300 w-full">
                  <div className="flex justify-center items-center w-full">
                    <button
                      className="flex justify-center items-center text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-2 border border-black w-full rounded-md"
                      onClick={() => handleBookSession3()}
                    >
                      <span className="text-base font-semibold py-1">
                        Continue
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {bookSession3 && (
        <>
          <div className="flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" bg-white text-center mt-9 rounded-2xl shadow-lg w-full md:w-2/5 lg:w-2/5">
              <div className="flex justify-between px-8 py-4 border-b border-gray-300">
                <div className="flex flex-col justify-start items-start border=b-2">
                  <span className="text-2xl font-semibold mt-3">
                    Select the date you want to schedule a meet
                  </span>
                </div>
                <div>
                  <button
                    className=""
                    type="button"
                    onClick={() => setBookSession3(false)}
                  >
                    <img
                      src="../../../assets/icon/cross.png"
                      alt=""
                      className="w-4 h-4 mr-2 mt-5"
                    ></img>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-0">
                <div className="border-r-2">
                  <div className="bg-gray-100 m-4 mr-3 w-auto rounded-lg border-2 border-blue-500">
                    <div className="flex flex-row justify-start items-start px-4 py-2 ">
                      <img
                        src="../../../images/student.png"
                        alt=""
                        className="w-20 h-20 mt-2"
                      />
                      <div>
                        <p className=" flex justify-start items-start text-lg font-semibold mt-5 px-6">
                          Call with Michael
                        </p>
                        <p className="flex justify-start items-start text-sm font-normal text-gray-700  px-6">
                          For 1 on 1 mock interview
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-around w-full p-2">
                      <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../assets/icon/clock.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white">
                          30 minutes
                        </p>
                      </button>
                      <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../images/camera.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white">
                          Video session
                        </p>
                      </button>
                      <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../assets/icon/money.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white">
                          ₹ 1000
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-cener item-center m-3 bg-gray-100 border-2 border-blue-500 p-2 rounded-lg">
                      <img
                        src="../../../assets/icon/dateBlue.png"
                        className="w-6 h-6 p-1 mr-2"
                      ></img>
                      <span className="text-sm font-blue text-blue-700">
                        Wed, 22 Sep 2022 | 07:00 PM - 07:30 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" text-base font-normal p-6 w-full">
                    {/* <Calendar onChange={onChange} value={value} />
                    <span>name</span> */}

                    <div className="flex flex-col">
                      <div className="text-sm w-full">
                        <label className="flex justify-start text-sm font-normal">
                          Name
                        </label>
                        <div className="flex flex-wrap items-stretch text-sm w-full relative">
                          <TextField
                            placeholder="Name"
                            name="name"
                            type="text"
                            id="name"
                          />
                        </div>
                      </div>

                      <div className="text-sm w-full">
                        <label className="flex justify-start text-sm font-normal">
                          Email
                        </label>
                        <div className="flex flex-wrap items-stretch text-sm w-full relative">
                          <TextField
                            placeholder="examplemail@gmail.com"
                            name="email"
                            type="email"
                            id="email"
                          />
                        </div>
                      </div>

                      <div className="text-sm w-full">
                        <label className="flex justify-start text-sm font-normal">
                          What is this call about? (optional)
                        </label>
                        <div className="flex flex-wrap items-stretch text-sm w-full relative">
                          <TextField
                            placeholder="Hey this is michael, co-founder and executive officer at twitter. "
                            name="callForWhat"
                            type="text"
                            id="callForWhat"
                          />
                        </div>
                      </div>

                      <div className="text-sm w-full">
                        <label className="flex justify-start text-sm font-normal">
                          Mobile Number
                        </label>
                        <div className="flex flex-wrap items-stretch text-sm w-full relative">
                          <TextField
                            placeholder="+91 | 986 747 6346"
                            name="mobile"
                            type="text"
                            id="mobile"
                          />
                        </div>
                      </div>

                      <div className="flex justify-start text-sm w-full">
                        <input
                          id="update"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-gray-900 bg-gray-100 rounded border-gray-300 focus:ring-black"
                        />
                        <label
                          htmlFor="update"
                          className="text-sm font-medium text-gray-900"
                        >
                          Receive updates on phone and whatsapp
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="select-wrapper  text-base font-normal w-full p-6">
                    <TimezoneSelect
                      value={timeZone}
                      onChange={setTimeZone}
                      timezones={{
                        ...allTimezones,
                        'America/Lima': 'Pittsburgh',
                        'Europe/Berlin': 'Frankfurt',
                      }}
                    />
                  </div>
                </div>
                {/* gird */}
              </div>
              <div className="flex justify-evenly w-full">
                <div className="py-4 px-6 border-t border-gray-300 w-full">
                  <div className="flex justify-center items-center w-full">
                    <button
                      className="flex justify-center items-center text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-2 border border-black w-full rounded-md"
                      //  onClick={() => setBookSession3(false)}
                    >
                      <span className="text-base font-semibold py-1">
                        Change date and time
                      </span>
                    </button>
                  </div>
                </div>

                <div className="py-4 px-6 border-t border-gray-300 w-full">
                  <div className="flex justify-center items-center w-full">
                    <button className="flex justify-center items-center text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-2 border border-black w-full rounded-md">
                      <span className="text-base font-semibold py-1">
                        Schedule booking
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showMentor && (
        <div className="flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className=" bg-white text-center mt-9 rounded-2xl shadow-lg w-full md:w-3/5 lg:w-3/5">
            <div className="flex justify-between px-8 py-4 border-b border-gray-300">
              <div className="flex flex-col justify-start items-start border=b-2">
                <span className="text-2xl font-semibold mt-3">Mentor</span>
              </div>
              <div>
                <button
                  className=""
                  type="button"
                  onClick={() => setShowMentor(false)}
                >
                  <img
                    src="../../../assets/icon/cross.png"
                    alt=""
                    className="w-4 h-4 mr-2 mt-5"
                  ></img>
                </button>
              </div>
            </div>
            <Preview mentor={mentor} showServices={true} />
          </div>
        </div>
      )}
    </>
  )
}

export default Home
