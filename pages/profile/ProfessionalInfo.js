import React from 'react'
import Image from 'next/image'

const ProfessionalInfo = () => {
  return (
    <>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50">
            <div className="flex flex-col tracking-wide text-black ml-4 bg-gray-50 w-3/4 md:w-auto lg:w-auto">
              {/* Eductional info */}
              <div className="mt-10 p-4 leading-8 text-2xl font-semibold">
                Educational Info
              </div>

              <div className="px-4 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Degree (optional)
                </label>
                <select
                  id="degree"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <label className="leading-8 text-sm font-normal mt-5">
                  College / University (optional)
                </label>
                <input
                  type="text"
                  id="college"
                  className="h-16 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Gandhi University of applied sciences"
                />
              </div>

              <div className="px-4 mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Course
                </label>
                <select
                  id="course"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Graduation year
                </label>
                <select
                  id="graduationyear"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="2015" selected>
                    2015
                  </option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                </select>
              </div>
              {/* Professional info */}

              <div className="mt-10 p-4 leading-8 text-2xl font-semibold">
                Professional Info
              </div>

              <div className="px-4 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Occupation (optional)
                </label>
                <select
                  id="occupation"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <label className="leading-8 text-sm font-normal mt-5">
                  Organisation (optional)
                </label>
                <input
                  type="text"
                  id="organisation"
                  className="h-16 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Grow"
                />
              </div>

              <div className="px-4 mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Location (optional)
                </label>
                <select
                  id="location"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Position (optional)
                </label>
                <select
                  id="position"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Experience (optional)
                </label>
                <div className="flex flex-row font-normal">
                  <div className=" text-sm w-1/2">
                    <label className="leading-8 text-sm font-normal mt-5">
                      Years
                    </label>
                    <select
                      id="expyears"
                      className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="11" selected>
                        01
                      </option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                    </select>
                  </div>
                  <div className="ml-2 text-sm w-1/2">
                    <label className="leading-8 text-sm font-normal mt-5">
                      Months
                    </label>
                    <select
                      id="expmonths"
                      className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="11" selected>
                        01
                      </option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
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
      </form>
    </>
  )
}

export default ProfessionalInfo
