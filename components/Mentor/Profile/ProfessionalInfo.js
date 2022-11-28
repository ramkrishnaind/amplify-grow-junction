import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import TextField from '../../../pages/ui-kit/TextField'

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
                <select
                  id="degree"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="mtech" selected>
                    M.Tech
                  </option>
                  <option value="btech">B.Tech</option>
                  <option value="msc">M.SC</option>
                  <option value="bsc">BSC</option>
                </select>
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
                <select
                  id="course"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="course1" selected>
                    Advanced Computers and integrations
                  </option>
                  <option value="course2">Course2</option>
                  <option value="course3">Course3</option>
                  <option value="course4">Course4</option>
                </select>
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
                <select
                  id="occupation"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="owner1" selected>
                    Startup owner
                  </option>
                  <option value="owner2">Startup owner2</option>
                  <option value="owner3">Startup owner3</option>
                  <option value="owner4">Startup owner4</option>
                </select>
              </div>

              <div className="px-4 mt-5">
                <label className="leading-8 text-lg font-normal mt-5">
                  Organisation (optional)
                </label>
                <TextField type="text" id="organisation" placeholder="Grow" />
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
                <select
                  id="location"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="location1" selected>
                    Bangalore
                  </option>
                  <option value="location2">Mumbai</option>
                  <option value="location3">Chennai</option>
                  <option value="location4">Pune</option>
                </select>
              </div>

              <div className="px-4 mt-5">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Position (optional)
                </label>
                <select
                  id="position"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                >
                  <option value="position1" selected>
                    Chief design officer
                  </option>
                  <option value="position2">design officer</option>
                  <option value="position3">officer</option>
                  <option value="position4">executive officer</option>
                </select>
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
          <div className="bg-gray-50">
            <div className="flex justify-start mt-10 px-8 md:justify-end lg:justify-end">
              <button className="text-base bg-black hover:bg-blue-700 text-white font-bold py-4 px-6 border border-blue rounded">
                Save Changes 3
              </button>
            </div>

            <div className="flex justify-center mt-20 md:justify-end lg:justify-end py-2 px-6">
              <div className="flex justify-center items-center text-base text-semibold border-2 rounded-md bg-white h-8 w-1/2 md:w-1/2 lg:w-1/2">
                Preview
              </div>
            </div>

            <div className="flex justify-center px-6 md:justify-end lg:justify-end">
              <div className="flex justify-center items-center text-lg border-2 rounded-md bg-gray-200 h-96 w-1/2 md:w-1/2 lg:w-1/2">
                {' '}
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  )
}

export default ProfessionalInfo