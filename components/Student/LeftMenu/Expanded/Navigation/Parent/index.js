import React, { useState, useEffect } from 'react'
import classes from './Parent.module.css'
import Child from '../Child'
import NavLink from '../../../../../Utilities/NavLink'

import Collapsed from '../../../Collapsed/index'
const Parent = ({ title, image, url, hasItems, items, partial }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [isHeaderActive, setIsHeaderActive] = useState(true)
  const [headerActive, setHeaderActive] = useState([])
  const setActiveHandler = (index, value) => {
    headerActive[index] = value
    setHeaderActive(headerActive)
    // if (value) setCollapsed(false)
  }
  // useEffect(() => {
  //   debugger
  //   let isAnyActive = false
  //   headerActive.forEach((i) => {
  //     if (i) {
  //       isAnyActive = true
  //       return
  //     }
  //   })
  //   setIsHeaderActive(isAnyActive)
  //   if (isAnyActive) {
  //     setCollapsed(false)
  //   }
  // }, [headerActive])
  return hasItems ? (
    <>
      <div
        className={`${classes.container} ${
          isHeaderActive ? 'active-header' : ''
        } my-2 text-2xl flex items-center cursor-pointer`}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        <img
          className="pl-14 pr-6"
          src={`/assets/icon/mentor-dashboard/${image}`}
        />
        <span>{title}</span>

        <img
          src={`/assets/icon/mentor-dashboard/${collapsed ? 'down' : 'up'}.png`}
          className="ml-auto mr-8"
        />
      </div>
      {!collapsed && (
        <ul>
          {items.map((child, index) => {
            return (
              <Child
                key={index}
                {...child}
                setActive={setActiveHandler.bind(null, index)}
              />
            )
          })}
        </ul>
      )}
    </>
  ) : (
    <NavLink href={url} exact={!partial} className="cursor-pointer">
      <div
        className={`${classes.container} my-2 text-2xl flex items-center cursor-pointer`}
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

export default Parent
