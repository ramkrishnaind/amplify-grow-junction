import React from 'react'

import { NavigationLinks } from '../../../data'

import Parent from './Parent'

const Navigation = () => {
  return (
    <nav>
<<<<<<< HEAD
      <ul className="max-h-[85vh] overflow-y-auto ">
=======
      <ul className="max-h-[140vh] overflow-y-auto ">
>>>>>>> d3da3498a51c8eee94d004fe00cc4d5fcd33a878
        {NavigationLinks.map((navLink, index) => {
          const { title, url, image, items } = navLink
          if (items) {
            return (
              <>
                <Parent key={index} {...navLink} hasItems={true} />
                {/* <ul>
                  {items.map((child) => {
                    return <Child {...child} />
                  })}
                </ul> */}
              </>
            )
          } else {
            return <Parent key={index} {...navLink} hasItems={false} />
          }
        })}
      </ul>
    </nav>
  )
}

export default Navigation
