import React from 'react'

const Completed = () => {
  return (
    <>
      <div className="bg-gray-50 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
          <div className="flex justify-center align-center bg-gray-50 mt-10">
            <div className=" bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-auto  md:w-5/6 lg:w-5/6">
              <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                <div className="flex justify-between p-2">
                  <img
                    src="../../../assets/icon/clock.png"
                    alt=""
                    className="w-3 h-3 mt-2"
                  ></img>
                  <span className="text-base font-normal md:text-xl lg:text-xl">
                    Today 05:00 - 05:30 pm (30min)
                  </span>
                </div>

                <div>
                  <div className="group relative text-base">
                    <button className="py-4 px-4 rounded inline-flex items-center group">
                      <img
                        src="../../../assets/icon/menu.png"
                        alt=""
                        className=""
                      ></img>
                    </button>

                    {/* menu list */}
                    <ul className="rounded absolute hidden text-black group-hover:block w-30 border-2 border-gray-50 shadow-md">
                      <li className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer border-b-2 border-gray-300">
                        Reschedule
                      </li>
                      <li className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer">
                        Call details
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-start text-black text-2xl font-semibold p-6">
                  Mickey
                </div>
                <div className="flex justify-start text-black text-xl font-normal px-6 mb-10">
                  1 on 1 mock interview
                </div>
              </div>
              <div className="flex flex-col justify-between py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row lg:flex-row">
              <div className="flex justify-center w-full  mb-2 md:w-1/4 lg:w-1/4">
                  <button className="flex justify-center items-center bg-green-400 border-2 border-green-400 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full">
                    <span className="text-sm font-semibold py-3">
                      Completed
                    </span>
                  </button>
                </div>
                <div className="flex justify-end w-full mb-2 md:w-1/2 lg:w-1/2">
                  <button className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full">
                    <span className="text-sm font-semibold py-3">
                      Call details
                    </span>
                  </button>

                  <button className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full w-full">
                    <span className="text-sm font-semibold py-3">
                      Join call
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* 2nd */}
          <div className="flex justify-center align-center bg-gray-50 mt-10">
            <div className=" bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-auto md:w-5/6 lg:w-5/6">
              <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                <div className="flex justify-between p-2">
                  <img
                    src="../../../assets/icon/clock.png"
                    alt=""
                    className="w-3 h-3 mt-2"
                  ></img>
                  <span className="text-base font-normal md:text-xl lg:text-xl">
                    Today 05:00 - 05:30 pm (30min)
                  </span>
                </div>

                <div>
                  <div className="group relative text-base">
                    <button className="py-4 px-4 rounded inline-flex items-center group">
                      <img
                        src="../../../assets/icon/menu.png"
                        alt=""
                        className=""
                      ></img>
                    </button>

                    {/* menu list */}
                    <ul className="rounded absolute hidden text-black group-hover:block w-30 border-2 border-gray-50 shadow-md">
                      <li className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer border-b-2 border-gray-300">
                        Reschedule
                      </li>
                      <li className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer">
                        Call details
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-start text-black text-2xl font-semibold p-6">
                  Mickey
                </div>
                <div className="flex justify-start text-black text-xl font-normal px-6 mb-10">
                  1 on 1 mock interview
                </div>
              </div>
              <div className="flex flex-col justify-between py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row lg:flex-row">
              <div className="flex justify-center w-full mb-2 md:w-1/4 lg:w-1/4">
                  <button className="flex justify-center items-center bg-red-400 border-2 border-red-400 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full">
                    <span className="text-sm font-semibold py-3">
                      Cancelled
                    </span>
                  </button>
                </div>
                <div className="flex justify-end w-full mb-2 md:w-1/2 lg:w-1/2">
                  <button className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full">
                    <span className="text-sm font-semibold py-3">
                      Call details
                    </span>
                  </button>

                  <button className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full w-full">
                    <span className="text-sm font-semibold py-3">
                      Join call
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd */}

          <div className="flex justify-center align-center bg-gray-50 mt-10">
            <div className=" bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-auto  md:w-5/6 lg:w-5/6">
              <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                <div className="flex justify-between p-2">
                  <img
                    src="../../../assets/icon/clock.png"
                    alt=""
                    className="w-3 h-3 mt-2"
                  ></img>
                  <span className="text-base font-normal md:text-xl lg:text-xl">
                    Today 05:00 - 05:30 pm (30min)
                  </span>
                </div>

                <div>
                  <div className="group relative text-base">
                    <button className="py-4 px-4 rounded inline-flex items-center group">
                      <img
                        src="../../../assets/icon/menu.png"
                        alt=""
                        className=""
                      ></img>
                    </button>

                    {/* menu list */}
                    <ul className="rounded absolute hidden text-black group-hover:block w-30 border-2 border-gray-50 shadow-md">
                      <li className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer border-b-2 border-gray-300">
                        Reschedule
                      </li>
                      <li className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer">
                        Call details
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-start text-black text-2xl font-semibold p-6">
                  Mickey
                </div>
                <div className="flex justify-start text-black text-xl font-normal px-6 mb-10">
                  1 on 1 mock interview
                </div>
              </div>
              <div className="flex flex-col justify-between py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row lg:flex-row">
              <div className="flex justify-center w-full mb-2 md:w-1/4 lg:w-1/4">
                  <button className="flex justify-center items-center bg-red-400 border-2 border-red-400 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full">
                    <span className="text-sm font-semibold py-3">
                      Cancelled
                    </span>
                  </button>
                </div>
                <div className="flex justify-end w-full mb-2 md:w-1/2 lg:w-1/2">
                  <button className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full">
                    <span className="text-sm font-semibold py-3">
                      Call details
                    </span>
                  </button>

                  <button className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full w-full">
                    <span className="text-sm font-semibold py-3">
                      Join call
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4th */}
          <div className="flex justify-center align-center bg-gray-50 mt-10">
            <div className=" bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-auto  md:w-5/6 lg:w-5/6">
              <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                <div className="flex justify-between p-2">
                  <img
                    src="../../../assets/icon/clock.png"
                    alt=""
                    className="w-3 h-3 mt-2"
                  ></img>
                  <span className="text-base font-normal md:text-xl lg:text-xl">
                    Today 05:00 - 05:30 pm (30min)
                  </span>
                </div>

                <div>
                  <div className="group relative text-base">
                    <button className="py-4 px-4 rounded inline-flex items-center group">
                      <img
                        src="../../../assets/icon/menu.png"
                        alt=""
                        className=""
                      ></img>
                    </button>

                    {/* menu list */}
                    <ul className="rounded absolute hidden text-black group-hover:block w-30 border-2 border-gray-50 shadow-md">
                      <li className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer border-b-2 border-gray-300">
                        Reschedule
                      </li>
                      <li className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer">
                        Call details
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-start text-black text-2xl font-semibold p-6">
                  Mickey
                </div>
                <div className="flex justify-start text-black text-xl font-normal px-6 mb-10">
                  1 on 1 mock interview
                </div>
              </div>
              <div className="flex flex-col justify-between py-4 px-6 border-t border-gray-300 text-gray-600 md:flex-row lg:flex-row">
              <div className="flex justify-center w-full mb-2 md:w-1/4 lg:w-1/4">
                  <button className="flex justify-center items-center bg-green-400 border-2 border-green-400 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full">
                    <span className="text-sm font-semibold py-3">
                      Completed
                    </span>
                  </button>
                </div>
                <div className="flex justify-end w-full mb-2 md:w-1/2 lg:w-1/2">
                  <button className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full">
                    <span className="text-sm font-semibold py-3">
                      Call details
                    </span>
                  </button>

                  <button className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full w-full">
                    <span className="text-sm font-semibold py-3">
                      Join call
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* outer */}
      </div>
    </>
  )
}

export default Completed
