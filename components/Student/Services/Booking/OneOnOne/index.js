import React, { useState } from 'react'
import OneOnOneSessionData from './OneOnOneSessionData'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const OneOnOneBooking = ({ oneOnOneService, setShow, show = false }) => {
  const [showServiceDetail, setShowServiceDetail] = useState(show)
  const [bookSession1, setBookSession1] = useState(false)
  const [bookSession3, setBookSession3] = useState(false)
  const [bookSession4, setBookSession4] = useState(false)
  const [image, setImage] = useState('')
  const [step2, setStep2] = useState()
  const handleBookClick = () => {
    setShowServiceDetail(false)
    setBookSession1(true)
  }
  const handleBookSession3 = (obj) => {
    debugger
    setBookSession1(false)
    setBookSession3(true)
    setStep2(obj)
  }
  const closeBookSession1 = () => {
    setImage('')
    setBookSession1(false)
    setBookSession3(false)
  }
  const closeBookSession3 = () => {
    setImage('')
    setBookSession1(false)
    setBookSession3(false)
    setBookSession4(true)
  }
  const closeBookSession4 = () => {
    setImage('')
    setBookSession1(false)
    setBookSession3(false)
    setBookSession4(false)
    setShow(false)
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
          handleBookSession3={handleBookSession3}
        />
      )}
      {bookSession3 && (
        <Step3
          oneOnOneService={oneOnOneService}
          bookingdate={step2?.bookingDate}
          timeZone={step2?.timeZone}
          timeSlot={step2?.slot}
          closeBookSession3={(val) => {
            closeBookSession3(val)
            setShow(true)
          }}
        />
      )}
      {bookSession4 && (
        <OneOnOneSessionData oneOnOneService={oneOnOneService} closeBookSession4={closeBookSession4}/>
      )}
    </>
  )
}

export default OneOnOneBooking
