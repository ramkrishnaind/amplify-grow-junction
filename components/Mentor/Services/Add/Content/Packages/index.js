import React, { useState, useEffect } from 'react'
import { Formik, useFormikContext } from 'formik'
import Pill from '../../Header/Pill'
import TextField from '../../../../../../pages/ui-kit/TextField'
import { v4 as uuid } from 'uuid'

const AutoSubmitToken = ({ setValues, questions }) => {
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext()

  React.useEffect(() => {
    debugger
    console.log('context_values', values)
    values.questions = questions
    setValues(values)
    // setProfile(values)
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    // if (values.token.length === 6) {
    //   submitForm();
    // }
  }, [values, submitForm])
  return null
}
const Packages = ({ setValues, state: initial }) => {
  const {
    sessionTitle,
    listedPrice,
    finalPrice,
    numberOfSessions,
    sessionDuration,
    sessionDurationIn,
    description,
    // questions: [],
  } = initial
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
    sessionTitle: '',
    listedPrice: '',
    finalPrice: '',
    numberOfSessions: '',
    sessionDuration: '',
    sessionDurationIn: '',
    description: '',
    // questions: [],
  }

  const [toggle1, setToggle1] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const toggleClass = ' transform translate-x-5'

  const items = ['Text', 'Upload (Pdf,jpeg)']
  const [questionType, setQuestionType] = useState(items[0])
  const [state, setState] = useState(initialState)
  const [question, setQuestion] = useState('')
  const [questions, setQuestions] = useState([])
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value)
  }
  const addQuestion = () => {
    const found = questions.find(
      (item) => item.text === question && item.type === questionType,
    )
    if (!found) {
      questions.push({
        id: uuid(),
        text: question,
        type: questionType,
      })
    }
    setQuestionType(items[0])
    setQuestion('')
  }
  const handleRemoveQuestion = (id) => {
    debugger
    const newQuestions = questions.filter((item) => item.id !== id)
    setQuestions(newQuestions)
  }
  return (
    <>
      <Formik
        initialValues={{ ...state }}
        onSubmit={(values, e) => {
          debugger
          const { setSubmitting } = e
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
          }, 400)
          values.questions = questions
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
                        {/* <div class="focus-outline flex flex-row rounded-md border border-gray-300 px-5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 pr-1">
                        <label className="text-black py-2 flex-1 text-right pr-0  text-sm font-normal">
                          Growjunction.io/
                        </label>
                      </div> */}
                        <TextField
                          type="text"
                          name="packageTitle"
                          onChangeValue={handleChange}
                          value={values.sessionTitle}
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
                  <div className="flex flex-col ml-10 mt-10 mr-10 mb-10 w-auto">
                    <p className="flex justify-start items-start text-sm ">
                      Upload workshop thumbnail
                    </p>
                    <label
                      for="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{' '}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          SVG, PNG, JPG or GIF (Max file size 5mb)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>
                </div>
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

                  <div className="flex flex-row justify-center items-center font-normal py-4 mb-5 mt-5 ml-5 md:flex-row lg:flex-row bg-gray-50">
                    <div className="flex justify-center item-center text-sm w-1/6">
                      <p className="leading-8 text-lg font-normal mt-5">
                        <input type="checkbox" className="mr-3"></input>
                      </p>
                    </div>

                    <div className="flex flex-col px-2 text-sm w-1/2 md:w-1/2 lg:w-1/2">
                      <label className="leading-8 text-base font-semibold mt-5">
                        Mock Interview
                      </label>
                      <label className="flex flex-wrap leading-8 text-base font-normal">
                        1 on 1 Session
                      </label>
                    </div>
                    <div className="flex flex-col px-2 text-sm w-1/3">
                      <label className="leading-8 text-base font-semibold mt-5">
                        30 minutes
                      </label>
                      <label className="leading-8 text-base font-normal">
                        Duration
                      </label>
                    </div>
                    <div className="flex flex-col px-2 text-sm w-1/3">
                      <label className="leading-8 text-base font-semibold mt-5">
                        1000
                      </label>
                      <label className="leading-8 text-base font-normal">
                        Price
                      </label>
                    </div>
                  </div>

                  <div className=" mt-5  bg-white"></div>
                </div>
                <div className="bg-white basis-2/5"></div>
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
                            //value={values.description}
                            name="emailContent"
                            className="w-full p-3  text-sm border-2"
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex flex-col mt-10 mb-10 px-2 w-auto">
                        <p className="flex justify-start items-start text-sm ">
                          Upload file (optional)
                        </p>
                        <label
                          for="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              aria-hidden="true"
                              className="w-10 h-10 mb-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">
                                Click to upload
                              </span>{' '}
                              or Drag & drop file
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                          />
                        </label>
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
                        setToggle1(!toggle1)
                      }}
                    >
                      {/* Switch */}
                      <div
                        className={
                          'bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform' +
                          (toggle1 ? null : toggleClass)
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
                        setToggle2(!toggle2)
                      }}
                    >
                      {/* Switch */}
                      <div
                        className={
                          'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform' +
                          (toggle2 ? null : toggleClass)
                        }
                      ></div>
                    </div>
                    <div className="flex items-center text-sm">
                      Limit participants
                    </div>
                  </div>
                  <div className=" mt-5  bg-white"></div>
                </div>
                <div className="bg-white basis-2/5"></div>
              </div>
              <div className="w-full h-px bg-gray-300 border-0"></div>
              <AutoSubmitToken setValues={setValues} questions={questions} />
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default Packages
