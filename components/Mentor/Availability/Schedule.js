import React, { useState } from 'react'
import { Formik, useFormikContext } from 'formik'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import TextField from '../../../pages/ui-kit/TextField'

const Schedule = () => {
  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  )

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(values, e) => {
          const { setSubmitting } = e
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
          setProfileState(values)
        }}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form>
              <div className="flex flex-col md:flex-row lg:flex-row w-full px-20 py-10">
                <div className="flex flex-col md:flex-row lg:flex-row w-full justify-between">
                  <div className="flex justify-center items-center text-2xl font-semibold text-gray-900 py-6">
                    Availability details
                  </div>
                  <div className="flex flex-row">
                    <div className="flex justify-center items-center text-black text-base font-semibold">
                      Reset all
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          handleSubmit(e)
                        }}
                        className="mt-2 text-base bg-white hover:bg-gray-900 hover:text-white text-black border-gray-900 font-bold py-4 px-6 ml-10 border rounded"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:m-20 lg:m-20 md:-mt-5 lg:-mt-5 w-full md:w-auto lg:w-auto flex flex-col md:flex-row lg:flex-row">
                <div className="basis-3/5 justify-between w-full md:w-auto lg:w-auto flex flex-col md:flex-row lg:flex-row">
                  <div className="text-gray-900 text-base font-semibold mt-1">
                    Select days you’ll be available
                  </div>
                  <div className="text-gray-900 text-base font-semibold mt-1">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3"></input>
                      <span className="text-sm">
                        I’m Available same time everyday
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 md:m-20 lg:m-20 md:-mt-10 lg:-mt-10 w-full md:w-auto lg:w-auto  flex flex-col md:flex-row  lg:flex-row">
                <div className="basis-3/5 bg-white py-4 rounded-lg">
                  <div className=" flex flex-col md:flex-row  lg:flex-row w-full">
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Sunday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2 ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div className=" flex flex-col md:flex-row  lg:flex-row w-full">
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Monday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div className=" flex flex-col md:flex-row  lg:flex-row w-full">
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Tuesday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5  mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div className=" flex flex-col md:flex-row  lg:flex-row w-full">
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Wednesday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div className=" flex flex-col md:flex-row  lg:flex-row w-full">
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Thursday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div className=" flex flex-col md:flex-row  lg:flex-row w-full">
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Friday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div className=" flex flex-col md:flex-row  lg:flex-row w-full">
                    <div className="basis-1/3">
                      <div className="flex justify-center items-center mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Saturday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="basis-2/5">
                  <div className="flex flex-col justify-start bg-white px-4 py-4  border-2 rounded-2xl m-20">
                    <span className="text-gray-900 font-semibold text-lg">
                      Unavailable dates
                    </span>
                    <span className="text-gray-900 font-normal text-sm mt-5">
                      Add dates when you will be unavailable to be scheduled
                    </span>
                    <div className="flex justify-center item-center mt-10">
                    <button className="flex justify-center items-center border-2  border-gray-900 bg-white hover:text-white hover:bg-gray-900 text-gray-900 rounded-full w-auto">
                      <span className="text-base font-semibold py-3 px-10">
                        Add unavailable dates
                      </span>
                    </button>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0 mt-10"></div>
                  <span className='text-sm font-semibold mt-10'>You are unavailable on</span>
                  </div>
          
                </div>
              </div>
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default Schedule
