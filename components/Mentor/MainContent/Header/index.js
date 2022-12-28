import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Auth } from 'aws-amplify'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { ClearUser, StoreUserAuth } from '../../../../redux/actions/AuthAction'
import useComponentVisible from '../../../../hooks/useComponentVisible'
import ReactDOM from 'react-dom'
const Header = () => {
  const [open, setOpen] = useState(false)
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const dispatch = useDispatch()
  debugger
  useEffect(() => {
    debugger
    setOpen(isComponentVisible)
  }, [isComponentVisible])
  console.log('isComponentVisible', isComponentVisible)
  console.log('open', open)
  const { logout: oAuthLogout } = useAuth0()
  async function logout() {
    ClearUser(dispatch)
    StoreUserAuth(dispatch, null)
    try {
      await Auth.signOut()
    } catch (error) {}
    try {
      oAuthLogout({ returnTo: window.location.origin })
    } catch (error) {}
  }
  const mentorHeader = useSelector((state) => state.MentorHeaderReducer)
  return (
    <div
      ref={ref}
      className="flex  px-3  md:px-10 sticky bg-white top-0 left-0 h-24 items-center w-full justify-between"
    >
      <div className="header"> {mentorHeader?.title}</div>
      <nav className="nav-links w-64 md:w-80">
        <ul className="w-full flex justify-evenly">
          <li className="link w-10 h-10">
            <img
              className="w-full object-cover"
              src={`/assets/icon/mentor-dashboard/phone.png`}
            />
          </li>
          <li className="link w-10 h-10">
            <img
              className=" w-full object-cover"
              src={`/assets/icon/mentor-dashboard/mail.png`}
            />
          </li>
          <li className="link w-10 h-10">
            <img
              className=" w-full object-cover"
              src={`/assets/icon/mentor-dashboard/notification.png`}
            />
          </li>
          <li
            className="link w-10 h-10 cursor-pointer"
            onClick={() => {
              setOpen((prev) => !prev)
              setIsComponentVisible(true)
            }}
          >
            <img
              className=" w-full object-cover"
              src={`/assets/icon/mentor-dashboard/persona.png`}
            />
          </li>
        </ul>
      </nav>
      {open && isComponentVisible && (
        <div
          className="absolute cursor-pointer right-10 top-24 bg-white"
          onClick={logout}
        >
          <ul>
            <li className="px-3 py-2 border-2">Logout</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
