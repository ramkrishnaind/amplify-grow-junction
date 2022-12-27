import React, { useState, useEffect, useRef } from 'react'
import { Formik, useFormikContext } from 'formik'
import Pill from '../../Header/Pill'
import TextField from '../../../../../../pages/ui-kit/TextField'
import { v4 as uuid } from 'uuid'
import classes from './Packages.module.css'
import { Storage } from 'aws-amplify'
// import OneOnOne from '../OneOnOne'
// import TextQuery from '../TextQuery'
// import Workshop from '../Workshop'
// import Courses from '../Courses'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listOneOnOnes } from '/src/graphql/queries'
import { listTextQueries } from '/src/graphql/queries'
import { listWorkshops } from '/src/graphql/queries'
import { listCourses } from '/src/graphql/queries'

const AutoSubmitToken = ({
  setValues,
  packageServices,
  hideService,
  limitParticipants,
  imageUrl,
  fileUrl,
}) => {
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext()

  React.useEffect(() => {
    debugger
    console.log('context_values', values)
    values.packageServices = packageServices
    values.limitParticipants = limitParticipants
    values.hideService = hideService
    values.packageImage = imageUrl
    values.uploadFile = fileUrl
    setValues(values)
    // setProfile(values)
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    // if (values.token.length === 6) {
    //   submitForm();
    // }
  }, [values, submitForm])
  return null
}

