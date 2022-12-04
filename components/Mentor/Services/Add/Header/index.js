import React, { useState } from 'react'
import Pill from './Pill'
const Header = ({ currentService, setCurrentService, items }) => {
  return (
    <>
      <section className="flex md:flex-row flex-col min-h-[10vh] justify-between">
        <div className="h-50 mb-10 md:mb-0">
          <span className="text-4xl ">Launch New Service</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="mr-3 text-2xl">Reset all</span>
          <span className="text-2xl rounded-xl py-6 px-16 bg-gray-500 text-white">
            Add Service
          </span>
        </div>
      </section>
      <section className=" rounded-xl bg-white p-10 flex flex-col ">
        <span className=" text-xl mb-5">Choose your service</span>
        <section className="flex">
          {items.map((item, index) => {
            return (
              <Pill
                selected={item === currentService}
                title={item}
                key={index}
                setCurrentService={setCurrentService}
                className="mr-3"
              />
            )
          })}
        </section>
      </section>
    </>
  )
}

export default Header
