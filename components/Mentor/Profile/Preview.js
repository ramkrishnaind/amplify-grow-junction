import React from 'react'
import classes from './Preview.module.css'
const Preview = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className={classes.img}
        src="/public/assets/icon/mentor-dashboard/persona.png"
      />
      <div className="flex flex-col items-center">
        <span className="text-2xl">Michel Scott</span>
        <span className="text-sm text-slate-400">
          Founder and CEO at Twitter
        </span>
      </div>
    </div>
  )
}

export default Preview
