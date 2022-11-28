import React, { useState } from 'react'
import { Formik } from 'formik'
import TextField from '../../../pages/ui-kit/TextField'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import classes from './ProfileInfo.module.css'
import ProgressBar from '../../Utilities/ProgressBar'
import Preview from './Preview'
const ProfileInfo = () => {
  const initialState = {}
  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  )

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialState}
        //onSubmit={}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={true}
      >
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-50 basis-3/5">
            <div className="flex flex-col tracking-wide text-black ml-4 bg-gray-50 w-4/5 md:w-auto lg:w-auto">
              <div className="m-10 flex flex-row">
                <div className="flex flex-row">
                  <div className=" bg-gray-300 rounded-full">
                    <img
                      src="../../../images/add-post-profile.png"
                      alt=""
                      className={`${classes['img-profile']}`}
                    />
                  </div>
                </div>
                <div className=" mt-16 px-8 py-2">
                  <button className="flex justify-center items-center bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full min-w-40">
                    <img
                      src="../../../assets/icon/plus.png"
                      alt=""
                      className="w-7 h-7"
                    />
                    <span className="ml-3 text-lg">Add image</span>
                  </button>
                  <p className="w-auto ml-3 mt-3 text-lg tracking-wide">
                    Recommended 256x256 px image
                  </p>
                </div>
              </div>
              <div className=" mb-16 ">
                <ProgressBar progressPercentage={40} />
              </div>
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
              <h2 className="p-4 leading-8 text-4xl font-semibold">
                About Yourself
              </h2>

              <div className="px-4">
                <label className="leading-8 text-lg font-normal mt-5">
                  Growjunction URL
                </label>

                <div className="flex flex-wrap items-start w-full relative">
                  <div class="focus-outline flex flex-row rounded-md border border-gray-300 px-5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 pr-1">
                    <label className="text-black py-2 flex-1 text-right pr-0  text-xl font-normal">
                      Growjunction.io/
                    </label>
                  </div>
                  <TextField
                    type="url"
                    onChangeValue={() => {}}
                    style={{ marginBottom: 0, paddingLeft: 4, paddingLeft: 0 }}
                    id="url"
                    placeholder="the_michael_scott"
                    textStyleOverride={{ marginBottom: 0, paddingLeft: 0 }}
                  />
                </div>
              </div>

              <div className="flex flex-row font-normal">
                <div className="px-4 text-lg w-1/2">
                  <label className="leading-8 text-lg font-normal mt-5">
                    First Name
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <TextField type="text" id="fname" placeholder="Michel" />
                  </div>
                </div>
                <div className="px-4 text-lg w-1/2">
                  <label className="leading-8 text-lg font-normal mt-5">
                    Last Name
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <TextField type="text" id="lname" placeholder="Scott" />
                  </div>
                </div>
              </div>
              <div className="px-4">
                <label className="leading-8 text-lg font-normal mt-5">
                  Write a short description
                </label>
                <div className="flex flex-wrap items-stretch w-full relative">
                  <TextField
                    type="text"
                    id="description"
                    placeholder="Founder and CEO at Twitter | Business owner | Entrepneur"
                  />
                </div>
                <span className="flex justify-start text-xs -mt-4">
                  Short description in 20 characters or less
                </span>
              </div>

              <div className="px-4 mt-10">
                <label className="leading-8 text-lg font-normal mt-5">
                  Tell us about yourself
                </label>
                <div className="flex flex-wrap items-stretch w-full relative">
                  <textarea></textarea>
                </div>
                <span className="flex justify-start text-xs -mt-4">
                  Describe yourself in 500 characters or less
                </span>
              </div>

              <h2 className="p-4 leading-8 text-4xl font-semibold mt-10 mb-5">
                Social Links
              </h2>
              <div className="px-4">
                <label className="leading-8 text-lg font-normal mt-5">
                  LinkedIn URL
                </label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <TextField
                    type="url"
                    id="linkedurl"
                    placeholder="Enter URL here"
                  />
                </div>
              </div>

              <div className="px-4">
                <label className="leading-8 text-lg font-normal mt-5">
                  Personal Website URL (optional)
                </label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <TextField
                    type="url"
                    id="personalurl"
                    placeholder="Enter URL here"
                  />
                </div>
              </div>

              <div className="px-4">
                <label className="leading-8 text-lg font-normal mt-5">
                  Instagram URL (optional)
                </label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <TextField
                    type="url"
                    id="instagram"
                    placeholder="Enter URL here"
                  />
                </div>
              </div>

              <div className="px-4">
                <label className="leading-8 text-lg font-normal mt-5">
                  Other URL (optional)
                </label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <TextField
                    type="url"
                    id="other"
                    placeholder="Enter URL here"
                  />
                </div>
              </div>

              <h2 className="p-4 leading-8 text-4xl font-semibold mt-10 mb-5">
                Other details
              </h2>

              <div className="px-4">
                <div>
                  <label className="leading-8 text-lg font-normal mt-5">
                    Select Currency
                  </label>
                </div>
                {/* todo currency*/}
                <div className="inline-block relative w-80">
                  <select
                    id="currency"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="₹" selected>
                      ₹
                    </option>
                    <option value="$">$</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <p>
                  Want to change currency? Contact us at support@growjunction.io
                </p>
              </div>

              {/* TimeZone */}

              <div className="px-4 mt-5">
                <div>
                  <label className="leading-8 text-lg font-normal mt-5">
                    TimeZone
                  </label>
                </div>
                <div className="inline-block relative w-full">
                  {/* <select 
                id="timezone"
                className="h-12 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>GMT (+05:30) Mumbai, New Delhi</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div> */}
                  <div className="select-wrapper w-full">
                    <TimezoneSelect
                      value={timeZone}
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
            </div>
          </div>

          {/* 02 */}
          <div className="bg-gray-50 basis-2/5">
            <div className="flex justify-start mt-10 px-8 md:justify-end lg:justify-end">
              <button className="text-base bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 border border-blue rounded">
                Save Changes  
              </button>
            </div>

            <div className="flex justify-center mt-20 py-2 px-6">
              <div className="flex justify-center items-center text-base text-semibold border-2 rounded-md bg-white h-8 w-1/2 md:w-1/2 lg:w-1/2">
                Preview
              </div>
            </div>

            <div className="flex justify-center md:justify-end lg:justify-end">
              <div className="flex justify-center items-center text-lg border-2 rounded-md bg-gray-100 h-auto w-auto">
                <Preview/>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  )
}

export default ProfileInfo
