import React from 'react'
import classes from './Home.module.css'
// import { useRouter } from 'next/router'
import Link from 'next/link'
const Home = () => {
  // return <div>Hi</div>
  // const router= useRouter()
  return (
    <>
      <section
        className={`flex flex-col min-h-screen items-center justify-center`}
      >
        <div className="hidden md:flex justify-center items-center ">
          <section
            className={`${classes.container} p-6 flex flex-col justify-center`}
          >
            <section className="flex flex-col md:flex-row">
              <article className="leading-loose px-7 w-3/4  order-2 md:order-1 mx-auto md:mx-0 mb-20 md:mb-10">
                <h2 className="text-4xl mb-6">
                  Launch your 1 on 1 sessions, workshops, courses and
                </h2>
                <h2 className="text-4xl mb-6">Text query services</h2>

                <p className="text-xl">
                  Monetise your knowledge and help students in need at same time
                </p>
              </article>
              <div className="h-52 w-1/4 order-1 md:order-2 mb-32 mx-auto md:mx-0  md:mb-0">
                <img
                  className=" object-cover"
                  src="/assets/icon/mentor-dashboard/article-image.png"
                  alt=""
                />
              </div>
            </section>
            <section className="md:px-16 flex justify-center md:justify-start">
              <div>
                <Link href={'services/add'}>
                  <span
                    className={`${classes['left-button']} text-lg mr-6`}
                    onClick={(e) => {}}
                  >
                    Start adding services
                  </span>
                </Link>
              </div>
            </section>
          </section>
        </div>
        <div className="lock md:hidden">
          <section className={`p-6 flex flex-col justify-between`}>
            <section className="flex flex-col md:flex-row">
              <article className=" order-2 md:order-1 mx-auto md:mx-0 mb-16 md:mb-0">
                <h2 className="text-4xl mb-6">
                  Launch your 1 on 1 sessions, workshops, courses and
                </h2>
                <h2 className="text-4xl mb-6">Text query services</h2>

                <p className="text-xl">
                  Monetise your knowledge and help students in need at same time
                </p>
              </article>
              <div className="h-52  order-1 md:order-2 mb-32 mx-auto md:mx-0  md:mb-0">
                <img
                  className=" object-cover"
                  src="/assets/icon/mentor-dashboard/article-image.png"
                  alt=""
                />
              </div>
            </section>
            <section className="md:px-16 flex justify-center">
              <div className="flex flex-col items-center">
                <Link href={'/services/add'}>
                  <span className={`${classes['left-button']} text-lg mr-6`}>
                    Start adding services
                  </span>
                </Link>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  )
}

export default Home
