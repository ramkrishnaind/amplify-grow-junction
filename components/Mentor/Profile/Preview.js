import React from "react"
import classes from './Preview.module.css'
const Preview = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className={classes.img}
        src="../../../images/add-post-profile.png"
      />
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
          aslo an entrepreneur from Newyork, USA.
        </span>
        <span className="text-xl font-semibold underline underline-offset-4 mt-5">
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
          <img src="../../../images/Star.png" alt="" className="w-3 h-3 mr-2"></img>
          <div className="text-xs font-semibold">4.8</div>
          <div className="text-xs font-normal">/5.0 (200+Sessions)</div>
        </div>
        <span className="text-xl font-semibold underline underline-offset-4 mt-5">
          Domain Experties
        </span>
        <div className="flex flex-row mt-5">
          <button className="flex justify-center items-center bg-gray-900 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full w-1/2">
            Entrepreneurship
          </button>
          <button className="flex justify-center items-center bg-gray-900 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full w-1/2 ml-5">
            Product Management
          </button>
        </div>
        <span className="text-2xl font-semibold m-10">Services Offered</span>
        <div className="bg-gray-100 p-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 ">
        <div className="relative rounded-3xl shadow-3xl w-1/2">
          <img
            className="object-cover w-3/2"
            src="../../../images/CardRectangle.png"
            alt=""
          />
          <div className="absolute top-0 left-0 flex flex-col mt-3 ml-3 px-2 py-2 rounded-full z-10 ">
            <p className="text-2xl text-black font-semibold">1 on 1 Mock Interview</p>
            <p className="text-xl text-black font-normal">
              60 min | 30 min | 15 min sessions
            </p>
            <p className="text-base text-black font-normal mt-12">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
          <div className="absolute top-0 right-0 items-center inline-flex mt-3 mr-3 px-3 py-2 rounded-full z-10 text-sm font-medium text-white select-none">
            <button className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-6 rounded-full w-50">
              <img src="../../../images/camera.png" alt="" className="w-4 h-3"></img>
              <p className="text-sm text-black dark:text-gray-100 ml-3">
                Video session
              </p>
            </button>
          </div>
          <div className="absolute bottom-5 right-5 ">
          <button className=" absolute bottom-4 left-1/2 -translate-x-1/2  hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-50">
              <p className="text-sm text-black underline dark:text-gray-100">
                View Details
              </p>
            </button>
            <button className=" absolute  bottom-5 right-5 bg-amber-400 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-50">
              <p className="text-sm text-black  dark:text-gray-100">
                Book a session
              </p>
            </button>
          </div>
        </div>


        </div>
      </div>
      </div>


      </div>
    </div>
  )
}

export default Preview
