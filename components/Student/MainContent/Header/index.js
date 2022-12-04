import React from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
  // debugger
  const mentorHeader = useSelector((state) => state.StudentHeaderReducer)
  return (
    <div className="flex  px-3  md:px-10 sticky bg-white top-0 left-0 h-24 items-center w-full justify-between">
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
          <li className="link w-10 h-10">
            <img
              className=" w-full object-cover"
              src={`/assets/icon/mentor-dashboard/persona.png`}
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
