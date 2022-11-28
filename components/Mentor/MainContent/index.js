import React from 'react'
import Header from './Header'
import classes from './MainContent.module.css'
import Home from '../Home'
const MainContent = ({ content }) => {
  return (
    <section
      className={`${classes.body} flex-1 min-h-screen flex flex-col justify-start`}
    >
      <Header />
<<<<<<< HEAD
      <main className="mt-5 px-3  md:px-10 ">
=======
      <main className={`mt-5 px-3 ${classes['main-content']} md:px-10 `}>
>>>>>>> d3da3498a51c8eee94d004fe00cc4d5fcd33a878
        {!!content || <Home />}
        {!!content && content}
      </main>
    </section>
  )
}

export default MainContent
