import React, { useState, useEffect } from 'react'
import { slice } from 'lodash'
import classes from './Preview.module.css'
import { API, Storage, graphqlOperation } from 'aws-amplify'
import {
  listMentorRegisters,
  listUserInfos,
  listOneOnOnes,
  listTextQueries,
  listWorkshops,
  listCourses,
  listPackages,
} from '../../../src/graphql/queries'
import { getLoggedinUserEmail } from '../../../utilities/user'

const Preview = ({ showServices, mentor }) => {
  const [preImage, setPreImage] = useState('')
  const [firstName, setFirstName] = useState(mentor?.about_yourself?.first_name)
  const [lastName, setLastName] = useState(mentor?.about_yourself?.last_name)
  const [url, setUrl] = useState(mentor?.about_yourself?.grow_junction_url)
  const [shortDescription, setShortDescription] = useState(
    mentor?.about_yourself?.short_description,
  )
  const [aboutYourself, setAboutYourself] = useState(
    mentor?.about_yourself?.about_yourself,
  )
  const [occupation, setOccupation] = useState(
    mentor?.Professionalinfo?.occupation,
  )
  const [organisation, setOrganisation] = useState(
    mentor?.Professionalinfo?.organization,
  )
  const [linkedin, setLinkedin] = useState()
  const [instagram, setInstagram] = useState()
  const [personalurl, setPersonalurl] = useState()
  const [sessionResults, setSessionResults] = useState([])
  const [workshopResults, setWorkshopResults] = useState([])
  const [textQueryResults, setTextQueryResults] = useState([])
  const [coursesResults, setCoursesResults] = useState([])
  const [totalServiceResults, setTotalServiceResults] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(4)
  const initialPosts = slice(totalServiceResults, 0, index)

  const loadMore = () => {
    setIndex(index + 4)
    console.log(index)
    if (index >= totalServiceResults.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }

  const usrName = getLoggedinUserEmail()
  const getUser = async () => {
    debugger
    //const usrName = getLoggedinUserEmail()
    console.log('username - ', usrName)
    const results = await API.graphql(
      graphqlOperation(listMentorRegisters, {
        filter: { username: { contains: mentor ? mentor.username : usrName } },
      }),
    )
    if (results.data.listMentorRegisters.items.length > 0) {
      const data = { ...results.data.listMentorRegisters.items[0] }
       debugger
      if (data.profile_image) {
        const img = await Storage.get(data.profile_image)
        console.log('image - ', img)
        setPreImage(img)
      }
      // debugger
      setFirstName(data.about_yourself?.first_name)
      setLastName(data.about_yourself?.last_name)
      setShortDescription(data.about_yourself?.short_description)
      setAboutYourself(data.about_yourself?.about_yourself)
      setOccupation(data.Professionalinfo?.occupation)
      setOrganisation(data.Professionalinfo?.organization)
      setLinkedin(data.SocialUrl?.linkedin_url)
      setInstagram(data.SocialUrl?.instagram_url)
      setPersonalurl(data.SocialUrl?.personal_web_url)
      setUrl(data.about_yourself?.grow_junction_url || '')
    } else {
      const results = await API.graphql(
        graphqlOperation(listUserInfos, {
          filter: {
            username: { contains: mentor ? mentor.username : usrName },
          },
        }),
      )
      if (results.data.listUserInfos.items.length > 0) {
       debugger
        const data = { ...results.data.listUserInfos.items[0] }
        if (data.profile_image) {
          // const img = await Storage.get(data.profile_image)
          setPreImage(data.profile_image)
        }
      }
    }
  }

  const loadOneOnOne = async () => {
    debugger
    try {
      const results = await API.graphql(
        graphqlOperation(listOneOnOnes, {
          filter: { username: { contains: usrName } },
        }),
      )
      // debugger
      if (results.data.listOneOnOnes.items.length > 0) {
        setSessionResults(results.data.listOneOnOnes.items)
        results.data.listOneOnOnes.item.map((s, idx) => {
          totalServiceResults.push({
            text: '1 on 1 Session',
            title: s.sessionTitle,
            description: s.description,
            duration: s.sessionDuration + ' ' + s.sessionDurationIn,
            price: s.finalPrice,
          })
        })
        //setTotalServiceResults(results.data.listOneOnOnes.items)
        console.log('oneonone- ', results)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadWorkshop = async () => {
    debugger
    try {
      const results = await API.graphql(
        graphqlOperation(listWorkshops, {
          filter: { username: { contains: usrName } },
        }),
      )
      if (results.data.listWorkshops.items.length > 0) {
        setWorkshopResults(results.data.listWorkshops.items)
        results.data.listWorkshops.items.map((s, idx) => {
          totalServiceResults.push({
            text: 'Workshop',
            title: s.title,
            description: s.description,
            duration: s.callDuration + ' ' + s.callDurationIn,
            price: s.finalPrice,
          })
        })

        //setTotalServiceResults(...results.data.listWorkshops.items)
        console.log('workshop- ', results)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadCourses = async () => {
    try {
      const results = await API.graphql(
        graphqlOperation(listCourses, {
          filter: { username: { contains: usrName } },
        }),
      )
      if (results.data.listCourses.items.length > 0) {
        setCoursesResults(results.data.listCourses.items)
        results.data.listCourses.items.map((s, idx) => {
          totalServiceResults.push({
            text: 'Courses',
            title: s.courseTitle,
            description: s.description,
            duration: s.sessionDuration + ' ' + s.sessionDurationIn,
            price: s.finalPrice,
          })
        })

        //setTotalServiceResults(...results.data.listCourses.items)
        console.log('courses- ', results)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadTextQuery = async () => {
    try {
      const results = await API.graphql(
        graphqlOperation(listTextQueries, {
          filter: { username: { contains: usrName } },
        }),
      )
      if (results.data.listTextQueries.items.length > 0) {
        setTextQueryResults(results.data.listTextQueries.items)
        results.data.listTextQueries.items.map((s, idx) => {
          totalServiceResults.push({
            text: 'TextQuery',
            title: s.title,
            description: s.description,
            duration: s.responseTime + ' ' + s.responseTimeIn,
            price: s.finalPrice,
          })
        })

        //setTotalServiceResults(...results.data.listTextQueries.items)
        console.log('textquery- ', results)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadPackages = async () => {
    try {
      const results = await API.graphql(
        graphqlOperation(listPackages, {
          filter: { username: { contains: usrName } },
        }),
      )
      if (results.data.listPackages.items.length > 0) {
        setPackagesResults(results.data.listPackages.items)
        results.data.listPackages.items.map((s, idx) => {
          totalServiceResults.push({
            text: 'TextQuery',
            title: s.title,
            description: s.description,
            duration: s.responseTime + ' ' + s.responseTimeIn,
            price: s.finalPrice,
          })
        })
        //setTotalServiceResults(...results.data.listPackages.items)
        console.log('listPackages- ', results)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  useEffect(() => {
    //if (!mentor) getUser()
    getUser()
    loadOneOnOne()
    loadWorkshop()
    loadCourses()
    loadTextQuery()
    loadPackages()
  }, [])

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-full">
        <div className="flex justify-center items-center text-base text-semibold border-2 rounded-md bg-white h-14 mb-2 w-full">
          Preview
        </div>
      </div>
      <div className="p-5 items-center flex flex-col">
        <div
          className={`${classes['persona']} bg-gray-300 rounded-full flex justify-center`}
        >
          {preImage ? (
            <img
              src={preImage}
              alt=""
              className={`${classes['persona']} rounded-full`}
            />
          ) : null}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold mt-5 text-center">
            {firstName} {lastName}
          </span>
          <span className="text-xl font-normal text-center">
            {occupation} {organisation}
          </span>
          <div className="flex flex-row mt-5">
            <img src="../../../images/linkedin.png" alt="" className="px-4" />
            <img src="../../../images/instagram.png" alt="" className="px-4" />
            <img src="../../../images/www.png" alt="" className="px-4" />
          </div>
          <span className="text-2xl font-semibold mt-5  text-center">
            {shortDescription}
          </span>

          <span className="text-2xl font-semibold mt-2  text-center">
            {/* also an entrepreneur from Newyork, USA. */}
          </span>
          <span className="text-xs font-semibold underline underline-offset-4 mt-5  text-center">
            About {firstName}
          </span>
          <span className="text-xs font-normal mt-5  text-center">
            {aboutYourself}
          </span>
          <span className="text-xs font-normal mt-2  text-center">
            {/* mentor young entrepreneurs out there. Hey this is michael,
            co-founder and executive officer at */}
          </span>
          <span className="text-xs font-normal mt-2  text-center">
            {/* twitter. I’m here to offer my services , mentor young entrepreneurs
            out there. */}
          </span>
          <div className="flex flex-row mt-5">
            <img
              src="../../../images/Star.png"
              alt=""
              className="w-3 h-3 mr-2"
            ></img>
            <div className="text-xs font-semibold">4.8</div>
            <div className="text-xs font-normal">/5.0 (200+Sessions)</div>
          </div>
          <span className="text-xs font-semibold underline underline-offset-4 mt-5">
            Domain Experties
          </span>
          <div className="flex  flex-col md:flex-row  my-5">
            <button className="flex py-2 px-5 mb-3 md:mb-0 justify-center items-center bg-black hover:bg-blue-700 text-sm  p-2 text-white rounded-full w-auto">
              Entrepreneurship
            </button>
            <button className="flex py-3 px-5 justify-center items-center bg-black hover:bg-blue-700 text-sm p-2 text-white rounded-full w-auto ml-5">
              Product Management
            </button>
          </div>
          {showServices && (
            <>
              <span className="text-2xl font-semibold m-10">
                Services Offered
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                {initialPosts !== null &&
                initialPosts.length > 0 ? (
                  initialPosts.map((s, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          className="relative overflow-hidden w-3/5 shadow-md ml-24 mt-4 "
                        >
                          <img
                            src="../../../images/CardRectangle.png"
                            className="object-cover"
                          />
                          <span className="absolute inset-x-0 top-0 mt-5">
                            <p className="text-sm text-black font-semibold p-1">
                              {s.title}
                            </p>
                            <p className="text-sm text-black font-normal p-2">
                              {s.description}
                            </p>
                            <p className="text-xs text-black font-normal mt-2 p-2">
                              {s.duration}
                            </p>
                          </span>
                        </div>
                      </>
                    )
                  })
                ) : (
                  <div></div>
                )}

                
                {/* {
                  workshopResults !== null && workshopResults.length > 0 ?
                  (
                      workshopResults.map((s, index) =>{
                        return(
                          <>
                        <div key={index}
                        className="relative overflow-hidden w-auto  rounded-xl shadow-xl">
                        <img
                          src="../../../images/CardRectangle.png"
                          className="object-cover w-full"
                        />
                        <span className="absolute inset-x-0 top-0 mt-10">
                          <p className="text-sm text-black font-semibold mt-5 p-1">
                            {s.title}
                          </p>
                          <p className="text-sm text-black font-normal p-2">
                          {s.callDuration}{' '}
                                        {s.callDurationIn}
                          </p>
                          <p className="text-xs text-black font-normal mt-2 p-2">
                            {s.description}
                          </p>
                        </span>
                      </div>
                      </>
                      )})
                  ) :(<div></div>)
                }
                {
                  textQueryResults !== null && textQueryResults.length > 0 ? (
                    textQueryResults.map((s, index) =>{
                      return(
                        <>
                      <div key={index}
                      className="relative overflow-hidden w-auto  rounded-xl shadow-xl">
                      <img
                        src="../../../images/CardRectangle.png"
                        className="object-cover w-full"
                      />
                      <span className="absolute inset-x-0 top-0 mt-10">
                        <p className="text-sm text-black font-semibold mt-5 p-1">
                          {s.title}
                        </p>
                        <p className="text-sm text-black font-normal p-2">
                        {s.responseTime}{' '}
                                        {s.responseTimeIn}
                        </p>
                        <p className="text-xs text-black font-normal mt-2 p-2">
                          {s.description}
                        </p>
                      </span>
                    </div>
                    </>
                    )})
                  ) : (<div></div>)
                }
                {
                  coursesResults !== null && coursesResults.length > 0 ? (
                    coursesResults.map((s, index) =>{
                      return(
                        <>
                      <div key={index}
                      className="relative overflow-hidden w-auto  rounded-xl shadow-xl">
                      <img
                        src="../../../images/CardRectangle.png"
                        className="object-cover w-full"
                      />
                      <span className="absolute inset-x-0 top-0 mt-10">
                        <p className="text-sm text-black font-semibold mt-5 p-1">
                          {s.courseTitle}
                        </p>
                        <p className="text-sm text-black font-normal p-2">
                        {s.sessionDuration}{' '}{s.sessionDurationIn}
                        </p>
                        <p className="text-xs text-black font-normal mt-2 p-2">
                          {s.description}
                        </p>
                      </span>
                    </div>
                    </>
                    )})
                  ) : (<div></div>)
                } */}
                {/* repeat           */}

                {/* <div className="relative overflow-hidden w-full  rounded-xl shadow-xl">
                  <img
                    src="../../../images/CardRectangle.png"
                    className="object-cover w-full"
                  />
                  <span className="absolute top-0 left-0">
                    <p className="text-sm text-black font-semibold mt-3 p-1">
                      1 on 1 Mock Interview
                    </p>
                    <p className="text-sm text-black font-normal p-2">
                      60 min | 30 min | 15 min sessions
                    </p>
                    <p className="text-xs text-black font-normal mt-2 p-2">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </p>
                  </span>

                  <div className="absolute top-0 right-0 items-center inline-flex  p-2 rounded-full z-10 text-sm font-medium text-white select-none">
                    <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                      <img
                        src="../../../images/camera.png"
                        alt=""
                        className="w-4 h-3"
                      ></img>
                      <p className="text-sm text-black dark:text-gray-100 ml-3">
                        Video session
                      </p>
                    </button>
                  </div>
                  <div className="flex flex-row justify-end bg-gray-200 bg-opacity-25 md:bg-opacity-50">
                    <button className="inset-x-0 bottom-0 mr-2">
                      <p className="text-sm text-black underline dark:text-gray-100">
                        View Details
                      </p>
                    </button>
                    <button className="bottom-0 right-0 bg-amber-400 hover:bg-blue-700 text-white p-2 rounded-full m-2">
                      <p className="text-xs text-black font-bold">
                        Book a session
                      </p>
                    </button>
                  </div>
                </div> */}
              </div>
              {initialPosts.length > 0 ? (
                              <div className="flex justify-center item-center m-5">
                              {isCompleted ? (
                                <button
                                  onClick={loadMore}
                                  type="button"
                                  className="flex py-3 px-5 justify-center items-center bg-black text-sm p-2 text-white rounded-full w-auto ml-5"
                                >
                                  No more
                                </button>
                              ) : (
                                <button
                                  onClick={loadMore}
                                  type="button"
                                  className="flex py-3 px-5 justify-center items-center bg-black hover:bg-blue-700 text-sm p-2 text-white rounded-full w-auto ml-5"
                                >
                                  Load more +
                                </button>
                              )}
                            </div>
              ) : null}

            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview
