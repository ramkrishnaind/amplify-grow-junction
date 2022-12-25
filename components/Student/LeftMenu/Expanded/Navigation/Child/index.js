import React from 'react'
import NavLink from '../../../../../Utilities/NavLink'
import classes from './Child.module.css'
const Child = ({ title, image, url, setActive, partial }) => {
  return (
    <NavLink
      href={url}
      exact={!partial}
      className="cursor-pointer"
      setActive={setActive}
    >
      <div
        className={`${classes.container} pl-10 my-2 text-2xl flex items-center cursor-pointer`}
      >
        <img
          className="pl-14 pr-6 w-50 h-50"
          style={{ width: '75px' }}
          src={`/assets/icon/mentor-dashboard/${image}`}
        />
        <span>{title}</span>
      </div>
    </NavLink>
  )
}

export default Child
