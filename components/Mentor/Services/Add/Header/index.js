import React, { useState } from 'react'
import Pill from './Pill'
const Header = ({ currentService, setCurrentService, items, saveClick }) => {
  return (
    <>
      <section className="flex md:flex-row flex-col min-h-[10vh] justify-between">
        <div className="h-50 mb-10 md:mb-0">
          <span className="text-4xl ">Launch New Service</span>
        </div>
        <div className="flex justify-center items-center">
          <span
            onClick={() => setCurrentService('')}
            className="mr-3 text-2xl hover:bg-gray-200 px-10 py-5 cursor-pointer rounded-full"
          >
            Reset all
          </span>
          <span
            className="text-2xl rounded-xl py-6 px-16 bg-gray-500 text-white cursor-pointer"
            onClick={saveClick}
          >
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
                onSelected={setCurrentService}
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
