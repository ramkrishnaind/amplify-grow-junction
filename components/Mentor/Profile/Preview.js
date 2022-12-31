import React, { useState, useEffect } from 'react'
import classes from './Preview.module.css'
import { API, Storage, graphqlOperation } from 'aws-amplify'
import { listMentorRegisters } from '../../../src/graphql/queries'
import { getLoggedinUserEmail } from '../../../utilities/user'

const Preview = ({ showServices }) => {
  const [image, setImage] = useState('')
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [url, setUrl] = useState()
  const [shortDescription, setShortDescription] = useState()
  const [aboutYourself, setAboutYourself] = useState()
  const [occupation, setOccupation] = useState()
  const [organisation, setOrganisation] = useState()
  const [linkedin, setLinkedin] = useState()
  const [instagram, setInstagram] = useState()
  const [personalurl, setPersonalurl] = useState()

  const getUser = async () => {
    // debugger
    const usrName = getLoggedinUserEmail()
    console.log('username - ', usrName)
    const results = await API.graphql(
      graphqlOperation(listMentorRegisters, {
        filter: { username: { contains: usrName } },
      }),
    )
    if (results.data.listMentorRegisters.items.length > 0) {
      const data = { ...results.data.listMentorRegisters.items[0] }
      // debugger
      if (data.profile_image) {
        const img = await Storage.get(data.profile_image)
        console.log('image - ', img)
        setImage(img)
      }
      // debugger
      setFirstName(data.about_yourself?.first_name)
      setLastName(data.about_yourself?.last_name)
      setShortDescription(data.about_yourself?.short_description)
      setAboutYourself(data.about_yourself?.about_yourself)
      setOccupation(data.Professionalinfo?.occupation)
      setOrganisation(data.Professionalinfo?.organization)
      setLinkedin(data.SocialUrl?.linkedin_url)
      setInstagram(data.SocialUrl?.instagram_url)
      setPersonalurl(data.SocialUrl?.personal_web_url)
      setUrl(data.about_yourself?.grow_junction_url || '')
    } else {
      const results = await API.graphql(
        graphqlOperation(listUserInfos, {
          filter: { username: { contains: usrName } },
        }),
      )
      if (results.data.listUserInfos.items.length > 0) {
        // debugger
        const data = { ...results.data.listUserInfos.items[0] }
        if (data.profile_image) {
          // const img = await Storage.get(data.profile_image)
          setImage(data.profile_image)
        }
      }
    }
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <div className="flex flex-col items-center bg-white ">
      <div className="w-full">
        <div className="flex justify-center items-center text-base text-semibold border-2 rounded-md bg-white h-14 mb-2 w-full">
          Preview
        </div>
      </div>
      <div className="p-5 items-center flex flex-col">
      <div
          className={`${classes['persona']} bg-gray-300 rounded-full flex justify-center`}
        >
          {
            image ? (
              <img
                src={image}
                alt=""
                className={`${classes['persona']} rounded-full`}
              />
            ) : null
          }
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold mt-5 text-center">
            {firstName} {lastName}
          </span>
          <span className="text-xl font-normal text-center">
            {occupation} {organisation}
          </span>
          <div className="flex flex-row mt-5">
            <img src="../../../images/linkedin.png" alt="" className="px-4" />
            <img src="../../../images/instagram.png" alt="" className="px-4" />
            <img src="../../../images/www.png" alt="" className="px-4" />
          </div>
          <span className="text-2xl font-semibold mt-5  text-center">
            {shortDescription}
          </span>

          <span className="text-2xl font-semibold mt-2  text-center">
            {/* also an entrepreneur from Newyork, USA. */}
          </span>
          <span className="text-xs font-semibold underline underline-offset-4 mt-5  text-center">
            About {firstName}
          </span>
          <span className="text-xs font-normal mt-5  text-center">
            {aboutYourself}
          </span>
          <span className="text-xs font-normal mt-2  text-center">
            {/* mentor young entrepreneurs out there. Hey this is michael,
            co-founder and executive officer at */}
          </span>
          <span className="text-xs font-normal mt-2  text-center">
            {/* twitter. I’m here to offer my services , mentor young entrepreneurs
            out there. */}
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
          <div className="flex  flex-col md:flex-row  my-5">
            <button className="flex py-2 px-5 mb-3 md:mb-0 justify-center items-center bg-black hover:bg-blue-700 text-sm  p-2 text-white rounded-full w-auto">
              Entrepreneurship
            </button>
            <button className="flex py-3 px-5 justify-center items-center bg-black hover:bg-blue-700 text-sm p-2 text-white rounded-full w-auto ml-5">
              Product Management
            </button>
          </div>
          {showServices && (
            <>
              <span className="text-2xl font-semibold m-10">
                Services Offered
              </span>

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
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
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
                      <p className="text-xs text-black font-bold">
                        Book a session
                      </p>
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
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
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
                      <p className="text-xs text-black font-bold">
                        Book a session
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview
