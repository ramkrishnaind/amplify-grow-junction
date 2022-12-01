import React,{useState} from 'react'
import ProfileInfo from './ProfileInfo'
import ContactInfo from './ContactInfo'
import ProfessionalInfo from './ProfessionalInfo'
import nestedkeys from 'nested-keys'
// import useWindowDimensions from '../../public/utils/useWindowDimensions'
const initialState={
  about_yourself: {
    grow_junction_url: "",
    first_name: "",
    last_name: "",
    short_description: "",}
,
  social: {
    linkedin_url: "",
    facebook_url: "",
    instagram_url: "",
    personal_web_url: "",
    other_url: "",
  },
  currency: "",
  time_zone: "",
  contact_info: {
    email: "",
    mobile: "",
    whatsapp: "",
  },
  education: {
    degree: "",
    college_university: "",
    course: "",
    graduation_year: 0
  },
  professional_info: {
    occupation: "",
    organization: "",
    location: "",
    position: "",
    experience: {
      years: "",
      months: "",
    }
  },
  profile_image: "",
}

const Profile = () => {
  // const { width, height } = useWindowDimensions()
  console.log("nestedkeys",nestedkeys)
  const [openTab, setOpenTab] = useState(1)
  const[state,setState]=useState(initialState)
  const setProfileState=(profileState)=>{
    
    setState(prev=>{
      const prevVal={...prev,...profileState}
      return prevVal
    })
  }
  console.log("state",state)
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
            <div className={openTab === 1 ? 'block' : 'hidden'}>
              <ProfileInfo {...{about_yourself:state.about_yourself,social:state.social,currency:state.currency,time_zone:state.time_zone,setProfileState,profile_image:state.profile_image}}/>
            </div>

            {/* contact */}
            <div className={openTab === 2 ? 'block' : 'hidden'}>
              <ContactInfo {...{contact_info:state.contact_info}} />
            </div>

            {/* Professional */}
            <div className={openTab === 3 ? 'block' : 'hidden'}>
              <ProfessionalInfo {...{professional_info:state.professional_info}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
