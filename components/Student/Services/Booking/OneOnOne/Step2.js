import React, { useState, useEffect } from 'react'
import classes from './Step2.module.css'
import BookingDatePicker from 'react-datetime'
import moment from 'moment'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import { API, graphqlOperation } from 'aws-amplify'
import { getMentorData } from '../../../../../utilities/user'
import { getS3ImageUrl } from '../../../../../utilities/others'
import { listSchedules } from '../../../../../src/graphql/queries'
const Step2 = ({ oneOnOneService, closeBookSession1, handleBookSession3 }) => {
  const [timeZone, setTimeZone] = useState({})
  const [timeSlots, setTimeSlots] = useState([])
  const [bookingdate, setBookingdate] = useState()
  const [scheduleDetails, setScheduleDetails] = useState([])
  const [everyday, setEveryday] = useState([])
  const [monday, setMonday] = useState([])
  const [tuesday, setTuesday] = useState([])
  const [wednesday, setWednesday] = useState([])
  const [thursday, setThursday] = useState([])
  const [friday, setFriday] = useState([])
  const [saturday, setSaturday] = useState([])
  const [sunday, setSunday] = useState([])
  const [image, setImage] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [mentor, setMentor] = useState()
  const [duration, setDuration] = useState()
  const [unavailableDates, setUnavailableDates] = useState([])
  const [selectedTimeInterval, setSelectedTimeInterval] = useState('')
  const weekdays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'everyday',
  ]
  debugger
  useEffect(() => {
    debugger
    getAvailability(
      oneOnOneService?.username,
      oneOnOneService?.sessionDuration,
      oneOnOneService?.sessionDurationIn,
    )
    const men = getMentorData(oneOnOneService.username)

    showPreview(men)
    setMentor(men)
  }, [oneOnOneService])
  const yesterday = moment().subtract(1, 'day')
  const disablePastDt = (current) => {
    return current.isAfter(yesterday)
  }
  const handleBookingDate = (dt) => {
    debugger
    setBookingdate(dt._d)
    // setBookingdate(dt.format('DD-MM-YYYY'))
    // console.log(dt._d)
  }
  const showPreview = async (mentorPassed) => {
    // e.stopPropagation()

    if (mentorPassed) {
      if (mentorPassed.profile_image) {
        // const img = await Storage.get(mentorPassed.profile_image)
        const img = await getS3ImageUrl(mentorPassed.profile_image)
        console.log('image - ', img)
        setImage(img)
      }

      // setMentor(mentorPassed)
      // setShowServiceDetail(false)
      // setShowMentor(true)
    }
    debugger
    console.log('mentorPassed', mentorPassed)
  }
  // console.log('mentor', mentor)
  console.log('oneOnOneService', oneOnOneService)
  // console.log('timeslots', timeSlots)
  const getAvailability = async (
    username,
    sessionDuration,
    sessionDurationIn,
  ) => {
    sessionDuration !== 'undefined' ? setDuration(sessionDuration) : ''
    debugger
    if (username) {
      // setMentorName(username)
      debugger
      try {
        const results = await API.graphql(
          graphqlOperation(listSchedules, {
            filter: { username: { contains: username } },
          }),
        )
        debugger
        if (results.data.listSchedules.items.length > 0) {
          setScheduleDetails(results.data.listSchedules.items)
          setUnavailableDates(
            results.data.listSchedules.items[0]?.unavailableDates,
          )
          // results.data.listSchedules.items[0]?.unavailableDates.length > 0 ? (
          //   results.data.listSchedules.items[0]?.unavailableDates.map((ud, index) =>{
          //     debugger
          //    // disablePastDt.includes(ud)
          //   })
          // ) : null

          console.log(results.data.listSchedules.items)

          debugger

          if (
            results.data.listSchedules.items[0]?.daySchedules.everyday
              .everyday &&
            results.data.listSchedules.items[0]?.availableSameTime
          ) {
            setEveryday(
              results.data.listSchedules.items[0]?.daySchedules.everyday.time,
            )
            if (
              results.data.listSchedules.items[0]?.daySchedules.everyday.time
                ?.length > 0
            ) {
              debugger
              results.data.listSchedules.items[0]?.daySchedules.everyday.time.map(
                (t, index) => {
                  timeIntervals(
                    t.startTime,
                    t.endTime,
                    sessionDuration,
                    sessionDurationIn,
                  )
                },
              )
            }
          }
          debugger
          if (results.data.listSchedules.items[0]?.daySchedules.Sunday.Sunday) {
            setSunday(
              results.data.listSchedules.items[0]?.daySchedules?.Sunday
                ?.time[0],
            )
            //timeIntervals(results.data.listSchedules.items[0]?.daySchedules?.sunday?.time?.startTime,results.data.listSchedules.items[0]?.daySchedules?.sunday?.time?.endTime ,sessionDuration)
          }
          if (results.data.listSchedules.items[0]?.daySchedules.Monday.Monday) {
            setMonday(
              results.data.listSchedules.items[0]?.daySchedules?.Monday
                ?.time[0],
            )
            //timeIntervals(results.data.listSchedules.items[0]?.daySchedules?.monday?.time?.startTime,results.data.listSchedules.items[0]?.daySchedules?.monday?.time?.endTime ,sessionDuration)
          }
          if (
            results.data.listSchedules.items[0]?.daySchedules.Tuesday.Tuesday
          ) {
            setTuesday(
              results.data.listSchedules.items[0]?.daySchedules?.Tuesday
                ?.time[0],
            )
            //timeIntervals(results.data.listSchedules.items[0]?.daySchedules?.tuesday?.time?.startTime,results.data.listSchedules.items[0]?.daySchedules?.tuesday?.time?.endTime ,sessionDuration)
          }
          if (
            results.data.listSchedules.items[0]?.daySchedules.Wednesday
              .Wednesday
          ) {
            setWednesday(
              results.data.listSchedules.items[0]?.daySchedules?.wednesday
                ?.time[0],
            )
            //timeIntervals(results.data.listSchedules.items[0]?.daySchedules?.wednesday?.time?.startTime,results.data.listSchedules.items[0]?.daySchedules?.wednesday?.time?.endTime ,sessionDuration)
          }
          if (
            results.data.listSchedules.items[0]?.daySchedules.Thursday.Thursday
          ) {
            setThursday(
              results.data.listSchedules.items[0]?.daySchedules?.Thursday
                ?.time[0],
            )
            //timeIntervals(results.data.listSchedules.items[0]?.daySchedules?.thursday?.time?.startTime,results.data.listSchedules.items[0]?.daySchedules?.thursday?.time?.endTime ,sessionDuration)
          }
          if (results.data.listSchedules.items[0]?.daySchedules.Friday.Friday) {
            setFriday(
              results.data.listSchedules.items[0]?.daySchedules?.Friday
                ?.time[0],
            )
            //timeIntervals(results.data.listSchedules.items[0]?.daySchedules?.friday?.time?.startTime,results.data.listSchedules.items[0]?.daySchedules?.friday?.time?.endTime ,sessionDuration)
          }
          if (
            results.data.listSchedules.items[0]?.daySchedules.Saturday.Saturday
          ) {
            setSaturday(
              results.data.listSchedules.items[0]?.daySchedules?.Saturday
                ?.time[0],
            )
            //timeIntervals(results.data.listSchedules.items[0]?.daySchedules?.saturday?.time?.startTime,results.data.listSchedules.items[0]?.daySchedules?.saturday?.time?.endTime ,sessionDuration)
          }
        }
      } catch (error) {
        console.log(`Load Error:${error}`)
      }
    }
  }
  // add minutes
  function addMinutes(time, minutes) {
    var date = new Date(
      new Date('01/01/2023 ' + time).getTime() + minutes * 60000,
    )
    var tempTime =
      (date.getHours().toString().length == 1
        ? '0' + date.getHours()
        : date.getHours()) +
      ':' +
      (date.getMinutes().toString().length == 1
        ? '0' + date.getMinutes()
        : date.getMinutes()) +
      ':' +
      (date.getSeconds().toString().length == 1
        ? '0' + date.getSeconds()
        : date.getSeconds())
    return tempTime
  }
  const setTimeInterval = (slot) => {
    debugger
    // setIsSelected(true)
    setSelectedTimeInterval(slot)
  }
  useEffect(() => {
    const dt = new Date(bookingdate)
    const day = weekdays[dt.getDay()]?.toLowerCase().toString()
    setWeekDay(day)
    setTimeSlots([])
    debugger
    if (day !== 'undefined' && day === 'sunday') {
      timeIntervals(sunday.startTime, sunday.endTime, duration)
      // if( sunday?.time?.length > 0){
      //   sunday.map((s, index) =>{
      //     timeIntervals(s.startTime, s.endTime, duration)
      //   })
      // }
    }

    if (day !== 'undefined' && day === 'monday') {
      timeIntervals(monday.startTime, monday.endTime, duration)
      // if( monday?.time?.length > 0){
      //   monday.map((s, index) =>{
      //     timeIntervals(s.startTime, s.endTime, duration)
      //   })
      // }
    }

    if (day !== 'undefined' && day === 'tuesday') {
      timeIntervals(tuesday.startTime, tuesday.endTime, duration)
      // if( tuesday?.time?.length > 0){
      //   tuesday.map((s, index) =>{
      //     timeIntervals(s.startTime, s.endTime, duration)
      //   })
      // }
    }

    if (day !== 'undefined' && day === 'wednesday') {
      timeIntervals(wednesday.startTime, wednesday.endTime, duration)
      // if( wednesday?.time?.length > 0){
      //   wednesday.map((s, index) =>{
      //     timeIntervals(s.startTime, s.endTime, duration)
      //   })
      // }
    }

    if (day !== 'undefined' && day === 'thursday') {
      timeIntervals(thursday.startTime, thursday.endTime, duration)
      // if( thursday?.time?.length > 0){
      //   thursday.map((s, index) =>{
      //     timeIntervals(s.startTime, s.endTime, duration)
      //   })
      // }
    }

    if (day !== 'undefined' && day === 'friday') {
      timeIntervals(friday.startTime, friday.endTime, duration)
      // if( friday?.time?.length > 0){
      //   friday.map((s, index) =>{
      //     timeIntervals(s.startTime, s.endTime, duration)
      //   })
      // }
    }

    if (day !== 'undefined' && day === 'saturday') {
      timeIntervals(saturday.startTime, saturday.endTime, duration)
      // if( saturday?.time?.length > 0){
      //   saturday.map((s, index) =>{
      //     timeIntervals(s.startTime, s.endTime, duration)
      //   })
      // }
    }

    if (day !== 'undefined' && day === 'sunday') {
      timeIntervals(sunday.startTime, sunday.endTime, duration)
      // if( sunday?.time?.length > 0){
      //   sunday.map((s, index) =>{
      //     timeIntervals(s.startTime, s.endTime, duration)
      //   })
      // }
    }

    // day && day === 'monday'
    //   ? timeIntervals(startTime, endTime, interval)
    //   : null

    // day && day === 'tuesday'
    //   ? timeIntervals(startTime, endTime, interval)
    //   : null

    // day && day === 'wednesday'
    //   ? timeIntervals(startTime, endTime, interval)
    //   : null

    // day && day === 'thursday'
    //   ? timeIntervals(startTime, endTime, interval)
    //   : null

    // day && day === 'friday'
    //   ? timeIntervals(startTime, endTime, interval)
    //   : null

    // day && day === 'saturday'
    //   ? timeIntervals(startTime, endTime, interval)
    //   : null
  }, [bookingdate])
  const timeIntervals = (startTime, endTime, interval, sessionDurationIn) => {
    // setTimeSlots([])
    debugger
    if (startTime !== undefined && endTime !== undefined) {
      let stime = startTime + ':00'
      let etime = endTime + ':00'
      const times = []
      times.push(stime.slice(0, -3))
      while (stime != etime) {
        if ((sessionDurationIn = 'hours')) {
          stime = addMinutes(stime, interval * 60)
        } else {
          stime = addMinutes(stime, interval)
        }
        times.push(stime.slice(0, -3))
      }
      if (times.length > 0) {
        times.pop()
      }
      setTimeSlots(times)
    }
  }
  return (
    <div className="flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none ">
      <div className="flex flex-col justify-around bg-white text-center mt-9 rounded-2xl shadow-lg w-full md:w-2/5 lg:w-2/5 min-h-[50vh]">
        <div className="flex justify-between px-8 py-4 border-b border-gray-300 ">
          <div className="flex flex-col justify-start items-start border=b-2">
            <span className="text-2xl font-semibold mt-3">
              Select the date you want to schedule a meet
            </span>
          </div>
          <div>
            <button
              className=""
              type="button"
              onClick={() => closeBookSession1()}
            >
              <img
                src="../../../assets/icon/cross.png"
                alt=""
                className="w-4 h-4 mr-2 mt-5"
              ></img>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-0">
          <div className="border-r-2">
            <div className="bg-gray-100 m-2 mr-3 w-auto rounded-lg ">
              <div className="flex flex-row justify-start items-start px-4 py-2">
                <div
                  className={`${classes['persona']} bg-gray-300 rounded-full flex justify-center`}
                >
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      className={`${classes['persona']} rounded-full`}
                    />
                  ) : null}
                </div>
                <div>
                  <p className=" flex justify-start items-start text-lg font-semibold mt-5 px-6">
                    Call with{' '}
                    {(mentor?.about_yourself?.first_name &&
                      mentor?.about_yourself?.first_name) +
                      ' ' +
                      (mentor?.about_yourself?.last_name &&
                        mentor?.about_yourself?.last_name)}
                  </p>
                  <p className="text-base font-semibold text-black  text-left">
                    For 1 on 1 mock interview
                  </p>
                  <p className="text-sm text-left">
                    {oneOnOneService.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-around w-full p-2">
                <div className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                  <img
                    src="../../../assets/icon/clock.png"
                    alt=""
                    className="w-4 h-3"
                  ></img>
                  <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                    {oneOnOneService.sessionDuration}
                    {oneOnOneService.sessionDurationIn}
                  </p>
                </div>
                {/* <div className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                        <img
                          src="../../../images/camera.png"
                          alt=""
                          className="w-4 h-3"
                        ></img>
                        <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                          Video session
                        </p>
                      </div> */}
                <div className="flex justify-center items-center border-2 border-gray-900 hover:border-none hover:bg-blue-700 hover:text-white text-white font-bold p-1 rounded-full">
                  <img
                    src="../../../assets/icon/mentor-dashboard/price.svg"
                    alt=""
                    className="w-4 h-3"
                  ></img>
                  <p className="text-sm text-black ml-1 hover:border-none hover:bg-blue-700 hover:text-white font-bold">
                    ₹ {oneOnOneService.finalPrice}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap">
                {timeSlots && timeSlots.length > 0 ? (
                  timeSlots.map((slot, index) => {
                    return (
                      <div key={index}>
                        <span
                          className={`flex px-8 py-2 border-2 rounded-full m-2 text-sm font-normal ${
                            slot === selectedTimeInterval
                              ? ' border border-orange-400'
                              : ''
                          }`}
                          onClick={() => setTimeInterval(slot)}
                        >
                          {slot}
                        </span>
                      </div>
                    )
                  })
                ) : (
                  <div className="text-base text-center w-full"> No available slots</div>
                )}
              </div>

              <span>
                {scheduleDetails?.daySchedules?.everyday?.time?.startTime}
              </span>
              <span>
                {scheduleDetails?.daySchedules?.everyday?.time?.startTime}
              </span>
            </div>
          </div>
          <div>
            <div className=" text-base font-normal p-8 w-full">
              {/* <DatePicker onChange={onChange} value={value} /> */}
              <BookingDatePicker
                inputProps={{
                  // style: { width: 250 },
                  placeholder: 'Select Date',
                }}
                timeFormat={false}
                value={bookingdate}
                minDate={new Date()}
                dateFormat="DD-MM-YYYY"
                isValidDate={disablePastDt}
                //isValidDate={disableCustomDt}
                // onChange={(val) => setDt(val)}
                onChange={handleBookingDate}
              />
            </div>
            <div className="select-wrapper  text-base font-normal w-full p-6">
              <TimezoneSelect
                value={timeZone}
                onChange={setTimeZone}
                timezones={{
                  ...allTimezones,
                  'America/Lima': 'Pittsburgh',
                  'Europe/Berlin': 'Frankfurt',
                }}
              />
            </div>
          </div>
          {/* gird */}
        </div>
        <div className="flex justify-evenly w-full">
          <div className="py-4 px-6 border-t border-gray-300 w-full">
            <div className="flex justify-center items-center w-full">
              <button
                className="flex justify-center items-center text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-2 border border-black w-full rounded-md"
                onClick={() => closeBookSession1()}
              >
                <span className="text-base font-semibold py-1">Close</span>
              </button>
            </div>
          </div>

          <div className="py-4 px-6 border-t border-gray-300 w-full">
            <div className="flex justify-center items-center w-full">
              <button
                className="flex justify-center items-center text-base bg-white hover:bg-gray-900 text-black hover:text-white font-bold py-2 border border-black w-full rounded-md"
                onClick={() => handleBookSession3()}
              >
                <span className="text-base font-semibold py-1">Continue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step2
