import React from 'react'
import classes from './Author.module.css'
const Author = () => {
  return (
    <section
      className={`${classes.container} h-60 bg-yellow-100 p-4 flex flex-col mb-15`}
    >
      <section className="mb-8 flex">
        <img
          className={classes.persona}
          src="/assets/icon/mentor-dashboard/persona2.png"
          alt=""
        />
        <article className="flex flex-col">
          <h3>Michel Scott</h3>
          <p className="text-sm">growjunction.io/michel-scott</p>
        </article>
      </section>
      <section>
        <button className={`${classes.btn} w-full bg-white border-2 text-2xl`}>
          Publish a post
        </button>
      </section>
    </section>
  )
}

export default Author
