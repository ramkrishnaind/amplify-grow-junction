import React from "react";

const StudentProfessionalDetails = () => {
  return (
    <>
      <form>
        <div className="mt-20 px-4">
          <div className="flex w-1/3">
            {/* 01*/}
            <div className="flex justify-start w-full px-4">
              <div className="flex flex-row py-3">
                <img
                  src="/images/leftArrow.png"
                  alt=""
                  className="w-4 h-4 mt-1"
                ></img>
                <span className="text-base tex-black ml-4">Go back</span>
              </div>

              {/* 01*/}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center mt-5 ml-20 px-20">
          <img src="/images/studentPD1.png" alt="" className="w-10 h-10"></img>
          <img
            src="/images/studentProfessionalDetail.png"
            alt=""
            className="w-14"
          ></img>
          <img src="/images/studentPD2.png" alt="" className="w-14 h-14"></img>
          <img
            src="/images/studentProfessionalDetail.png"
            alt=""
            className="w-14"
          ></img>
          <img src="/images/studentPD3.png" alt="" className="w-10 h-10"></img>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-10 mt-10">
            <div className="flex flex-col tracking-wide text-black ml-4 w-5/6 md:w-auto lg:w-auto">
              <div className="p-4 leading-8 text-2xl font-semibold">
                Professional Details
              </div>
              <p className="p-4 text-xs mt-2">
              Add some basic details to personalise the experience
            </p>
              <div className="px-4 mt-5">
                <label className="leading-8 text-sm font-normal mt-5">
                  Your Recent college
                </label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <input
                    type="text"
                    id="name"
                    className="flex-shrink flex-grow leading-normal w-px flex-1 border-2  rounded-lg h-16 px-4 relative text-sm md:h-16 lg:h-16"
                    placeholder="Enter college name"
                  />
                </div>
              </div>

              <div className="px-4 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Choose your degree
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
                  Current Employer (optional)
                </label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <input
                    type="text"
                    id="cemployer"
                    className="flex-shrink flex-grow leading-normal w-px flex-1 border-2  rounded-lg px-4 relative text-sm h-16 md:h-16 lg:h-16"
                    placeholder="Enter current employer"
                  />
                </div>
              </div>

              <div className="px-4">
                <label className="leading-8 text-sm font-normal mt-5">
                  Your role (optional)
                </label>
                <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <input
                    type="text"
                    id="role"
                    className="flex-shrink flex-grow leading-normal w-px flex-1 border-2  rounded-lg px-4 relative text-sm h-16 md:h-16 lg:h-16"
                    placeholder="Enter your role"
                  />
                </div>
              </div>

              <div className="px-4 mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Experience in years (optional)
                </label>
                <select
                  id="expyear"
                  className="h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="01" selected>
                    01
                  </option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                </select>
              </div>

              <div className="flex flex-row justify-center mt-20  ">
                <button className="flex justify-center items-center bg-black hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-40">
                  <span className="ml-3 text-sm">Previous</span>
                </button>

                <button className="flex justify-center items-center ml-10 bg-amber-500 hover:bg-blue-700 text-white font-bold  py-2 px-6 rounded-full w-40">
                  <span className="ml-3 text-sm">Continue</span>
                </button>
              </div>
            </div>
          </div>

          {/* 02 */}
        </div>
      </form>
    </>
  );
};

export default StudentProfessionalDetails;
