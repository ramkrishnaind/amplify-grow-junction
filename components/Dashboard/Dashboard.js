import React from 'react'
import RightSideImages from './RightSideImages'
import classes from './Dashboard.module.css'
import { useRouter } from 'next/router'
import { RegisterTypeRequest } from '../../redux/actions/AuthAction'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <section className={classes.main}>
      <header className={`flex-col md:flex-row ${classes.header}`}>
        <div className={classes.logo}></div>
        <div className={`flex-col md:flex-row cursor-pointer ${classes['right-side']}`}>
          <a
            className={classes.link}
            onClick={() => {
              RegisterTypeRequest(dispatch, 'MENTOR')

              router.push('/auth/Register')
            }}
          >
            Become a mentor
          </a>
          <a
            className={classes.link}
            onClick={() => {
              RegisterTypeRequest(dispatch, 'STUDENT')
              router.push('/auth/Register')
            }}
          >
            Become a student
          </a>
          <a
            className={classes.button}
            onClick={() => {
              router.push('/auth/Login')
            }}
          >
            Log In
          </a>
        </div>
      </header>
      <section className={`p-16 flex-col md:flex-row md:p-32 ${classes.body}`}>
        <div className={classes.left}>
          <div className={`text-[24px] md:text-[48px] ${classes.heading}`}>
            If you are a <span className={classes.capital}>creator</span>
          </div>
          <div className={`text-[24px] md:text-[48px] ${classes.heading}`}>
            this is for you
          </div>
        </div>
        <div className={classes.right}>
          <RightSideImages />
        </div>
      </section>
    </section>
  )
}

export default Dashboard
