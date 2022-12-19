import React, { useState } from 'react'
import { Formik, useFormikContext } from 'formik'
import TimezoneSelect, { allTimezones } from 'react-timezone-select'
import TextField from '../../../pages/ui-kit/TextField'
//import MultipleDatePicker from 'react-multiple-datepicker'
import DatePicker from 'react-multi-date-picker'
import Icon from 'react-multi-date-picker/components/icon'
import { date } from 'yup'

const Schedule = () => {
  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  )

  // const today = new Date()
  // const tomorrow = new Date()
  // tomorrow.setDate(tomorrow.getDate() + 1)
  //const [values, setValues] = useState([today, tomorrow])
  //const [btnText, setBtnText] = useState("")
  //  const showDates = () =>{
  //   setBtnText("Add unavailable dates")
  // }

  // const weekDays1 = {
  //   0:"Sunday",
  //   1: "Monday",
  //   2: "Tuesday",
  //   3: "Wednesday",
  //   4: "Thrusday",
  //   5: "Friday",
  //   6: "Saturday"
  // }

  // const weekDays = useState([
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thrusday",
  //   "Friday",
  //   "Saturday"
  // ])

  // const weekDays = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thrusday",
  //   "Friday",
  //   "Saturday"
  // ]

  //   weekDays.forEach((weekDay) => {

  //     console.log({weekDay})

  //   })
  //

  // weekDays.map((day) => {
  //   console.log(day)
  // })

  const [unavailableDate, setUnavailableDate] = useState([])
  const [visible, setVisible] = useState(false)

  const [isChecked, setIsChecked] = useState(false)
  // const [show, setShow] = useState(true)
  // const [everyDayShow, setEveryDayShow] = useState(false)

  // const handleAllDaysSameTime = (e) => {

  //   if (e.target.checked) {
  //     console.log("checked")
  //     setShow(show)
  //     setEveryDayShow(!everyDayShow)
  //     setIsChecked(!isChecked)
  //   }
  //   if (!e.target.checked){
  //     console.log("unchecked")
  //     setShow(!show)
  //   }
   
  // }

  

  // const handleCheck =() =>{
  //   setEveryDayShow(!everyDayShow)
  // }
  // if(isChecked){
  //   console.log("checkedddd")
  
  // }
  // else{
  //   console.log("uncheckedddd")
    
  // }
  const handleDate = (date) => {
    console.log('length -', date.length)
    date.map((v) => {
      const dt = v.day + '/' + v.month.number + '/' + v.year
      const found = unavailableDate.find((date) => date === dt)
      if (!found) {
        unavailableDate.push(v.day + '/' + v.month.number + '/' + v.year)
      }

      console.log('unavailableDate -  ', unavailableDate)
      setVisible(false)
    })
    //console.log("dates - ", values)
  }

  const handleRemoveDate = (dt) => {
    // debugger
    const newUnavailableDate = unavailableDate.filter((uDate) => uDate !== dt)
    setUnavailableDate(newUnavailableDate)
  }

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(values, e) => {
          const { setSubmitting } = e
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
          setProfileState(values)
        }}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form>
              <div className="flex flex-col md:flex-row lg:flex-row w-full px-20 py-10">
                <div className="flex flex-col md:flex-row lg:flex-row w-full justify-between">
                  <div className="flex justify-center items-center text-2xl font-semibold text-gray-900 py-6">
                    Availability details
                  </div>
                  <div className="flex flex-row">
                    <div className="flex justify-center items-center text-black text-base font-semibold">
                      Reset all
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          handleSubmit(e)
                        }}
                        className="mt-2 text-base bg-white hover:bg-gray-900 hover:text-white text-black border-gray-900 font-bold py-4 px-6 ml-10 border rounded"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:m-20 lg:m-20 md:-mt-5 lg:-mt-5 w-full md:w-auto lg:w-auto flex flex-col md:flex-row lg:flex-row">
                <div className="basis-3/5 justify-between w-full md:w-auto lg:w-auto flex flex-col md:flex-row lg:flex-row">
                  <div className="text-gray-900 text-base font-semibold mt-1">
                    Select days you’ll be available
                  </div>
                  <div className="text-gray-900 text-base font-semibold mt-1">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3"
                        id="allDaysSameTime"
                        name="allDaysSameTime"
                        onChange={() => setIsChecked((prev) => !prev)}
                      ></input>
                      <span className="text-sm">
                        I’m Available same time everyday
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 md:m-20 lg:m-20 md:-mt-10 lg:-mt-10 w-full md:w-auto lg:w-auto  flex flex-col md:flex-row  lg:flex-row">
                <div className="basis-3/5 bg-white py-4 rounded-lg">
                  {isChecked ? (
                    <div
                      id="everydayId"
                      className=" flex flex-col md:flex-row  lg:flex-row w-full"
                    >
                      <div className="basis-1/5">
                        <div className="flex justify-start ml-5 md:ml-10 lg:ml-10 mt-10">
                          <input type="checkbox" className="mr-3"></input>
                          <span className="text-xl font-semibold text-gray-900">
                            Everyday
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row basis-2/3">
                        <div className="basis-1/2 ml-5 mr-10">
                          <span className="text-sm text-gray-900 font-normal">
                            Start Time
                          </span>
                          <TextField
                            type="time"
                            placeholder="₹"
                            value={values.workshopTime}
                            onChangeValue={handleChange}
                            name="workshopTime"
                            className="w-full"
                          />
                        </div>
                        <div className="basis-1/2  mr-5">
                          <span className="text-sm text-gray-900 font-normal">
                            End Time
                          </span>
                          <TextField
                            type="time"
                            placeholder="₹"
                            value={values.workshopTime}
                            onChangeValue={handleChange}
                            name="workshopTime"
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  ) : 
                   ( 
                    <div>
                  {/* <div className="w-full h-px bg-gray-200 border-0"></div> */}
                  <div
                    id="sundayId"
                    className=" flex flex-col md:flex-row  lg:flex-row w-full"
                  >
                    <div className="basis-1/5">
                      <div className="flex justify-start ml-5 md:ml-10 lg:ml-10 mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Sunday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2 ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div
                    id="mondayId"
                    className=" flex flex-col md:flex-row  lg:flex-row w-full"
                  >
                    <div className="basis-1/5">
                      <div className="flex justify-start ml-5 md:ml-10 lg:ml-10 mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Monday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div
                    id="tuesdayId"
                    className=" flex flex-col md:flex-row  lg:flex-row w-full"
                  >
                    <div className="basis-1/5">
                      <div className="flex justify-start ml-5 md:ml-10 lg:ml-10 mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Tuesday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5  mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div
                    id="wednesdayId"
                    className=" flex flex-col md:flex-row  lg:flex-row w-full"
                  >
                    <div className="basis-1/5">
                      <div className="flex justify-start ml-5 md:ml-10 lg:ml-10 mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Wednesday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div
                    id="thursdayId"
                    className=" flex flex-col md:flex-row  lg:flex-row w-full"
                  >
                    <div className="basis-1/5">
                      <div className="flex justify-start ml-5 md:ml-10 lg:ml-10 mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Thursday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div
                    id="fridayId"
                    className=" flex flex-col md:flex-row  lg:flex-row w-full"
                  >
                    <div className="basis-1/5">
                      <div className="flex justify-start ml-5 md:ml-10 lg:ml-10 mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Friday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200 border-0"></div>
                  <div
                    id="saturdayId"
                    className=" flex flex-col md:flex-row  lg:flex-row w-full"
                  >
                    <div className="basis-1/5">
                      <div className="flex justify-start ml-5 md:ml-10 lg:ml-10 mt-10">
                        <input type="checkbox" className="mr-3"></input>
                        <span className="text-xl font-semibold text-gray-900">
                          Saturday
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row basis-2/3">
                      <div className="basis-1/2  ml-5 mr-10">
                        <span className="text-sm text-gray-900 font-normal">
                          Start Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                      <div className="basis-1/2  mr-5">
                        <span className="text-sm text-gray-900 font-normal">
                          End Time
                        </span>
                        <TextField
                          type="time"
                          placeholder="₹"
                          value={values.workshopTime}
                          onChangeValue={handleChange}
                          name="workshopTime"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  </div>
                  ) }


                </div>

                <div className="basis-2/5">
                  <div className="flex flex-col justify-start bg-white px-4 py-4  border-2 rounded-2xl m-20">
                    <span className="text-gray-900 font-semibold text-lg">
                      Unavailable dates
                    </span>
                    <span className="text-gray-900 font-normal text-sm mt-5">
                      Add dates when you will be unavailable to be scheduled
                    </span>
                    <div className="flex justify-start item-center mt-10">
                      <div className="flex justify-start items-start border-2  border-gray-900 bg-white hover:text-white hover:bg-gray-900 text-gray-900 rounded-md w-auto">
                        <span className="text-base font-semibold py-3 px-10">
                          Add unavailable dates
                        </span>
                        <DatePicker
                          render={<Icon />}
                          multiple
                          value={values}
                          minDate={new Date()}
                          onChange={(date) => handleDate(date)}
                          onClose={setVisible(true)}
                        />
                      </div>
                    </div>
                    <div className="w-full h-px bg-gray-200 border-0 mt-10"></div>
                    <span className="text-sm px-5 py-3 font-semibold mt-10">
                      You are unavailable on
                    </span>

                    <div>
                      {unavailableDate.length > 0 && (
                        <div className=" text-lg uppercase">
                          {/* <span className="px-5">Date</span>
                        <span className="px-10">Action</span> */}
                        </div>
                      )}

                      {visible &&
                        unavailableDate.map((dt) => (
                          <div key={dt} className="px-5 py-3 text-lg ">
                            <span>{dt}</span>
                            <span
                              className="text-red-700 font-semibold cursor-pointer py-3 px-8 rounded-full hover:bg-gray-200  hover:text-red-700w-32 "
                              onClick={handleRemoveDate.bind(null, dt)}
                            >
                              Remove
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default Schedule
