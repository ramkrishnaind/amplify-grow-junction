import React, { useEffect } from 'react'
import Profile from '../../components/Services/Profile'
import { useDispatch } from 'react-redux'
import { setServicesTitle } from '../../../redux/actions/ServicesTitleAction'

const ProfilePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setServicesTitle(dispatch, 'Profile')
  }, [])
  return <Profile />
}

export default ProfilePage
