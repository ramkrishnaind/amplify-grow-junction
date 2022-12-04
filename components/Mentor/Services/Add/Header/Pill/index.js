import React from 'react'

const Pill = ({ title, selected, className, setCurrentService }) => {
  return (
    <div
      className={`${className} ${
        selected
          ? 'border-orange-400 text-orange-400 '
          : 'border-black text-black'
      } border-black align-middle flex items-center rounded-full text-lg py-3 px-5 border-2 cursor-pointer`}
      onClick={() => setCurrentService(title)}
    >
      {title}{' '}
    </div>
  )
}

export default Pill
