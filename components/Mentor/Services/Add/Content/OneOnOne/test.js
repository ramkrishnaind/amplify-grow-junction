components/Mentor/Services/Add/Content/OneOnOne/index.js
import React, { useState } from 'react'
import { Formik } from 'formik'
import Pill from '../../Header/Pill'
import TextField from '../../../../../../pages/ui-kit/TextField'
const OneOnOne = () => {
  const items = ['Text', 'Upload (Pdf,jpeg)']
  const [questionType, setQuestionType] = useState(items[0])
  const [state, setState] = useState({})
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
          values.time_zone = timeZone?.value || ''
          values.profile_image_file = image
          setProfileState(values)
        }}
        enableReinitialize={true}
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
          // console.log('values', values)
          return (
            <form>
              <div className="flex flex-col md:flex-row lg:flex-row">
                <div className="bg-white basis-3/5">
                  <div className="flex flex-col tracking-wide text-black ml-4 w-full md:w-auto lg:w-auto">
                    {/* <div className="flex flex-col ml-4 p-6 border-2 rounded-md bg-white">
            <div className="text-lg">40% of profile completed</div>
            <div className="flex w-1/2">
              <div className="w-2/5 bg-gray-600 h-2 rounded-l-lg"></div>
              <div className="w-3/5 bg-gray-300 h-2 rounded-r-lg"></div>
            </div>
            <p className="text-lg">
              Complete 100% of the profile to get a better reach
            </p>
          </div> */}
                    {/* <h2 className="p-2 leading-8 text-2xl font-semibold">
                      About Yourself
                    </h2> */}

                    <div className="px-2 mt-5">
                      <label className="leading-8 text-sm font-normal mt-5">
                        Session Title
                      </label>

                      <div className="flex flex-wrap items-start w-auto  mr-4 md:mr-1 lg:mr-1 relative">
                        {/* <div class="focus-outline flex flex-row rounded-md border border-gray-300 px-5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 pr-1">
                          <label className="text-black py-2 flex-1 text-right pr-0  text-sm font-normal">
                            Growjunction.io/
                          </label>
                        </div> */}
                        <TextField
                          type="text"
                          name="about_yourself.grow_junction_url"
                          onChangeValue={handleChange}
                          //   value={values.about_yourself.grow_junction_url}
                          id="url"
                          placeholder="Session Title"
                          textStyleOverride={{
                            marginBottom: 0,
                            paddingLeft: 0,
                            width: '100%',
                          }}
                          className="text-sm"
                        />
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
                            // value={values.about_yourself.first_name}
                            placeholder="₹"
                            name="about_yourself.first_name"
                            type="text"
                            id="fname"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="px-2 text-sm w-full md:w-1/2 lg:w-1/2">
                        <label className="leading-8 text-lg font-normal mt-5">
                          Final Price
                        </label>
                        <div className="flex flex-wrap items-stretch w-auto mr-4 md:mr-1 lg:mr-1 relative">
                          <TextField
                            type="text"
                            placeholder="₹"
                            // value={values.about_yourself.last_name}
                            onChangeValue={handleChange}
                            name="about_yourself.last_name"
                            id="lname"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-normal mt-5 md:flex-row lg:flex-row">
                      <div className="px-2 text-sm w-full md:w-1/2 lg:w-1/2">
                        <label className="leading-8 text-lg font-normal mt-5">
                          Number of sessions
                        </label>
                        <div className="flex items-center flex-wrap w-auto mr-4 md:mr-1 lg:mr-1 relative">
                          <TextField
                            onChangeValue={handleChange}
                            type="number"
                            min="0"
                            // value={values.about_yourself.first_name}
                            textStyleOverride={{ width: '100%' }}
                            placeholder="₹"
                            name="about_yourself.first_name"
                            id="fname"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="px-2 text-sm w-full md:w-1/2 lg:w-1/2">
                        <label className="leading-8 text-lg font-normal mt-5">
                          Session duration
                        </label>
                        <div className="flex items-center flex-wrap w-auto mr-4 md:mr-1 lg:mr-1 relative">
                          <TextField
                            type="number"
                            min="0"
                            textStyleOverride={{ width: '80%' }}
                            placeholder="₹"
                            // value={values.about_yourself.last_name}
                            onChangeValue={handleChange}
                            name="about_yourself.last_name"
                            id="lname"
                            widthPartial
                            className=""
                          />
                          <select className="absolute px-3 py-3 top-1  text-lg right-1 bg-gray-50">
                            <option>mins</option>
                            <option>hours</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 mt-5">
                      <label className="leading-8 text-sm font-normal mt-5">
                        Description
                      </label>
                      <div className="flex flex-wrap items-stretch w-auto mr-4 md:mr-1 lg:mr-1 relative">
                        <textarea
                          onChange={handleChange}
                          placeholder="About yourself"
                          //   value={values.about_yourself.about_yourself}
                          name="about_yourself.about_yourself"
                          className="w-full p-3 bg-gray-50 text-sm"
                        ></textarea>
                      </div>
                      <div className="flex justify-start text-xs mt-3 mb-5">
                        Describe yourself in 500 characters or less
                      </div>
                    </div>
                    {/* <div className="w-full h-px bg-gray-300 border-0 mt-2 mb-2 -ml-4"></div> */}
                  </div>
                </div>
                <div className="bg-white basis-2/5"></div>
              </div>
              <div className="w-full h-px bg-gray-200 border-0"></div>
              <div className="flex flex-col-reverse md:flex-row lg:flex-row">
                <div className="bg-white basis-3/5">
                  <span className="text-xl font-semibold px-4">
                    Additional questions
                  </span>
                  <div className="m-3 p-2 flex justify-start rounded-xl border-2 w-auto mr-6 md:mr-1 lg:mr-1">
                    <img
                      className="pr-3"
                      src="/assets/icon/mentor-dashboard/info.svg"
                    />
                    <span className="text-sm text-gray-400">
                      you can collect links to resume, Linkedin or ask any
                      specific question
                    </span>
                  </div>
                  <div className="ml-5 px-10 mt-5 bg-gray-50 rounded-md mr-4 md:mr-1 lg:mr-1">
                    <div className="bg-gray-50 text-lg py-4 ">
                      <label>Enter question</label>
                      <TextField
                        name="social.facebook_url"
                        onChangeValue={handleChange}
                        // styleOverride={{ backgroundColor: '#fff' }}
                        classOverride="bg-white"
                        //   value={values.social.facebook_url}
                        type="url"
                        id="linkedurl"
                        placeholder="Enter URL here"
                      />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3"></input>
                      <span className="text-lg mt-7">Requiredq</span>
                    </div>
                    <div className="text-lg bg-gray-50 py-4">
                      <label className="mb-5">Answer Type (Select)</label>
                      <section className="flex mt-6">
                        {items.map((item, index) => {
                          return (
                            <Pill
                              selected={item === questionType}
                              title={item}
                              key={index}
                              setCurrentService={setQuestionType}
                              className="mr-3 text-sm"
                            />
                          )
                        })}
                      </section>
                    </div>
                  </div>
                  <div className=" mt-5  bg-white"></div>
                </div>

                <div className="bg-white basis-2/5">
                  <div className="flex justify-center md:justify-end lg:justify-end w-auto mr-2">
                    <button className="mt-3 mr-3 px-6 py-3 leading-8 text-2xl font-semibold  border-2 border-gray-900 rounded-md items-center">
                      <span className="text-sm font-semibold">
                        Add another question
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 border-0"></div>
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default OneOnOne
