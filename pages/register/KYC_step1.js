import { API, Auth } from 'aws-amplify'
import { config } from 'process'
import React, { useEffect, useState } from 'react'
import { color } from '../../public/theme/Color'
import BoxBodyContainer from '../components/common/BoxBodyContainer'

import TextField from '../ui-kit/TextField'
// import {createDemo} from '../../src/graphql/mutations';
import * as mutations from '../../src/graphql/mutations'

import KYC_header from '../components/registration/KYC_header'
import {
  listDemoSkillsLists,
  listDomainInterestedLists,
  listTodos,
} from '../../src/graphql/queries'
import {
  deleteDomainInterestedList,
  deleteDemoSkillsList,
} from '../../src/graphql/mutations.js'
import Button from '../ui-kit/Button'
import SkeletonLoader from '../ui-kit/SkeletonLoader'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import useWindowDimensions from '../../public/utils/useWindowDimensions'

import ACTION_KEYS from '../../constants/action-keys'
import Toaster from '../ui-kit/Toaster'

Auth.configure(config)

const spaceValidation = new RegExp(/^[^ ]*$/)
const KYC_step1 = () => {
  const registerType = useSelector((state) => state.AuthReducer)
  const dispatch = useDispatch()

  const { width, height } = useWindowDimensions()
  debugger
  debugger
  const router = useRouter()
  const url =
    registerType?.kycStep1?.[registerType?.registerType]?.linkedIn_url ||
    registerType?.kycStep1?.[registerType?.registerType]?.url ||
    ''

  const [link, setLink] = useState(url)
  const [domainList, setdomainList] = useState([])
  const [showDomainInput, setShowDomainInput] = useState(false)
  const [domainName, setDomainName] = useState({ value: '' })
  const [loading, setLoading] = useState(false)
  const [domainListLoading, setDomainListLoading] = useState(true)
  const [selectedList, setSelectedList] = useState([])
  const [showtoast, setShowToast] = useState(false)
  const [toastContent, setToastContent] = useState({ message: '', type: '' })

  //   console.log(registerType?.registerType)

  useEffect(() => {
    // debugger
    if (!domainList.length) {
      getCurrentUser()
    }
  }, [])
  useEffect(() => {
    debugger
    if (registerType?.registerType) {
      if (registerType?.registerType === 'STUDENT') {
        if (
          registerType?.kycStep1?.[registerType?.registerType]?.interestedSkills
            ?.length > 0
        ) {
          setSelectedList(
            registerType?.kycStep1?.[registerType?.registerType]
              ?.interestedSkills,
          )
        }
      } else {
        if (
          registerType?.kycStep1?.[registerType?.registerType]?.domain_id
            ?.length > 0
        ) {
          setSelectedList(
            registerType?.kycStep1?.[registerType?.registerType]?.domain_id,
          )
        }
      }
    }
  }, [registerType, domainList])
  const deleteDomainList = async (id) => {
    debugger
    setLoading(true)
    if (registerType?.registerType === 'STUDENT') {
      try {
        const listData = await API.graphql({
          query: deleteDomainInterestedList,
          variables: { input: { id } },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      } catch (err) {
        console.log('err', err)
      }
    } else {
      try {
        const listData = await API.graphql({
          query: deleteDemoSkillsList,
          variables: { input: { id } },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
      } catch (err) {
        console.log('err', err)
      }
    }
    setLoading(false)
  }
  const getCurrentUser = async () => {
    const { username } = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    })
    if (registerType?.registerType === 'STUDENT') {
      try {
        const listData = await API.graphql({
          query: listDomainInterestedLists,
        })
        console.log(listData)

        setdomainList(listData?.data?.listDomainInterestedLists?.items)
        setDomainListLoading(false)
        setShowDomainInput(false)
        setLoading(false)
      } catch (err) {
        console.log('err', err)
        setDomainListLoading(false)
      }
    } else {
      try {
        const listData = await API.graphql({
          query: listDemoSkillsLists,
        })
        setdomainList(listData?.data?.listDemoSkillsLists?.items)
        setDomainListLoading(false)
        setShowDomainInput(false)
        setLoading(false)
      } catch (err) {
        console.log('err', err)
        setDomainListLoading(false)
      }
    }
  }

  const saveDomainSkills = async () => {
    debugger
    if (!domainName) {
      setShowDomainInput(false)
      return
    }
    setLoading(true)
    try {
      const data = { value: domainName }

      if (registerType?.registerType === 'STUDENT') {
        const postData = await API.graphql({
          query: mutations.createDomainInterestedList,
          variables: { input: domainName },
        })
      } else {
        const postData = await API.graphql({
          query: mutations.createDemoSkillsList,
          variables: { input: domainName },
        })
      }
      getCurrentUser()
    } catch (e) {
      console.log('e', e)
      setLoading(false)
      setShowDomainInput(false)
    }
  }

  useEffect(() => {
    if (link?.length || selectedList.length) {
      setShowToast(false)
    }
  }, [link, selectedList.length])

  return (
    <BoxBodyContainer
      styleOverride={{ alignItems: 'flex-start' }}
      body={
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <KYC_header
            stepImage={
              registerType?.registerType === 'STUDENT'
                ? require('../../public/assets/icon/stu_StepIndicator.png')
                : require('../../public/assets/icon/StepIndicator.png')
            }
          />
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  color: color.blackVariant,
                  fontWeight: 400,
                  fontSize: 36,
                  marginTop: 60,
                }}
              >
                {registerType?.registerType === 'STUDENT'
                  ? 'Learn and grow from mentors'
                  : 'Get ready to mentor and share'}
              </div>
              <div
                style={{
                  color: color.lightGrey,
                  fontSize: 16,
                  fontWeight: 400,
                  marginTop: 16,
                }}
              >
                Add some basic details to personalise the experience
              </div>
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 60,
                }}
              >
                <TextField
                  label="LinkedIn Profile URL"
                  id="url"
                  type="url"
                  placeholder="Paster Linkedin profile URL "
                  value={link}
                  styleOverride={{
                    backgroundColor: color.white,
                    height: 56,
                  }}
                  textStyleOverride={{
                    backgroundColor: color.white,
                    paddingLeft: 8,
                  }}
                  link="https://linkedin.com"
                  infoMsg="Get yout linkedin URL, click here."
                  onChangeValue={(text) => {
                    if (spaceValidation.test(text.target.value)) {
                      setLink(text.target.value)
                    }
                  }}
                  // errMsg={touched.email && errors.email}
                />
              </div>
              <div
                style={{
                  color: color.blackVariant,
                  marginBottom: 20,
                  fontSize: 16,
                  fontWeight: 400,
                  marginTop: 56,
                  marginBottom: 24,
                }}
              >
                {registerType?.registerType === 'STUDENT'
                  ? 'Domain you are intrested to learn'
                  : 'Domain you want to provide mentorship'}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  flex: 1,
                  maxWidth: 700,
                }}
              >
                {!domainListLoading ? (
                  <>
                    {domainList?.map((item, index) => {
                      let selectedItem = false
                      selectedList?.map((key, index) => {
                        if (key?.id === item?.id) {
                          selectedItem = true
                        }
                      })

                      return (
                        <div className="relative">
                          <div
                            key={index.toString()}
                            style={{
                              cursor: 'pointer',
                              paddingLeft: 20,
                              paddingRight: 20,
                              // backgroundColor: "red",
                              borderWidth: 1,
                              borderColor: selectedItem
                                ? color.btnColor
                                : color.blackVariant,
                              borderRadius: 22,
                              marginRight: 10,
                              marginBottom: 20,
                              height: 43,
                              alignItems: 'center',
                              justifyContent: 'center',
                              display: 'flex',
                            }}
                            onClick={() => {
                              let count = 0
                              if (selectedList.length) {
                                selectedList.map((items, index) => {
                                  if (items?.id === item?.id) {
                                    count = 1
                                    setSelectedList(
                                      selectedList.filter(
                                        (items) => items?.id !== item?.id,
                                      ),
                                    )
                                  }
                                })
                                if (count == 0) {
                                  setSelectedList((selectedList) => [
                                    ...selectedList,
                                    item,
                                  ])
                                }
                              } else
                                setSelectedList((selectedList) => [
                                  ...selectedList,
                                  item,
                                ])
                            }}
                          >
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 400,
                                color: color.blackVariant,
                              }}
                            >
                              {item?.value}
                            </div>
                          </div>
                          {/* <div
                            className="w-10 -top-5 text-sm right-0 h-10 rounded-full bg-red-600 text-white cursor-pointer absolute flex justify-center items-center p-5"
                            onClick={deleteDomainList.bind(null, item?.id)}
                          >
                            X
                          </div> */}
                        </div>
                      )
                    })}
                    {showDomainInput && (
                      <input
                        style={{
                          backgroundColor: 'transparent',
                          borderRadius: 25,
                          borderWidth: 1,
                          borderColor: color.blackVariant,
                          paddingLeft: 20,
                          color: color.blackVariant,
                          marginRight: 10,
                          width: 129,
                          height: 43,
                          fontSize: 14,
                        }}
                        placeholder="Enter here..."
                        name="value"
                        onChange={(e) => {
                          setDomainName(() => ({
                            [e.target.name]: e.target.value,
                          }))
                        }}
                      />
                    )}
                    <Button
                      className="cursor-pointer"
                      label={
                        showDomainInput
                          ? 'Save'
                          : `Add ${domainList.length > 0 ? ' another' : ''}`
                      }
                      styleOverride={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 6,
                        paddingBottom: 6,
                        color: color.white,
                        borderWidth: 1,
                        borderColor: color.blackVariant,
                        borderRadius: 22,
                        height: 43,
                        backgroundColor: color.blackVariant,
                        width: showDomainInput ? 100 : 160,
                        fontSize: 14,
                      }}
                      loader={loading}
                      onClick={() => {
                        setShowDomainInput(true)
                        if (showDomainInput) {
                          saveDomainSkills()
                        }
                      }}
                    />
                    {showDomainInput && (
                      <Button
                        label={'Cancel'}
                        className="cursor-pointer"
                        styleOverride={{
                          paddingLeft: 20,
                          paddingRight: 20,
                          marginLeft: 20,
                          paddingTop: 6,
                          paddingBottom: 6,
                          color: color.white,
                          borderWidth: 1,
                          borderColor: color.blackVariant,
                          borderRadius: 22,
                          height: 43,
                          backgroundColor: color.blackVariant,
                          width: showDomainInput ? 100 : 160,
                          fontSize: 14,
                        }}
                        // loader={loading}
                        onClick={() => {
                          setShowDomainInput(false)
                        }}
                      />
                    )}
                  </>
                ) : (
                  <SkeletonLoader />
                )}
              </div>
              <Button
                label={'Continue'}
                className="cursor-pointer"
                styleOverride={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 6,
                  paddingBottom: 6,
                  color: color.white,
                  borderRadius: 22,
                  height: 43,
                  fontSize: 15,
                  backgroundColor: color.btnColor,
                  width: 186,
                  marginTop: 70,
                  marginBottom: 48,
                }}
                onClick={() => {
                  if (registerType?.registerType === 'STUDENT') {
                    if (link && selectedList.length) {
                      dispatch({
                        type: ACTION_KEYS.KYCSTEP1,
                        payload: {
                          linkedIn_url: link,
                          interestedSkills: selectedList,
                          registerType: 'STUDENT',
                        },
                      })
                      router.push('/register/StudentProfessionalDetails')
                    } else {
                      setToastContent({
                        message: 'Please fill all details',
                        type: 'failure',
                      })
                      setShowToast(true)
                    }
                  } else {
                    if (link && selectedList.length) {
                      dispatch({
                        type: ACTION_KEYS.KYCSTEP1,
                        payload: {
                          url: link,
                          domain_id: selectedList,
                          registerType: 'MENTOR',
                        },
                      })
                      router.push('/register/KYC_step2')
                    } else {
                      setToastContent({
                        message: 'Please fill all details',
                        type: 'failure',
                      })
                      setShowToast(true)
                    }
                  }
                }}
              />
              {showtoast ? (
                <Toaster
                  message={toastContent?.message}
                  type={toastContent.type}
                />
              ) : null}
            </div>
          </div>
        </div>
      }
    />
  )
}

export default KYC_step1
