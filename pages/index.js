import { useState, useEffect } from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import styles from '../styles/Home.module.css'
import { listTodos } from '../src/graphql/queries'
import { useAuth0 } from '@auth0/auth0-react'
import { Auth, Hub } from 'aws-amplify'
import { useRouter } from 'next/router'
import Login from './auth/Login'
import Register from './auth/Register'
import DashboardPage from './Dashboard'
import { useSelector, useDispatch } from 'react-redux'
import useWindowDimensions from '../public/utils/useWindowDimensions'
import ACTION_KEYS from '../constants/action-keys'
import { SetUser } from '../redux/actions/AuthAction'
import { getLoggedinUserEmail } from '../utilities/user'
<<<<<<< HEAD
import { createUserInfo } from '../src/graphql/mutations'
import { listUserInfos } from '../src/graphql/queries'
const Home = () => {
  const router = useRouter()
=======
const Home = () => {
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
  const email = getLoggedinUserEmail()
  debugger
  const registerType = useSelector((state) => state.AuthReducer)
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0()
  useEffect(() => {
<<<<<<< HEAD
    const registerUser = async (user) => {
      const userInfo = {
        kyc_done: false,
        register_type: registerType?.registerType,
        email: user.email,
        name: user.name,
        profile_image: user.picture,
      }
      try {
        await API.graphql({
          query: createUserInfo,
          variables: { input: { ...userInfo } },
        })
      } catch {}
    }
    const getUserData = async (user) => {
      const results = await API.graphql(
        graphqlOperation(listUserInfos, {
          filter: { username: { contains: user.email } },
        }),
      )
      if (results.data.listUserInfos.items.length > 0) {
        const data = { ...results.data.listUserInfos.items[0] }
        if (data.kyc_done) {
          if (registerType === 'STUDENT') {
            router.push('/student')
          } else {
            router.push('/mentor')
          }
        } else {
          router.push('/register/KYC_step1')
        }
      }
    }
=======
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
    debugger
    if (isAuthenticated) {
      console.log('user', user)
      setIsLoggedIn(true)
      SetUser(dispatch, user)
<<<<<<< HEAD
      if (registerType.signup) {
        registerUser(user)
      } else {
        getUserData(user)
      }
=======
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
    }
  }, [isAuthenticated])
  useEffect(() => {
    if (registerType.user) {
      setIsLoggedIn(true)
    }
  }, registerType.user)
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  debugger
  const [isLoggedin, setIsLoggedIn] = useState(false)
  const { width, height } = useWindowDimensions()
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const usr = await Auth.currentAuthenticatedUser()
      setIsLoggedIn(!!usr?.username)
      if (usr) setUser(dispatch, usr)
    } catch {}
  }
  const authListener = async () => {
    Hub.listen('auth', (data) => {
      debugger
      console.log('data.payload.data', data.payload.data)
      switch (data.payload.event) {
        case 'signIn':
          setIsLoggedIn(true)
          break
        case 'signOut':
          setIsLoggedIn(false)
          break
      }
    })
    try {
      const userData = await Auth.currentAuthenticatedUser()
      console.log('userData', userData)
      // debugger
      // const credentials = await Auth.federatedSignIn()
    } catch (error) {}
  }
  const [todos, setTodos] = useState([])
  const fetchTodos = async () => {
    const response = await API.graphql({
      query: listTodos,
    })
    setTodos(response.data.listTodos.items)
  }
  console.log('isLoggedIn', isLoggedin)
  useEffect(() => {
    dispatch({ type: ACTION_KEYS.WINDOWLAYOUT, payload: { height, width } })

    authListener()
    fetchTodos()
    getUser()
  }, [])
  return (
    // <>
    //   {isAuthenticated ? (
    //     <>
    //       <div>
    //         <img src={user.picture} alt={user.name} />
    //         <h2>{user.name}</h2>
    //         <p>{user.email}</p>
    //       </div>
    //       <button onClick={() => logout({ returnTo: window.location.origin })}>
    //         Log Out
    //       </button>
    //     </>
    //   ) : (
    //     <button onClick={() => loginWithRedirect()}>login</button>
    //   )}
    <DashboardPage isLoggedin={isLoggedin} />
    // </>
  )
}
export default Home
