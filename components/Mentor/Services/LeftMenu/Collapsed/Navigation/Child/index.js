import React from 'react'
import NavLink from '../../../../../../Utilities/NavLink'
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
        className={`${classes.container} my-2 text-2xl justify-center flex items-center cursor-pointer`}
      >
        <img src={`/assets/icon/mentor-dashboard/${image}`} />
      </div>
    </NavLink>
  )
}

export default Child
