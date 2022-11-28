import { API, Auth } from 'aws-amplify'
import { config } from 'process'
import React, { useEffect, useState } from 'react'
import { color } from '../../public/theme/Color'
import BoxBodyContainer from '../components/common/BoxBodyContainer'

import TextField from '../ui-kit/TextField'
// import {createDemo} from '../../src/graphql/mutations';
import * as mutations from '../../src/graphql/mutations'

import KYC_header from '../components/registration/KYC_header'
import { listDemoSkillsLists, listTodos } from '../../src/graphql/queries'
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

  const router = useRouter()
  const [link, setLink] = useState(null)
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
    if (!domainList.length) {
      getCurrentUser()
    }
  }, [])

  const getCurrentUser = async () => {
    const { username } = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    })

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

  const saveDomainSkills = async () => {
    setLoading(true)
    try {
      const data = { value: domainName }
      const postData = await API.graphql({
        query: mutations.createDemoSkillsList,
        variables: { input: domainName },
      })

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
                Get ready to mentor and share
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
                Domain you want to provide mentorship
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
                      label={showDomainInput ? 'Save' : 'Add another'}
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
                  </>
                ) : (
                  <SkeletonLoader />
                )}
              </div>
              <Button
                label={'Continue'}
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
                    if (url && selectedList.length) {
                      dispatch({
                        type: ACTION_KEYS.KYCSTEP1,
                        payload: {
                          linkedIn_url: link,
                          domain_id: selectedList,
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
                    router.push('/register/KYC_step2')
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
