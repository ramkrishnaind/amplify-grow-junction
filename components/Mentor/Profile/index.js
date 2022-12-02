import React, { useState, useEffect } from 'react'
import ProfileInfo from './ProfileInfo'
import ContactInfo from './ContactInfo'
import ProfessionalInfo from './ProfessionalInfo'
import { API, Auth, input, Storage, graphqlOperation } from 'aws-amplify'
import { v4 as uuid } from 'uuid'

// import nestedkeys from 'nested-keys'
// import useWindowDimensions from '../../public/utils/useWindowDimensions'
import {
  createMentorRegister,
  updateMentorRegister,
} from '../../../src/graphql/mutations'

import { listMentorRegisters } from '../../../src/graphql/queries'
const initialState = {
  about_yourself: {
    grow_junction_url: '',
    first_name: '',
    last_name: '',
    short_description: '',
  },
  social: {
    linkedin_url: '',
    facebook_url: '',
    instagram_url: '',
    personal_web_url: '',
    other_url: '',
  },
  currency: '',
  time_zone: '',
  contact_info: {
    email: '',
    mobile: '',
    whatsapp: '',
  },
  education: {
    degree: '',
    college_university: '',
    course: '',
    graduation_year: 0,
  },
  professional_info: {
    occupation: '',
    organization: '',
    location: '',
    position: '',
    experience: {
      years: '',
      months: '',
    },
  },
  profile_image: '',
}
function arrayBufferToBase64(buffer) {
  var binary = ''
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}
const Profile = () => {
  // const { width, height } = useWindowDimensions()
  // console.log("nestedkeys",nestedkeys)
  const [openTab, setOpenTab] = useState(1)
  const [state, setState] = useState(initialState)
  const [user, setUser] = useState()
  const [isNew, setIsNew] = useState(true)
  const [loading, setLoading] = useState(false)
  const getUser = async () => {
    const usr = await Auth.currentAuthenticatedUser()
    if (usr) setUser(usr)
    debugger
    const results = await API.graphql(
      graphqlOperation(listMentorRegisters, {
        filter: { username: { contains: usr.username } },
      }),
    )
    if (results.data.listMentorRegisters.items.length > 0) {
      setIsNew(false)
      const data = { ...results.data.listMentorRegisters.items[0] }
      if (data.profile_image) {
        const img = await Storage.get(data.profile_image)
        // const response = await fetch(img)
        // const arrBuf = await response.arrayBuffer()
        // const base64String = arrayBufferToBase64(arrBuf)
        // data.profile_image = `data:image/png;base64,${base64String}`
        data.profile_image_url = img
      }
      setState({ ...data })
    }

    // const results = await API.graphql(
    //   graphqlOperation(listMentorRegisters, {
    //     filter: {
    //       username: usr.username + '1',
    //     },
    //   }),
    // )

    console.log('results', results)
  }
  useEffect(() => {
    setLoading(true)
    getUser()
    setLoading(false)
  }, [])
  console.log('user', user)
  const setModifiedState = async (profileState) => {
    debugger
    const { profile_image_file, ...remaining } = profileState
    if (profile_image_file) {
      const name = profile_image_file.name.substr(
        0,
        profile_image_file.name.lastIndexOf('.'),
      )
      const ext = profile_image_file.name.substr(
        profile_image_file.name.lastIndexOf('.') + 1,
      )
      const filename = `${name}_${uuid()}.${ext}`
      remaining.profile_image = filename
      await Storage.put(filename, profile_image_file, {
        contentType: `image/${ext}`, // contentType is optional
      })
    }
    if (isNew) {
      await API.graphql({
        query: createMentorRegister,
        variables: { input: { ...state, ...remaining } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
    } else {
      const { createdAt, updatedAt, profile_image_url, ...rest } = {
        ...state,
        ...remaining,
      }
      try {
        await API.graphql({
          query: updateMentorRegister,
          variables: {
            input: { ...rest },
            // condition: { username: { contains: state.username } },
          },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      } catch (error) {
        debugger
        console.log(error)
      }
      // await API.graphql(
      //   graphqlOperation(updateMentorRegister, {
      //     input: { ...state, ...remaining },
      //     authMode: 'AMAZON_COGNITO_USER_POOLS',
      //   }),
      // )
    }

    setState((prev) => {
      const prevVal = { ...prev, ...remaining }
      return prevVal
    })
  }
  console.log('state', state)
  return (
    <>
      {/* <BoxBodyContainer
       styleOverride={{ alignItems: "flex-start" }}
       body={
         <div
           style={{
             display: "flex",
             flex: 1,
             flexDirection: "column",
           }}
         >
         </div>
       }
     />  */}

      <div className="flex flex-row w-full">
        <div className="w-full">
          <div className="bg-grey-50">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <li className="mr-2">
                <a
                  href="#"
                  className={
                    openTab === 1
                      ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                      : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                >
                  Profile
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className={
                    openTab === 2
                      ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                      : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(2)
                  }}
                >
                  Contact
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className={
                    openTab === 3
                      ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                      : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(3)
                  }}
                >
                  Professional
                </a>
              </li>
            </ul>
            {/* Profile */}
            {!loading && (
              <>
                <div className={openTab === 1 ? 'block' : 'hidden'}>
                  <ProfileInfo
                    {...{
                      about_yourself: state.about_yourself,
                      social: state.social,
                      currency: state.currency,
                      time_zone: state.time_zone,
                      profile_image_url: state.profile_image_url,
                      setProfileState: setModifiedState,
                      // ,
                      // profile_image: state.profile_image,
                    }}
                  />
                </div>

                {/* contact */}
                <div className={openTab === 2 ? 'block' : 'hidden'}>
                  <ContactInfo
                    {...{
                      contact_info: state.contact_info,
                      setContactState: setModifiedState,
                    }}
                  />
                </div>

                {/* Professional */}
                <div className={openTab === 3 ? 'block' : 'hidden'}>
                  <ProfessionalInfo
                    {...{
                      professional_info: state.professional_info,
                      education_info: state.education_info,
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
