import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import TextField from '../../../pages/ui-kit/TextField'
import Preview from './Preview'
const ProfessionalInfo = () => {
  const [years, setYears] = useState([])
  const initialState = {}
  useEffect(() => {
    const d = new Date()
    const tmpYears = []
    let year = d.getFullYear()
    for (let i = year; i >= year - 50; i--) {
      tmpYears.push(i)
    }
    setYears(tmpYears)
  }, [])

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
            <div className="flex flex-col tracking-wide text-black ml-4 bg-gray-50 w-3/4 md:w-auto lg:w-auto">
              {/* Eductional info */}
              <div className="mt-10 p-4 leading-8 text-2xl font-semibold mb-3">
                Educational Info
              </div>

              <div className="px-4 ">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Degree (optional)
                </label>
                <TextField type="text" id="degree" placeholder="Degree" />
              </div>

              <div className="px-4 mt-5">
                <label className="leading-8 text-lg font-normal mt-5">
                  College / University (optional)
                </label>
                <TextField
                  type="text"
                  id="college"
                  placeholder="Gandhi University of applied sciences"
                />
                {/* <input
                  type="text"
                  id="college"
                  className="h-16 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Gandhi University of applied sciences"
                /> */}
              </div>

              <div className="px-4 mt-1">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Course
                </label>
                <TextField type="text" id="course" placeholder="Course" />
              </div>

              <div className="px-4 mt-5">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Graduation year
                </label>
                <select
                  id="graduationyear"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="" selected>
                    Select
                  </option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              {/* Professional info */}

              <div className="mt-10 p-4 leading-8 text-2xl font-semibold">
                Professional Info
              </div>

              <div className="px-4 ">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Occupation (optional)
                </label>
                <TextField
                  type="text"
                  id="occupation"
                  placeholder="Occupation"
                />
              </div>

              <div className="px-4 mt-5">
                <label className="leading-8 text-lg font-normal mt-5">
                  Organisation (optional)
                </label>
                <TextField
                  type="text"
                  id="organisation"
                  placeholder="Organization"
                />
                {/* <input
                  type="text"
                  id="organisation"
                  className="h-16 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Grow"
                /> */}
              </div>

              <div className="px-4 mt-1">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Location (optional)
                </label>
                <TextField type="text" id="location" placeholder="Location" />
              </div>

              <div className="px-4 mt-5">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Position (optional)
                </label>
                <TextField type="text" id="position" placeholder="Position" />
              </div>

              <div className="px-4 mt-5">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Experience (optional)
                </label>
                <div className="flex flex-row font-normal">
                  <div className=" text-lg w-1/2">
                    <label className="leading-8 text-lg font-normal mt-5">
                      Years
                    </label>
                    <select
                      id="expyears"
                      className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    >
                      {Array.from({ length: 51 }, (x, i) => i).map((i) => (
                        <option value={String(i).padStart(2, '0')}>
                          {String(i).padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="ml-2 text-lg w-1/2">
                    <label className="leading-8 text-lg font-normal mt-5">
                      Months
                    </label>
                    <select
                      id="expmonths"
                      className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    >
                      {Array.from({ length: 12 }, (x, i) => i).map((i) => (
                        <option value={String(i + 1).padStart(2, '0')}>
                          {String(i + 1).padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="bg-gray-50 basis-2/5 ">
            <div className="flex justify-start mt-10 px-8 md:justify-end lg:justify-end mb-32">
              <button className="text-base bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 border border-blue rounded">
                Save Changes
              </button>
            </div>

            <div className="flex justify-center md:justify-end lg:justify-end">
              <div className="flex justify-center items-center text-lg border-2 rounded-md  border-white h-auto w-auto">
                <Preview />
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  )
}

export default ProfessionalInfo