const Packages = ({
  setValues,
  state: initial,
  packages = {
    packageTitle: '',
    description: '',
    listedPrice: '',
    finalPrice: '',
    packageImage: '',
    emailContent: '',
    uploadFile: '',
    hideService: '',
    limitParticipants: '',
    audienceSize: '',
    packageServices: [],
  },
}) => {
  // const {
  //   sessionTitle,
  //   listedPrice,
  //   finalPrice,
  //   numberOfSessions,
  //   sessionDuration,
  //   sessionDurationIn,
  //   description,
  //   // questions: [],
  // } = initial
  // useEffect(() => {
  //   setState(initial)
  // }, [
  //   sessionTitle,
  //   listedPrice,
  //   finalPrice,
  //   numberOfSessions,
  //   sessionDuration,
  //   sessionDurationIn,
  //   description,
  // ])
  const initialState = {
    packageTitle: '',
    description: '',
    listedPrice: '',
    finalPrice: '',
    packageImage: '',
    emailContent: '',
    uploadFile: '',
    hideService: '',
    limitParticipants: '',
    audienceSize: '',
    //packageServices: []
  }

  // const [services, setServices] = useState({
  //   oneOnOne: [],
  //   workshop: [],
  //   courses: [],
  //   textQuery: [],
  // })

  useEffect(() => {
    loadOneOnOne()
    loadTextQuery()
    loadWorkshop()
    loadCourses()
  }, [])

  const [sessionResults, setSessionResults] = useState(null)
  const [workshopResults, setWorkshopResults] = useState(null)
  const [textQueryResults, setTextQueryResults] = useState(null)
  const [coursesResults, setCoursesResults] = useState(null)

  const loadOneOnOne = async () => {
    try {
      const usr = await Auth.currentAuthenticatedUser()
      console.log('usr', usr)
      const results = await API.graphql(
        graphqlOperation(listOneOnOnes, {
          filter: { username: { contains: usr.username } },
        }),
      )
      if (results.data.listOneOnOnes.items.length > 0) {
        setSessionResults(results.data.listOneOnOnes.items)
        console.log('oneonone- ', sessionResults)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  //console.log('results - ', results)

  // const addPackage = (title, duration,price) => {

  //   debugger
  //    const found = packageServices.find(
  //      (item) => item.text === title && item.duration === duration && item.price === price,
  //    )
  //   if (!found) {
  //     packageServices.push({
  //       id: uuid(),
  //       text: title,
  //       duration: duration,
  //       price: price
  //     })
  //   }
  // }
  const loadWorkshop = async () => {
    debugger
    try {
      const usr = await Auth.currentAuthenticatedUser()
      console.log('usr', usr)
      const results = await API.graphql(
        graphqlOperation(listWorkshops, {
          filter: { username: { contains: usr.username } },
        }),
      )
      if (results.data.listWorkshops.items.length > 0) {
        setWorkshopResults(results.data.listWorkshops.items)
        console.log('oneonone- ', workshopResults)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadCourses = async () => {
    try {
      const usr = await Auth.currentAuthenticatedUser()
      console.log('usr', usr)
      const results = await API.graphql(
        graphqlOperation(listCourses, {
          filter: { username: { contains: usr.username } },
        }),
      )
      if (results.data.listCourses.items.length > 0) {
        setCoursesResults(results.data.listCourses.items)
        console.log('oneonone- ', coursesResults)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  const loadTextQuery = async () => {
    try {
      const usr = await Auth.currentAuthenticatedUser()
      console.log('usr', usr)
      const results = await API.graphql(
        graphqlOperation(listTextQueries, {
          filter: { username: { contains: usr.username } },
        }),
      )
      if (results.data.listTextQueries.items.length > 0) {
        setTextQueryResults(results.data.listTextQueries.items)
        console.log('oneonone- ', textQueryResults)
      }
    } catch (error) {
      console.log(`Load Error:${error}`)
    }
  }

  //console.log("Services - ", services)

  const imageInputref = useRef()
  const fileInputref = useRef()
  const [image, setImage] = useState(null)
  const [uploadFile, setUploadFile] = useState(null)
  const [convertedImage, setConvertedImage] = useState()
  const [hideService, setHideService] = useState(true)
  const [limitParticipants, setLimitParticipants] = useState(true)
  const toggleClass = ' transform translate-x-5'

  const items = ['Text', 'Upload (Pdf,jpeg)']
  // const [questionType, setQuestionType] = useState(items[0])
  // const [state, setState] = useState(initialState)
  // const [question, setQuestion] = useState('')
  const [packageServices, setPackageServices] = useState([])
  const [imageUrl, setImageUrl] = useState()
  const [fileUrl, setFileUrl] = useState()
  const [flag] = useState(false)

  const handleFileInput = async (e) => {
    e.preventDefault()
    debugger
    if (e.target.files?.[0]) {
      setImage(e.target.files[0])
    }
    console.log('image -', image)
    if (e.target.files[0]) {
      const name = e.target.files[0].name.substr(
        0,
        e.target.files[0].name.lastIndexOf('.'),
      )
      const ext = e.target.files[0].name.substr(
        e.target.files[0].name.lastIndexOf('.') + 1,
      )
      const filename = `${name}_${uuid()}.${ext}`
      setImageUrl(filename)
      console.log(imageUrl)
      await Storage.put(filename, e.target.files[0], {
        contentType: `image/${ext}`, // contentType is optional
      })
    }
  }

  const handleFileUpload = async (e) => {
    e.preventDefault()
    debugger
    if (e.target.files?.[0]) {
      setUploadFile(e.target.files[0])
    }
    console.log('file -', uploadFile)
    if (e.target.files[0]) {
      const name = e.target.files[0].name.substr(
        0,
        e.target.files[0].name.lastIndexOf('.'),
      )
      const ext = e.target.files[0].name.substr(
        e.target.files[0].name.lastIndexOf('.') + 1,
      )
      const filename = `${name}_${uuid()}.${ext}`
      setFileUrl(filename)
      console.log(fileUrl)
      await Storage.put(filename, e.target.files[0], {
        contentType: `text/${ext}`, // contentType is optional
      })
    }
  }

  return (
    <>
      <Formik
        initialValues={{ ...packages }}
        onSubmit={(values, e) => {
          debugger
          const { setSubmitting } = e
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
          }, 400)
          values.packageServices = packageServices
          values.packageImage = imageUrl
          values.uploadFile = fileUrl
          values.limitParticipants = limitParticipants
          values.hideService = hideService
          console.log('onsubmit - ', values)
          // setProfileState(values)
        }}
        // enableReinitialize={true}
        // validateOnChange={true}
        // validateOnBlur={true}
        // validateOnMount={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          console.log('values', values)
          return (
            <form>
              <div className="flex flex-col md:flex-row lg:flex-row">
                <div className="bg-white basis-3/5">
                  <div className="flex flex-col tracking-wide text-black ml-4 w-full md:w-auto lg:w-auto">
                    <div className="px-2 mt-5">
                      <label className="leading-8 text-sm font-normal mt-5">
                        Package Title
                      </label>

                      <div className="flex flex-wrap items-start w-auto  mr-4 md:mr-1 lg:mr-1 relative">
                        {/* <div className="focus-outline flex flex-row rounded-md border border-gray-300 px-5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 pr-1">
                        <label className="text-black py-2 flex-1 text-right pr-0  text-sm font-normal">
                          Growjunction.io/
                        </label>
                      </div> */}
                        <TextField
                          type="text"
                          name="packageTitle"
                          onChangeValue={handleChange}
                          value={values.packageTitle}
                          id="url"
                          placeholder="Package Title"
                          textStyleOverride={{
                            marginBottom: 0,
                            paddingLeft: 0,
                            width: '100%',
                          }}
                          className="text-sm"
                        />
                      </div>
                    </div>

                    <div className="px-2 mt-5">
                      <label className="leading-8 text-sm font-normal mt-5">
                        Description
                      </label>
                      <div className="flex flex-wrap items-stretch w-auto mr-4 md:mr-1 lg:mr-1 relative">
                        <textarea
                          onChange={handleChange}
                          placeholder="Description"
                          value={values.description}
                          name="description"
                          className="w-full p-3 bg-gray-50 text-sm"
                        ></textarea>
                      </div>
                      <div className="flex justify-start text-xs mt-3 mb-10">
                        Describe yourself in 500 characters or less
                      </div>
                    </div>

                    <div className="flex flex-col font-normal mt-5 md:flex-row lg:flex-row">
                      <div className="px-2 text-sm w-full md:w-1/2 lg:w-1/2">
                        <label className="leading-8 text-lg font-normal mt-5">
                          Listed Price
                        </label>
                        <div className="flex flex-wrap items-stretch w-auto mr-4 md:mr-1 lg:mr-1 relative">
                          <TextField
                            onChangeValue={handleChange}
                            value={values.listedPrice}
                            placeholder="₹"
                            name="listedPrice"
                            type="text"
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="px-2 text-sm mb-10 w-full md:w-1/2 lg:w-1/2">
                        <label className="leading-8 text-lg font-normal mt-5">
                          Final Price
                        </label>
                        <div className="flex flex-wrap items-stretch w-auto mr-4 md:mr-1 lg:mr-1 relative">
                          <TextField
                            type="text"
                            placeholder="₹"
                            value={values.finalPrice}
                            onChangeValue={handleChange}
                            name="finalPrice"
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white basis-2/5">
                  <div className="flex flex-col ml-10 mt-10 mr-10  w-auto">
                    <p className="flex justify-start items-start text-sm ">
                      Upload packages thumbnail
                    </p>
                    <div className="flex flex-col md:flex-row lg:flex-row">
                      <div className="flex flex-col">
                        <div
                          className={`${classes['img-profile']} bg-gray-300 rounded-md border-dashed`}
                        >
                          {image ? (
                            <img
                              src={URL.createObjectURL(image)}
                              alt=""
                              className={`${classes['img-profile']}`}
                            />
                          ) : convertedImage ? (
                            <img
                              src={convertedImage}
                              alt=""
                              className={`${classes['img-profile']}`}
                            />
                          ) : null}
                        </div>
                        <div className="flex flex-col justify-start items-start mt-16 px-2 py-2">
                          <button className="flex justify-start items-start bg-white hover:bg-gray-900 hover:text-white text-black font-bold py-4 px-6 border-2 rounded-md min-w-40">
                            <button
                              className="ml-3 text-lg"
                              onClick={(e) => {
                                e.preventDefault()
                                imageInputref.current.click()
                              }}
                            >
                              Upload image
                            </button>
                            <input
                              type="file"
                              accept="image/*"
                              ref={imageInputref}
                              className="absolute w-0 h-0 left-0 top-0"
                              onChange={handleFileInput}
                            />
                          </button>
                          <p className="w-auto ml-3 mt-3 text-xs tracking-wide">
                            Max file size 5mb
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 border-0"></div>

              <div className="flex flex-col-reverse md:flex-row lg:flex-row">
                <div className="bg-white basis-3/5 ">
                  <div className="px-4 mt-5 rounded-md mr-4 md:mr-1 lg:mr-1 w-2/3">
                    <div className="flex flex-col text-base ">
                      <span className="text-xl font-semibold">
                        Email to registered students
                      </span>
                      <span className="text-sm font-normal mt-10"></span>

                      <div className="px-2 mt-5">
                        <label className="leading-8 text-sm font-normal mt-5">
                          Email content
                        </label>
                        <div className="flex flex-wrap items-stretch w-auto mr-4 md:mr-1 lg:mr-1 relative">
                          <textarea
                            onChange={handleChange}
                            placeholder="emailContent"
                            value={values.emailContent}
                            name="emailContent"
                            className="w-full p-3  text-sm border-2"
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex flex-col mt-10 mb-10 px-2 w-auto">
                        <p className="flex justify-start items-start text-sm ">
                          Upload file (optional)
                        </p>
                        <button className="flex justify-start items-start bg-white hover:bg-gray-900 hover:text-white text-black font-bold py-4 px-6 border-2 rounded-md min-w-40">
                          <button
                            className="ml-3 text-lg"
                            onClick={(e) => {
                              e.preventDefault()
                              fileInputref.current.click()
                            }}
                          >
                            Upload file
                          </button>
                          <input
                            type="file"
                            accept="text/*"
                            ref={fileInputref}
                            className="absolute w-0 h-0 left-0 top-0"
                            onChange={handleFileUpload}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-300 border-0"></div>
                  <span className="text-xl font-semibold px-4">Settings</span>
                  <div className="m-3 p-2 flex justify-start rounded-xl border-2 w-auto mr-6 md:mr-1 lg:mr-1">
                    <img
                      className="px-3"
                      src="/assets/icon/exclamationmarkcircle.png"
                    />
                    <span className="text-sm text-gray-400">
                      you can also record sessions during the call
                    </span>
                  </div>

                  <div className="flex flex-row bg-gray-50 ml-5 px-10 mt-5 rounded-md mr-4 md:mr-1 lg:mr-1 w-2/3">
                    <div
                      className="md:w-14 md:h-7 w-12 h-6 mx-6 m-5 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
                      onClick={() => {
                        setHideService(!hideService)
                      }}
                    >
                      {/* Switch */}
                      <div
                        className={
                          'bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform' +
                          (hideService ? null : toggleClass)
                        }
                      ></div>
                    </div>
                    <div className="flex items-center text-sm">
                      Hide this service on your profile
                    </div>
                  </div>
                  <div> </div>
                  <div className="flex flex-row bg-gray-50 ml-5 px-10 mt-5 rounded-md mr-4 md:mr-1 lg:mr-1 w-2/3">
                    <div
                      className="md:w-14 md:h-7 w-12 h-6 mx-6 m-5 flex items-center bg-green-800 rounded-full p-1 cursor-pointer"
                      onClick={() => {
                        setLimitParticipants(!limitParticipants)
                      }}
                    >
                      {/* Switch */}
                      <div
                        className={
                          'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform' +
                          (limitParticipants ? null : toggleClass)
                        }
                      ></div>
                    </div>
                    <div className="flex items-center text-sm">
                      Limit participants
                    </div>
                  </div>
                  <div className="px-2 text-sm ml-5 mt-5 w-full md:w-1/2 lg:w-1/2">
                    <label className="leading-8 text-sm font-normal mt-5">
                      Audience size
                    </label>
                    <div className="flex items-center flex-wrap w-auto mr-4 md:mr-1 lg:mr-1 relative">
                      <TextField
                        onChangeValue={handleChange}
                        type="number"
                        min="0"
                        value={values.audienceSize}
                        textStyleOverride={{ width: '100%' }}
                        name="audienceSize"
                        id="audienceSize"
                        className=""
                      />
                    </div>
                  </div>
                  <div className=" mt-5  bg-white"></div>
                </div>
                <div className="bg-white basis-2/5"></div>
              </div>
              <div className="w-full h-px bg-gray-200 border-0"></div>

              <div className="flex flex-col-reverse md:flex-row lg:flex-row">
                <div className="bg-white basis-3/5 ">
                  <span className="text-xl font-semibold px-4">
                    Available services
                  </span>
                  <div className="m-3 p-2 flex justify-start rounded-xl border-2 w-auto mr-6 md:mr-1 lg:mr-1">
                    <img
                      className="px-3 w-4 h-4"
                      src="/assets/icon/exclamationmarkcircle.png"
                    />
                    <span className="text-sm text-gray-400">
                      Select services added by you to create a package
                    </span>
                  </div>
                  {/* todo - dynamic data comes from all service to be displayed here seems */}

                  <div className=" mt-5  bg-white"></div>
                </div>
                <div className="bg-white basis-2/5"></div>
              </div>

              <div className="bg-white w-full p-4">
                <div className="flex flex-col font-normal py-4 mb-5 mr-5 ml-5">
                  {/* session start */}
                  <div className="flex justify-start bg-amber-400 p-4 w-full rounded-lg text-xl font-bold">
                    Sessions
                  </div>
                  <div className="flex justify-start p-4 w-full">
                    {sessionResults !== null && sessionResults.length > 0 ? (
                      <div className="my-3 bg-white p-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0 w-full">
                          {sessionResults.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex justify-center align-center mb-10 hover:shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] "
                              >
                                <div
                                  className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full ${classes.itemContainer}`}
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
                                    <div className="flex items-center px-6 mr-5 min-w-[30%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/clock-two.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        {item.sessionDuration}{' '}
                                        {item.sessionDurationIn}
                                      </span>
                                    </div>
                                    <div className="flex items-center  py-1 px-6 ">
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
                                    <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                  </div>
                                  <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                    <button className="flex justify-center items-center hover:bg-gray-900 hover:text-white text-black border-2 broder-gray rounded-full w-full">
                                      <span className="text-sm font-semibold py-3">
                                        Add to package
                                      </span>
                                    </button>
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
                    )}
                  </div>
                  {/*session  end */}

                  {/* workshop start */}
                  <div className="flex justify-start bg-amber-400 p-4 w-full rounded-lg text-xl font-bold">
                    workshop
                  </div>
                  <div className="flex justify-start p-4">
                    {workshopResults !== null && workshopResults.length > 0 ? (
                      <div className="my-3 bg-white p-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0 w-full">
                          {workshopResults.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex justify-center align-center mb-10 hover:shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]"
                              >
                                <div
                                  className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full ${classes.itemContainer}`}
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
                                    <div className="flex items-center px-6 mr-5 min-w-[30%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/clock-two.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        {item.sessionDuration}{' '}
                                        {item.sessionDurationIn}
                                      </span>
                                    </div>
                                    <div className="flex items-center  py-1 px-6 ">
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
                                    <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                  </div>
                                  <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                    <button className="flex justify-center items-center hover:bg-gray-900 hover:text-white text-black border-2 broder-gray rounded-full w-full">
                                      <span className="text-sm font-semibold py-3">
                                        Add to package
                                      </span>
                                    </button>
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
                    )}
                  </div>
                  {/*workshop  end */}

                  {/* TextQuery start */}
                  <div className="flex justify-start bg-amber-400 p-4 w-full rounded-lg text-xl font-bold">
                    TextQuery
                  </div>
                  <div className="flex justify-start p-4">
                    {textQueryResults !== null &&
                    textQueryResults.length > 0 ? (
                      <div className="my-3 bg-white p-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0 w-full">
                          {textQueryResults.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex justify-center align-center mb-10 hover:shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]"
                              >
                                <div
                                  className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full ${classes.itemContainer}`}
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
                                    <div className="flex items-center px-6 mr-5 min-w-[30%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/clock-two.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        {item.sessionDuration}{' '}
                                        {item.sessionDurationIn}
                                      </span>
                                    </div>
                                    <div className="flex items-center  py-1 px-6 ">
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
                                    <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                  </div>
                                  <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                    <button className="flex justify-center items-center hover:bg-gray-900 hover:text-white text-black border-2 broder-gray rounded-full w-full">
                                      <span className="text-sm font-semibold py-3">
                                        Add to package
                                      </span>
                                    </button>
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
                    )}
                  </div>
                  {/*TextQuery  end */}

                  {/* Courses start */}
                  <div className="flex justify-start bg-amber-400 p-4 w-full rounded-lg text-xl font-bold">
                    Courses
                  </div>
                  <div className="flex justify-start p-4">
                    {coursesResults !== null && coursesResults.length > 0 ? (
                      <div className="my-3 bg-white p-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0 w-full">
                          {coursesResults.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex justify-center align-center mb-10 hover:shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]"
                              >
                                <div
                                  className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-full ${classes.itemContainer}`}
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
                                    <div className="flex items-center px-6 mr-5 min-w-[30%]">
                                      <img
                                        src="/assets/icon/mentor-dashboard/clock-two.svg"
                                        className="h-5 mr-5"
                                      />
                                      <span className="text-sm font-semibold py-3">
                                        {item.sessionDuration}{' '}
                                        {item.sessionDurationIn}
                                      </span>
                                    </div>
                                    <div className="flex items-center  py-1 px-6 ">
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
                                    <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                                  </div>
                                  <div className="py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row flex-col flex md:justify-between items-center">
                                    <button className="flex justify-center items-center hover:bg-gray-900 hover:text-white text-black border-2 broder-gray rounded-full w-full">
                                      <span className="text-sm font-semibold py-3">
                                        Add to package
                                      </span>
                                    </button>
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
                    )}
                  </div>
                  {/*Courses  end */}
                </div>
              </div>

              <div className="w-full h-px bg-gray-300 border-0"></div>
              <AutoSubmitToken
                setValues={setValues}
                hideService={hideService}
                limitParticipants={limitParticipants}
                packageImage={imageUrl}
                uploadFile={fileUrl}
              />
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default Packages
