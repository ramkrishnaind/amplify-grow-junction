import React from 'react'
import Link from 'next/link'
import { API, Auth } from 'aws-amplify'
import TextField from '../../../../../pages/ui-kit/TextField'
import services from '../../../../../pages/services'
import classes from './OneOnOne.module.css'
import { toast } from 'react-toastify'
import { deleteOneOnOne } from '../../../../../src/graphql/mutations'
const OneOnOne = ({ services }) => {
  debugger
  const handleChange = () => {}
  const deletePost = async (id) => {
    debugger
    console.log('id', id)
    try {
      const usr = await Auth.currentAuthenticatedUser()
      console.log('usr', usr)
      await API.graphql({
        query: deleteOneOnOne,
        variables: { input: { id } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      toast.success('Profile deleted successfully')
      window.location.href = window.location.href
    } catch (error) {
      toast.error(`Delete Error:${error.errors[0].message}`)
    }
  }
  return (
    <>
      <div className="py-5 relative items-center flex-col md:flex-row md:flex md:justify-between">
        <TextField
          onChangeValue={handleChange}
          // value={values.listedPrice}
          placeholder=""
          name="listedPrice"
          type="text"
          style={{ marginBottom: 0 }}
          // classOverride="w-5/6"
        />
        <img
          src="/assets/icon/mentor-dashboard/search.svg"
          className="absolute md:right-44 top-10"
        />
        <button className="text-lg py-2 block mx-auto mt-5 md:mt-0 rounded-md text-white px-5 bg-gray-800">
          <Link href="/mentor/services/add">Add Service</Link>
        </button>
      </div>
      {services.length > 0 && (
        <div className="my-3 bg-white p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
            {services.map((item, index) => (
              <div className="flex justify-center align-center mb-10">
                <div
                  className={` bg-white text-center border border-b-2 rounded-2xl shadow-lg m-4 w-auto  md:w-5/6 lg:w-5/6 ${classes.itemContainer}`}
                >
                  <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                    <div className="flex justify-between p-2">
                      <img
                        src="../../../assets/icon/clock.png"
                        alt=""
                        className="w-3 h-3 mt-2"
                      ></img>
                      <span className="text-base font-normal md:text-xl lg:text-xl ml-2">
                        1 on 1 mock interview
                      </span>
                    </div>

                    <div>
                      <div className="group relative text-base">
                        <button className="py-4 px-4 rounded inline-flex items-center group">
                          <img
                            src="../../../assets/icon/menu.png"
                            alt=""
                            className=""
                          ></img>
                        </button>

                        {/* menu list */}
                        <ul className="rounded absolute hidden text-black group-hover:block w-30 border-2 border-gray-50 shadow-md">
                          <li
                            className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer border-b-2 border-gray-300 text-left"
                            onClick={() => setShowReschedule(true)}
                          >
                            Reschedule
                          </li>
                          <li
                            className="bg-white hover:bg-gray-300 py-4 px-2 cursor-pointer text-left"
                            onClick={() => deletePost(item.id)}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-start text-black text-2xl font-semibold p-6">
                      {item.sessionTitle}
                    </div>
                    <div className="flex justify-start text-black text-xl font-normal px-6 mb-10"></div>
                  </div>
                  <div className="py-4 px-6 border-t border-gray-300 text-gray-600 flex justify-between">
                    {/* <div className="flex justify-end"> */}
                    <div className="flex">
                      {/* <button
                          className="flex justify-center items-center bg-white border-2 border-gray-900 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black  rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                          type="button"
                        > */}
                      <div className="flex items-center py-1 px-3 border-2 mr-5 border-black rounded-full">
                        <img
                          src="/assets/icon/mentor-dashboard/clock-two.svg"
                          className="h-5 mr-5"
                        />
                        <span className="text-sm font-semibold py-3">
                          {item.sessionDuration} {item.sessionDurationIn}
                        </span>
                      </div>

                      {/* </button> */}

                      {/* <button
                          className="flex justify-center items-center bg-black hover:bg-amber-400 text-white rounded-full mr-5 w-full md:w-1/4 lg:w-1/4"
                          type="button"
                        > */}
                      <div className="flex items-center  py-1 px-4 border-2 border-black rounded-full">
                        <img
                          src="/assets/icon/mentor-dashboard/price.svg"
                          className="h-5 mr-5"
                        />
                        <span className="text-sm font-semibold py-3">
                          ₹
                          {item.listedPrice === item.finalPrice ? (
                            item.finalPrice
                          ) : (
                            <>
                              <span className="  text-red-800 bold">
                                <s className="bold">{item.listedPrice}</s>
                              </span>{' '}
                              <span className="bold">{item.finalPrice}</span>
                            </>
                          )}
                        </span>
                      </div>
                      {/* </button> */}
                    </div>
                    <div className="flex items-center bg-black text-white py-1 px-3 border-2 mr-5 border-white rounded-full">
                      <img
                        src="/assets/icon/mentor-dashboard/link.svg"
                        className="h-5 mr-5"
                      />
                      <span className="text-sm font-semibold py-3">
                        {item.sessionDuration || 0} {item.sessionDurationIn}
                      </span>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* outer */}
        </div>
      )}
    </>
  )
}

export default OneOnOne
