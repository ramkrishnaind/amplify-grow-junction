import React, { useState, useEffect } from 'react'
import { API, Storage, graphqlOperation } from 'aws-amplify'
import classes from './Author.module.css'
import { listMentorRegisters } from '../../../../../src/graphql/queries'
import { listUserInfos } from '../../../../../src/graphql/queries'
import { getLoggedinUserEmail } from '../../../../../utilities/user'
const Author = () => {
  const [image, setImage] = useState('')
  const [name, setName] = useState()
  const [url, setUrl] = useState()
  const [userInfo, setUserInfo] = useState(false)
  const [convertedImage, setConvertedImage] = useState()
  const [usrName, setUsrName] = useState()

  const getUser = async () => {
    debugger
    const usrName = getLoggedinUserEmail()
    setUsrName(usrName)
    const results = await API.graphql(
      graphqlOperation(listMentorRegisters, {
        filter: { username: { contains: usrName } },
      }),
    )
    if (results.data.listMentorRegisters.items.length > 0) {
      const data = { ...results.data.listMentorRegisters.items[0] }
      if (data.profile_image) {
        const img = await Storage.get(data.profile_image)
        console.log("image - ", img)
        setImage(img)
        //setImage(await Storage.get(data.profile_image))
      }
      debugger
      // const name = data.about_yourself.first_name + ' ' + data.about_yourself.last_name
      // const url = data.about_yourself.grow_junction_url
      // setName(name)
      // setUrl(url)
      setName(data.about_yourself.first_name + ' ' + data.about_yourself.last_name)
      setUrl(data.about_yourself.grow_junction_url)
      setUserInfo(true)
      console.log("name-",name)
      console.log("url -", url)
      console.log("image - ", image)

      if (!userInfo) {
        const results = await API.graphql(
          graphqlOperation(listUserInfos, {
            filter: { username: { contains: usrName } },
          }),
        )
        if (results.data.listUserInfos.items.length > 0) {
          debugger
          const data = { ...results.data.listUserInfos.items[0] }
          if (data.profile_image) {
            const img = await Storage.get(data.profile_image)
            setImage(img)
          }
          if (!name) {
            const name = data.name
            //const url = data.grow_junction_url
            setName(name)
          }
        }
      }
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <section
      className={`${classes.container} h-60 bg-yellow-100 p-4 flex flex-col mb-15`}
    >
      <section className="mb-8 flex">
        <div className={`${classes['persona']} bg-gray-300 rounded-full`}>
          {image !== 'undefined' ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className={`${classes['persona']} rounded-full`}
            />
          ) : null}
        </div>
        <article className="flex flex-col mt-3">
          <p className='text-base font-semibold'>{name}</p>
          <p className="text-sm font-normal text-gray-600">{url}</p>
        </article>
      </section>
      <section>
        <button className={`${classes.btn} w-full bg-white border-2 text-2xl`}>
          Publish a post
        </button>
      </section>
    </section>
  )
}

export default Author
