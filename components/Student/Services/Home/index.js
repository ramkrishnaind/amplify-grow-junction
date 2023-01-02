import React, { useState, useEffect, useReducer, useRef } from 'react'
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
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listOneOnOnes } from '/src/graphql/queries'
import { listTextQueries } from '/src/graphql/queries'
import { listWorkshops } from '/src/graphql/queries'
import { listCourses } from '/src/graphql/queries'
import { listPackages } from '/src/graphql/queries'
import { getLoggedinUserEmail } from '../../../../utilities/user'

const Home = () => {
  // return <div>Hi</div>
  // const router= useRouter()
  const searchRef = useRef()
  const [showSession, setShowSession] = useState(false)
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

  const loadOneOnOne = async () => {
    try {
      debugger
      // const usrname = getLoggedinUserEmail()
      // console.log('usr', usr)
      const results = await API.graphql(graphqlOperation(listOneOnOnes))
      debugger
      if (results.data.listOneOnOnes.items.length > 0) {
        setSessionResults(results.data.listOneOnOnes.items)
        console.log('oneonone- ', sessionResults)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadWorkshop = async () => {
    debugger
    try {
      // const usrname = getLoggedinUserEmail()
      // console.log('usr', usr)
      const results = await API.graphql(graphqlOperation(listWorkshops))
      if (results.data.listWorkshops.items.length > 0) {
        setWorkshopResults(results.data.listWorkshops.items)
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
        setCoursesResults(results.data.listCourses.items)
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
        setTextQueryResults(results.data.listTextQueries.items)
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
        setPackagesResults(results.data.listPackages.items)
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

  const handleChange = (e) => {
    debugger
    const service = e.target?.value
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

  if (loading) return null
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center item-center mt-20 ml-20">
          <div className="flex justify-center item-center bg-white w-aut0">
            <select
              className="px-10 py-4 text-lg  bg-white border-2 border-gray-300 rounded-lg"
              //value={values.bookingPeriodIn}
              name="service"
              onChange={handleChange}
            >
              <option value="select">Select</option>
              <option value="session">1 on 1 Session</option>
              <option value="workshop">Workshop</option>
              <option value="textquery">Text query</option>
              <option value="courses">Courses</option>
              <option value="packages">Packages</option>
              <option value="all">All</option>
            </select>
          </div>
          <div className=''>
            
          </div>
        </div>
        <div className="mb-10">
          {showSession &&
            (sessionResults.length > 0 ? (
              <div className="my-3 bg-white p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                  {sessionResults.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center align-center mb-10  "
                      >
                        <div
                          className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
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
                            <div className="flex justify-start text-black text-2xl font-semibold p-6">
                              {item.sessionTitle}
                            </div>
                            <div className="flex justify-start text-black text-lg font-semibold p-6">
                              {item.description}
                            </div>
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
                                  {item.listedPrice === item.finalPrice ? (
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

          {showWorkshop &&
            (workshopResults.length > 0 ? (
              <div className="my-3 bg-white p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                  {workshopResults.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center align-center mb-10  "
                      >
                        <div
                          className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
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
                            <div className="flex justify-start text-black text-2xl font-semibold p-6">
                              {item.title}
                            </div>
                            <div className="flex justify-start text-black text-lg font-semibold p-6">
                              {item.description}
                            </div>
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
                                  {item.callDuration} {item.callDurationIn}
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
                                  {item.listedPrice === item.finalPrice ? (
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
              >
                No Workshop found
              </div>
            ))}

          {showCourses &&
            (coursesResults.length > 0 ? (
              <div className="my-3 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                  {coursesResults.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center align-center mb-10  "
                      >
                        <div
                          className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
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
                            <div className="flex justify-start text-black text-2xl font-semibold p-6">
                              {item.courseTitle}
                            </div>
                            <div className="flex justify-start text-black text-lg font-semibold p-6">
                              {item.description}
                            </div>
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
                                  {item.sessionDuration} {item.sessionDurationIn}
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
                                  {item.listedPrice === item.finalPrice ? (
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

          {showTextquery && (textQueryResults.length > 0 ? (
            <div className="my-3 bg-white p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                {textQueryResults.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center align-center mb-10  "
                    >
                      <div
                        className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
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
                          <div className="flex justify-start text-black text-2xl font-semibold p-6">
                            {item.title}
                          </div>
                          <div className="flex justify-start text-black text-lg font-semibold p-6">
                            {item.description}
                          </div>
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
                                {item.responseTime} {item.responseTimeIn}
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
                                {item.listedPrice === item.finalPrice ? (
                                  item.finalPrice
                                ) : (
                                  <>
                                    <span className="  text-red-800 bold">
                                      <s className="bold">{item.listedPrice}</s>
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
            >
              No text query found
            </div>
          ))}

          {showPackages &&
            (packagesResults.length > 0 ? (
              <div className="my-3 bg-white p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                  {packagesResults.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center align-center mb-10  "
                      >
                        <div
                          className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
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
                            <div className="flex justify-start text-black text-2xl font-semibold p-6">
                              {item.packageTitle}
                            </div>
                            <div className="flex justify-start text-black text-lg font-semibold p-6">
                              {item.description}
                            </div>
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
                                  {item.listedPrice === item.finalPrice ? (
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
    </>
  )
}

export default Home
