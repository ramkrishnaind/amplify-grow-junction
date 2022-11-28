import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row">
      <div className="flex justify-start items-center border-gray-300 border-b text-4xl font-bold text-black px-4 py-3 w-1/2 md:w-full lg:w-full">
        Booking
      </div>
      <div className="flex justify-end border-gray-300 border-b p-4">
        <img src="../../../assets/icon/call.png" alt="" className="p-5" />
        <img src="../../../assets/icon/message.png" alt="" className="p-5" />
        <img src="../../../assets/icon/bell.png" alt="" className="p-5" />
        <img src="../../../images/persona.png" alt="" className='w-12 h-12 mt-3'/>
      </div>
    </div>
  )
}
export default Header
