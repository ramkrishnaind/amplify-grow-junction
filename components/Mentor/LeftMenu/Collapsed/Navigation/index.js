import React from 'react'

import { NavigationLinks } from '../../../data'

import Parent from './Parent'

const Navigation = () => {
  return (
    <nav className="w-full">
      <ul className="max-h-[85vh] overflow-y-auto ">
        {NavigationLinks.map((navLink) => {
          const { title, url, image, items } = navLink
          if (items) {
            return (
              <>
                <Parent {...navLink} hasItems={true} />
                {/* <ul>
                  {items.map((child) => {
                    return <Child {...child} />
                  })}
                </ul> */}
              </>
            )
          } else {
            return <Parent {...navLink} hasItems={false} />
          }
        })}
      </ul>
    </nav>
  )
}

export default Navigation
