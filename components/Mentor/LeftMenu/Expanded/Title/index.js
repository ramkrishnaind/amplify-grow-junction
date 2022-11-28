import React from 'react'

const Title = ({ onCollapse }) => {
  return (
    <section className="h-20 flex items-center px-2 mb-6">
      <img
        className="w-10 h-8 cursor-pointer"
        onClick={onCollapse}
        src="/assets/icon/mentor-dashboard/hamburger.png"
      />
      <img src="/assets/icon/mentor-dashboard/GJ App logo.png" />
    </section>
  )
}

export default Title
