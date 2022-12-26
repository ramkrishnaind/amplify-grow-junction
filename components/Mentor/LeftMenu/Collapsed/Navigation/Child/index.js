import React from 'react'
import NavLink from '../../../../../Utilities/NavLink'
import classes from './Child.module.css'
import { Auth } from 'aws-amplify'
import { useAuth0 } from '@auth0/auth0-react'
<<<<<<< HEAD
import {useDispatch} from 'react-redux'
=======
import { useDispatch } from 'react-redux'
>>>>>>> 61891d51682dae6c02f877feb8988067b140b5db
import {
  ClearUser,
  StoreUserAuth,
} from '../../../../../../redux/actions/AuthAction'
// import { logs } from '../../../../../../.next/static/chunks/pages/_app'
const Child = ({ title, image, url, js, setActive, partial }) => {
<<<<<<< HEAD
  const dispatch=useDispatch()
=======
  const dispatch = useDispatch()
>>>>>>> 61891d51682dae6c02f877feb8988067b140b5db
  const { logout: oAuthLogout } = useAuth0()
  if (image === 'logout.png') {
    url = 'javascript:logout()'
    console.log('url', url)
  }
  window.auth = Auth
  window.logout = logout
  window.ClearUser = ClearUser
  window.StoreUserAuth = StoreUserAuth
  window.dispatch = dispatch
  async function logout() {
    try {
      await auth.signOut()
    } catch (error) {}
    try {
      oAuthLogout({ returnTo: window.location.origin })
    } catch (error) {}
    ClearUser(dispatch)
    StoreUserAuth(dispatch, null)
    // try {
    //   await auth.signOut()
    //   oAuthLogout({ returnTo: window.location.origin })
    // } catch (error) {
    //   console.log('error signing out: ', error)
    // }
  }
  return (
    <NavLink
      href={url}
      exact={!partial}
      className="cursor-pointer"
      setActive={setActive}
      // js={js}
    >
      <div
        className={`${classes.container} my-2 text-2xl justify-center flex items-center cursor-pointer`}
      >
        <img src={`/assets/icon/mentor-dashboard/${image}`} />
      </div>
    </NavLink>
  )
}

export default Child
