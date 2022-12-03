import React, { useState } from 'react'
import classes from './Parent.module.css'
import Child from '../Child'
import NavLink from '../../../../../Utilities/NavLink'

import Collapsed from '../../../Collapsed/index'
const Parent = ({ image, url, hasItems, items }) => {
  // const [collapsed, setCollapsed] = useState(true)
  // const [headerActive, setHeaderActive] = useState(true)
  // const setActiveHandler = (value) => {
  //   setHeaderActive(value)
  // }
  return hasItems ? (
    <>
      {/* <div
        className={`${classes.container} ${
          headerActive ? 'active-header' : ''
        } my-2 text-2xl flex items-center cursor-pointer`}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        <img className="pr-6" src={`/assets/icon/mentor-dashboard/${image}`} />
        <span>{title}</span>

        <img
          src={`/assets/icon/mentor-dashboard/${collapsed ? 'down' : 'up'}.png`}
          className="ml-auto mr-8"
        />
      </div> */}

      <ul>
        {items.map((child, index) => {
          return <Child key={index} {...child} />
        })}
      </ul>
    </>
  ) : (
    <NavLink href={url} exact className="cursor-pointer">
      <div
        className={`${classes.container} w-full my-2 text-2xl flex justify-center items-center cursor-pointer`}
      >
        <img src={`/assets/icon/mentor-dashboard/${image}`} />
        {/* <span>{title}</span> */}
      </div>
    </NavLink>
  )
}

export default Parent
