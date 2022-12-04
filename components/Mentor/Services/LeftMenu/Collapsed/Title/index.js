import React from 'react'

const Title = ({ onExpanded }) => {
  return (
    <section className="h-20 flex items-center px-2 mb-10">
      <img
        className="w-10 h-8 cursor-pointer"
        onClick={onExpanded}
        src="/assets/icon/mentor-dashboard/hamburger.png"
      />
    </section>
  )
}

export default Title
