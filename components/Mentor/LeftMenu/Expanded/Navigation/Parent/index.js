import React, { useState, useEffect } from 'react'
import classes from './Parent.module.css'
import Child from '../Child'
import NavLink from '../../../../../Utilities/NavLink'

import Collapsed from '../../../Collapsed/index'
const Parent = ({ title, image, url, hasItems, items }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [headerActive, setHeaderActive] = useState(false)
  const setActiveHandler = (value) => {
    setHeaderActive(value)
    // if (value) setCollapsed(false)
  }
  useEffect(() => {
    if (headerActive) {
      setCollapsed(false)
    }
  }, [headerActive])
  return hasItems ? (
    <>
      <div
        className={`${classes.container} ${
          headerActive ? 'active-header' : ''
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
            return <Child key={index} {...child} setActive={setActiveHandler} />
          })}
        </ul>
      )}
    </>
  ) : (
    <NavLink href={url} exact className="cursor-pointer">
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