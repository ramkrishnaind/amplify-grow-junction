import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'

const OneOnOneBooking = ({ oneOnOneService, setShow, show = false }) => {
  const [showServiceDetail, setShowServiceDetail] = useState(show)
  const [bookSession1, setBookSession1] = useState(false)
  const [timeSlots, setTimeSlots] = useState([])
  const [bookingdate, setBookingdate] = useState()
  const [image, setImage] = useState('')
  const handleBookClick = () => {
    setShowServiceDetail(false)
    setBookSession1(true)
  }

  const closeBookSession1 = () => {
    setTimeSlots([])
    setImage('')
    setBookSession1(false)
    //setBookSession2(true)
  }

  return (
    <>
      {showServiceDetail && (
        <Step1
          oneOnOneService={oneOnOneService}
          handleBookClick={handleBookClick}
          setShowServiceDetail={(val) => {
            setShow(val)
            setShowServiceDetail(val)
          }}
        />
      )}
      {bookSession1 && (
        <Step2
          oneOnOneService={oneOnOneService}
          closeBookSession1={(val) => {
            closeBookSession1(val)
            setShow(val)
          }}
        />
      )}
    </>
  )
}

export default OneOnOneBooking
