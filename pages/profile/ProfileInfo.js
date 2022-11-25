import React, {useState} from 'react'
import { Formik } from 'formik'
import Image from 'next/image'
import { color } from '../../public/theme/Color'
import Button from '../ui-kit/Button'
import DropDown from '../ui-kit/DropDown'
import TextField from '../ui-kit/TextField'
import useWindowDimensions from '../../public/utils/useWindowDimensions'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'


const ProfileInfo = () => {
  const initialState = {}
  const [tz, setTz] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)

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
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50">
            <div className="flex flex-col tracking-wide text-black ml-4 bg-gray-50 w-4/5 md:w-auto lg:w-auto">
              <div className="m-10 flex flex-row">
                <div className="flex flex-row w-2/3 md:w-1/6 lg:w-1/6">
                  <div className="w-36 h-36 bg-gray-300 rounded-full">
                    <img
                      src="../../../images/add-post-profile.png"
                      alt=""
                      className="w-36 h-36"
                    />
                  </div>
                </div>
                <div className=" mt-16 px-8 py-2">
                  <button className="flex justify-center items-center bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full w-40">
                    <img
                      src="../../../assets/icon/plus.png"
                      alt=""
                      className="w-7 h-7"
                    />
                    <span className="ml-3 text-sm">Add image</span>
                  </button>
                  <p className="w-auto ml-3 mt-3 tex-xs tracking-wide">
                    Recommended 256x256 px image
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-4 p-6 border-2 rounded-md bg-white">
                <div className="text-sm">40% of profile completed</div>
                <div className="flex w-1/2">
                  <div className="w-2/5 bg-gray-600 h-2 rounded-l-lg"></div>
                  <div className="w-3/5 bg-gray-300 h-2 rounded-r-lg"></div>
                </div>
                <p className="text-sm">
                  Complete 100% of the profile to get a better reach
                </p>
              </div>
              <div className="p-4 leading-8 text-2xl font-semibold">
                About Yourself
              </div>

              <div className="px-4">
                <label className="leading-8 text-sm font-normal mt-5">
                  Growjunction URL
                </label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <TextField
                    type="url"
                    id="url"
                    placeholder="the_michael_scott"
                  />
                </div>
              </div>

              <div className="flex flex-row font-normal">
                <div className="px-4 text-sm w-1/2">
                  <label className="leading-8 text-sm font-normal mt-5">
                    First Name
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <TextField type="text" id="fname" placeholder="Michel" />
                  </div>
                </div>
                <div className="px-4 text-sm w-1/2">
                  <label className="leading-8 text-sm font-normal mt-5">
                    Last Name
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <TextField type="text" id="lname" placeholder="Scott" />
                  </div>
                </div>
              </div>
              <div className="px-4">
                <label className="leading-8 text-sm font-normal mt-5">
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
                <label className="leading-8 text-sm font-normal mt-5">
                  Tell us about yourself
                </label>
                <div className="flex flex-wrap items-stretch w-full relative">
                  <TextField
                    type="text"
                    id="about"
                    placeholder=" Hey this is michael, co-founder and executive officer at twitter. I’m here to offer my services , mentor young entrepreneurs out there.  40 out of 500 Characters"
                  />
                </div>
                <span className="flex justify-start text-xs -mt-4">
                  Describe yourself in 500 characters or less
                </span>
              </div>

              <div className="p-4 leading-8 text-2xl font-semibold mt-10 mb-5">
                Social Links
              </div>
              <div className="px-4">
                <label className="leading-8 text-sm font-normal mt-5">
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
                <label className="leading-8 text-sm font-normal mt-5">
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
                <label className="leading-8 text-sm font-normal mt-5">
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
                <label className="leading-8 text-sm font-normal mt-5">
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

              <div className="p-4 leading-8 text-2xl font-semibold mt-10 mb-5">
                Other details
              </div>

              <div className="px-4">
                <div>
                  <label className="leading-8 text-sm font-normal mt-5">
                    Select Currency
                  </label>
                </div>
                {/* todo currency*/}
                <div className="inline-block relative w-80">
                  <select
                    id="currency"
                    className=" h-12 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="Rs." selected>Rs.</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
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
                  <label className="leading-8 text-sm font-normal mt-5">
                    TimeZone
                  </label>
                </div>
                <div className="inline-block relative w-80">
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
                  <TimezoneSelect
                    value={tz}
                    onChange={setTz}
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

          {/* 02 */}
          <div className="bg-gray-50">
            <div className="flex justify-start mt-10 px-8 md:justify-end lg:justify-end">
              <button className="text-base bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 border border-blue rounded">
                Save Changes
              </button>
            </div>

            <div className="flex justify-center mt-20 md:justify-end lg:justify-end py-2 px-6">
              <div className="flex justify-center items-center text-base text-semibold border-2 rounded-md bg-white h-8 w-1/2 md:w-1/2 lg:w-1/2">
                Preview
              </div>
            </div>

            <div className="flex justify-center px-6 md:justify-end lg:justify-end">
              <div className="flex justify-center items-center text-sm border-2 rounded-md bg-gray-200 h-96 w-1/2 md:w-1/2 lg:w-1/2">
                {' '}
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  )
}

export default ProfileInfo
