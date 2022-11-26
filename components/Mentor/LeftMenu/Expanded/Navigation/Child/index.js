import React from 'react'
import NavLink from '../../../../../Utilities/NavLink'
import classes from './Child.module.css'
const Child = ({ title, image, url, setActive }) => {
  return (
    <NavLink href={url} exact className="cursor-pointer" setActive={setActive}>
      <div
        className={`${classes.container} pl-10 my-2 text-2xl flex items-center cursor-pointer`}
      >
        <img
          className="pl-14 pr-6"
          src={`/assets/icon/mentor-dashboard/${image}`}
        />
        <span>{title}</span>
      </div>
    </NavLink>
  )
}

export default Child
