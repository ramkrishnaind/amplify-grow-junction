import React from 'react'

const Calldetails = () => {
  return (
    <>
      <div className="bg-gray-50 ">
      <div class="flex justify-center items-center h-screen p-4">
          <div className=" bg-white text-center mt-9 rounded-2xl shadow-lg w-full md:w-1/5 lg:w-1/5">
            <div className="flex justify-between px-8 py-4 border-b border-gray-300">
              <div className="text-xl font-semibold mt-4">Call details</div>
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

            <div className="flex flex-col justify-start items-start px-8 py-4">
              <div className="text-xl font-normal">
                What is this call about?
              </div>
              <div className="text-sm font-normal text-gray-500">
                Mock interview
              </div>
              <div className="text-xl font-normal mt-10">Email</div>
              <div className="text-sm font-normal text-gray-500">
                Mickeymya@gmail.com
              </div>
              <div className="text-xl font-normal mt-10">Phone</div>
              <div className="text-sm font-normal text-gray-500">
                +91 9886 768 786
              </div>
            </div>
             
            <div className="py-4 px-6 border-t border-gray-300 text-gray-600">
              <div className="flex justify-end">
                <button className="text-base bg-black hover:bg-amber-400 text-white font-bold py-4 px-6 border border-blue rounded">
                  Join Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calldetails
