import { config } from 'process'
import React, { useEffect, useState } from 'react'
import Header from '../components/booking/header'
import Completed from '../../pages/booking/Completed'
import Upcoming from '../../pages/booking/Upcoming'
import useWindowDimensions from '../../public/utils/useWindowDimensions'

const BookingTab = () => {
  const { width, height } = useWindowDimensions()
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <>
      <Header />

      <div className="flex flex-row w-full">
        <div className="w-full">
          <div className="bg-grey-50">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <li className="mr-2">
                <a
                  href="#"
                  className={
                    openTab === 1
                      ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                      : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                >
                  Upcoming <span className='border border-white px-2 rounded'>04</span>
                </a>
                
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className={
                    openTab === 2
                      ? 'inline-block p-4 text-xl text-white bg-amber-400 rounded-t-lg active'
                      : 'inline-block p-4 text-xl text-black rounded-t-lg hover:text-white hover:bg-amber-400'
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(2)
                  }}
                >
                  Completed <span className='border border-white px-2 rounded'>01</span>
                </a>
              </li>
            </ul>
            {/* Upcoming */}
            <div className={openTab === 1 ? 'block' : 'hidden'}>
              <Upcoming />
            </div>

             {/* Completed */}
             <div className={openTab === 2 ? 'block' : 'hidden'}>
              <Completed />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BookingTab;
