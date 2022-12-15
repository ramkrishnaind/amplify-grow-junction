import React, { useState } from 'react'
import { Formik, useFormikContext } from 'formik'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import TextField from '../../../pages/ui-kit/TextField'

const Configurations = () => {
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
              <div className="flex flex-col md:flex-row lg:flex-row w-full p-20">
                <div className="flex flex-col md:flex-row lg:flex-row w-full justify-between">
                  <div className="flex justify-center items-center text-2xl font-semibold text-gray-900 p-6">
                    Configurations
                  </div>
                  <div className="flex flex-row px-4">
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

              <div className="m-5 md:m-20 lg:m-20 bg-white">
                <div className="flex flex-col md:flex-row lg:flex-row border-b-2 rounder-md w-auto">
                  <div className="basis-1/2">
                    <div className="flex flex-col justify-start items-start p-10">
                      <div className="flex flex-row text-gray-900 text-base font-bold">
                        <img
                          src="../../../assets/icon/clock.png"
                          alt=""
                          className="w-4 h-4 mt-1"
                        ></img>
                        <span className="px-5">Timezone</span>
                      </div>
                      <div className="px-9 text-gray-400 text-sm font-semibold">
                        Required for timely communications
                      </div>
                    </div>
                  </div>
                  <div className="basis-1.2">
                    <div className="p-8 w-full ">
                      <TimezoneSelect
                        value={timeZone}
                        // value={values.time_zone}

                        // onChange={(val)=>handleChange(val)}
                        onChange={setTimeZone}
                        // labelStyle="altName"
                        timezones={{
                          ...allTimezones,
                          'America/Lima': 'Pittsburgh',
                          'Europe/Berlin': 'Frankfurt',
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row border-b-2 rounder-md">
                  <div className="basis-1/2">
                    <div className="flex flex-col justify-start items-start p-10">
                      <div className="flex flex-row text-gray-900 text-base font-bold">
                        <img
                          src="../../../assets/icon/dateBlack.png"
                          className="w-3 h-3 mt-1"
                        ></img>
                        <span className="px-5">Calendar</span>
                      </div>
                      <div className="px-9 text-gray-400 text-sm font-semibold">
                        Sync your work calendar to avoid any clashed
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <div className="p-8 w-full ">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          // handleSubmit(e)
                        }}
                        className="text-base bg-white hover:bg-gray-900 hover:text-white text-black border-gray-900 font-bold py-4 px-6  border rounded"
                      >
                        + Add Calender
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row border-b-2 rounder-md">
                  <div className="basis-1/2">
                    <div className="flex flex-col justify-start items-start p-10">
                      <div className="flex flex-row text-gray-900 text-base font-bold">
                        <img
                          src="../../../assets/icon/hyperlink.png"
                          className="w-4 h-3 mt-1"
                        />
                        <span className="px-5">Personal meeting link</span>
                      </div>
                      <div className="px-9 text-gray-400 text-sm font-semibold">
                        All your 1:1 meetings will be redirected to this URL
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <div className="p-8 w-full ">
                      <TextField
                        type="text"
                        id="fname"
                        placeholder="+ Add meeting link (Ex: Google meet, Zoom link)"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row border-b-2 rounder-md">
                  <div className="basis-1/2">
                    <div className="flex flex-col justify-start items-start p-10">
                      <div className="flex flex-row text-gray-900 text-base font-bold">
                        <img
                          src="../../../assets/icon/dateBlack.png"
                          className="w-3 h-3 mt-1"
                        ></img>
                        <span className="px-5">Booking period</span>
                      </div>
                      <div className="px-9 text-gray-400 text-sm font-semibold">
                        How far in the future can attendees book
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <div className="p-8 w-full ">
                      <div className="flex items-center flex-wrap w-auto mr-4 md:mr-1 lg:mr-1 relative">
                        <TextField
                          type="number"
                          min="0"
                          textStyleOverride={{ width: '87%' }}
                          value={values.sessionDuration}
                          onChangeValue={handleChange}
                          name="sessionDuration"
                          id="lname"
                          widthPartial
                          className=""
                        />
                        <select
                          className="absolute px-3 py-3 top-1  text-lg right-1 bg-gray-50"
                          value="values.sessionDurationIn"
                          name="sessionDurationIn"
                          onChange={handleChange}
                        >
                          <option value="day">Days</option>
                          <option value="week">Weeks</option>
                          <option value="month">Months</option>
                          <option value="year">Years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row border-b-2 rounder-md">
                  <div className="basis-1/2">
                    <div className="flex flex-col justify-start items-start p-10">
                      <div className="flex flex-row text-gray-900 text-base font-bold">
                        <img
                          src="../../../assets/icon/dateBlack.png"
                          className="w-3 h-3 mt-1"
                        ></img>
                        <span className="px-5">Notice period</span>
                      </div>
                      <div className="px-9 text-gray-400 text-sm font-semibold">
                        Set the minimum amount of notice that is required
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <div className="p-8 w-full ">
                      <div className="flex items-center flex-wrap w-auto mr-4 md:mr-1 lg:mr-1 relative">
                        <TextField
                          type="number"
                          min="0"
                          textStyleOverride={{ width: '87%' }}
                          value={values.sessionDuration}
                          onChangeValue={handleChange}
                          name="sessionDuration"
                          id="lname"
                          widthPartial
                          className=""
                        />
                        <select
                          className="absolute px-3 py-3 top-1  text-lg right-1 bg-gray-50"
                          value="values.sessionDurationIn"
                          name="sessionDurationIn"
                          onChange={handleChange}
                        >
                          <option value="day">Minutes</option>
                          <option value="week">Hours</option>
                          <option value="month">Days</option>
                          <option value="year">Weeks</option>
                        </select>
                      </div>
                    </div>
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

export default Configurations
