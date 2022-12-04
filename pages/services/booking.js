import React, { useEffect } from 'react'
import Profile from '../../../components/Services/Booking'
import { useDispatch } from 'react-redux'
import { setServicesTitle } from '../../../redux/actions/ServicesTitleAction'

const BookingPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setServicesTitle(dispatch, 'Bookings')
  }, [])
  return <Profile />
}

export default BookingPage
