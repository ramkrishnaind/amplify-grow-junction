import React from 'react'
import classes from './Preview.module.css'
const Preview = () => {
  return (
    <div className="flex flex-col items-center">
      <img className={classes.img} src="../../../images/add-post-profile.png" />
      <div className="flex flex-col items-center">
        <span className="text-4xl font-semibold mt-5">Michel Scott</span>
        <span className="text-xl font-normal mt-">
          Founder and CEO at Twitter
        </span>
        <div className="flex flex-row mt-5">
          <img src="../../../images/linkedin.png" alt="" className="px-4" />
          <img src="../../../images/instagram.png" alt="" className="px-4" />
          <img src="../../../images/www.png" alt="" className="px-4" />
        </div>
        <span className="text-2xl font-semibold mt-5">
          Michael scott is a Co-Founder CEO at Twitter,
        </span>

        <span className="text-2xl font-semibold mt-2">
          also an entrepreneur from Newyork, USA.
        </span>
        <span className="text-xs font-semibold underline underline-offset-4 mt-5">
          About Michael
        </span>
        <span className="text-xs font-normal mt-5">
          Hey this is michael, co-founder and executive officer at twitter. I’m
          here to offer my services,
        </span>
        <span className="text-xs font-normal mt-2">
          mentor young entrepreneurs out there. Hey this is michael, co-founder
          and executive officer at
        </span>
        <span className="text-xs font-normal mt-2">
          twitter. I’m here to offer my services , mentor young entrepreneurs
          out there.
        </span>
        <div className="flex flex-row mt-5">
          <img
            src="../../../images/Star.png"
            alt=""
            className="w-3 h-3 mr-2"
          ></img>
          <div className="text-xs font-semibold">4.8</div>
          <div className="text-xs font-normal">/5.0 (200+Sessions)</div>
        </div>
        <span className="text-xs font-semibold underline underline-offset-4 mt-5">
          Domain Experties
        </span>
        <div className="flex flex-row mt-5">
          <button className="flex justify-center items-center bg-black hover:bg-blue-700 text-sm  p-2 text-white rounded-full w-auto">
            Entrepreneurship
          </button>
          <button className="flex justify-center items-center bg-black hover:bg-blue-700 text-sm p-2 text-white rounded-full w-auto ml-5">
            Product Management
          </button>
        </div>
        <span className="text-2xl font-semibold m-10">Services Offered</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full p-4 bg-gray-100">
          <div className="relative overflow-hidden w-auto  rounded-xl shadow-xl">
            <img
              src="../../../images/CardRectangle.png"
              className="object-cover w-full"
            />
            <span className="absolute top-0 left-0">
              <p className="text-sm text-black font-semibold mt-3 p-1">
                1 on 1 Mock Interview
              </p>
              <p className="text-sm text-black font-normal p-2">
                60 min | 30 min | 15 min sessions
              </p>
              <p className="text-xs text-black font-normal mt-2 p-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </span>

            <div className="absolute top-0 right-0 items-center inline-flex  p-2 rounded-full z-10 text-sm font-medium text-white select-none">
              <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                <img
                  src="../../../images/camera.png"
                  alt=""
                  className="w-4 h-3"
                ></img>
                <p className="text-sm text-black dark:text-gray-100 ml-3">
                  Video session
                </p>
              </button>
            </div>
            
            <div className="flex flex-row justify-end bg-gray-200 bg-opacity-25 md:bg-opacity-50">
              <button className="inset-x-0 bottom-0 mr-2">
                <p className="text-sm text-black underline dark:text-gray-100">
                  View Details
                </p>
              </button>
              <button className="bottom-0 right-0 bg-amber-400 hover:bg-blue-700 text-white p-2 rounded-full m-2">
                <p className="text-xs text-black font-bold">Book a session</p>
              </button>
            </div>
          </div>

          {/* repeat           */}

          <div className="relative overflow-hidden w-full  rounded-xl shadow-xl">
            <img
              src="../../../images/CardRectangle.png"
              className="object-cover w-full"
            />
            <span className="absolute top-0 left-0">
              <p className="text-sm text-black font-semibold mt-3 p-1">
                1 on 1 Mock Interview
              </p>
              <p className="text-sm text-black font-normal p-2">
                60 min | 30 min | 15 min sessions
              </p>
              <p className="text-xs text-black font-normal mt-2 p-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </span>

            <div className="absolute top-0 right-0 items-center inline-flex  p-2 rounded-full z-10 text-sm font-medium text-white select-none">
              <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                <img
                  src="../../../images/camera.png"
                  alt=""
                  className="w-4 h-3"
                ></img>
                <p className="text-sm text-black dark:text-gray-100 ml-3">
                  Video session
                </p>
              </button>
            </div>
            <div className="flex flex-row justify-end bg-gray-200 bg-opacity-25 md:bg-opacity-50">
              <button className="inset-x-0 bottom-0 mr-2">
                <p className="text-sm text-black underline dark:text-gray-100">
                  View Details
                </p>
              </button>
              <button className="bottom-0 right-0 bg-amber-400 hover:bg-blue-700 text-white p-2 rounded-full m-2">
                <p className="text-xs text-black font-bold">Book a session</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
