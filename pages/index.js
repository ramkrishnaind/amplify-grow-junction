import { useState, useEffect } from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import styles from '../styles/Home.module.css'
import { listTodos } from '../src/graphql/queries'
import { useAuth0 } from '@auth0/auth0-react'
import { Auth, Hub } from 'aws-amplify'
import Login from './auth/Login'
import Register from './auth/Register'
import DashboardPage from './Dashboard'
import { useDispatch } from 'react-redux'
import useWindowDimensions from '../public/utils/useWindowDimensions'
import ACTION_KEYS from '../constants/action-keys'

const Home = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0()
  debugger
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  const [isLoggedin, setIsLoggedIn] = useState(false)
  const { width, height } = useWindowDimensions()
  const dispatch = useDispatch()
  const checkLogin = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser()
      debugger
      setIsLoggedIn(!!userData?.username)
      // debugger
      // const credentials = await Auth.federatedSignIn()
    } catch (error) {}
  }
  useEffect(() => {
    checkLogin()
  }, [])
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
  }, [])
  return (
    <>
      {/* {isAuthenticated ? (
    <>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
      </>
    ):<button onClick={()=>loginWithRedirect()}>login</button>
   } */}
      <DashboardPage isLoggedin={isLoggedin} />
    </>
  )
}
export default Home
