import React from 'react'

const Joincall = () => {
  return (
    <>
      <div className="bg-gray-50 ">
        <div class="flex justify-center items-center h-screen p-4">
          <div className=" bg-white text-center mt-9 rounded-2xl shadow-lg w-full md:w-1/4 lg:w-1/4">
            <div className="flex justify-between px-8 py-4 border-b border-gray-300">
              <div className="text-2xl font-semibold mt-4">Join Call</div>
              <div>
                <button className="">
                  <img
                    src="../../../assets/icon/cross.png"
                    alt=""
                    className="w-4 h-4 mr-2"
                  ></img>
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center px-4 py-2">
              <img
                src="../../../images/student.png"
                alt=""
                className="w-20 h-20 mt-2"
              />
              <div className="text-xl font-semibold py-4">Call with Mickey</div>
              <div className="flex text-sm font-normal text-gray-700">
                For 1 on 1 mock interview
              </div>
              <div className="flex flex-row justify-center items-center text-xl font-normal p-4">
                <button>
                <img
                  src="../../../assets/icon/date.png"
                  alt=""
                  className="w-15 h-15 px-4"
                />
                </button>
                <span className="text-sm font-semibold text-blue-600 text-normal">
                  Wednesday, 05 November 5:30 pm
                </span>
              </div>
            </div>

            <div className="py-4 px-6 border-t border-gray-300 text-gray-600">
              <div className="flex justify-evenly">
                <button className="text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-4 px-6 border border-black rounded">
                  View Details
                </button>
                <button className="text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-4 px-6 border border-black rounded">
                  Launch Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Joincall
