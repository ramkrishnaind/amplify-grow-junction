import React, { useEffect, useState } from 'react'
import { color } from '../../public/theme/Color'
import BoxBodyContainer from '../components/common/BoxBodyContainer'
import KYC_header from '../components/registration/KYC_header'
import Button from '../ui-kit/Button'
import SkeletonLoader from '../ui-kit/SkeletonLoader'
import * as mutations from '../../src/graphql/mutations'
import * as queries from '../../src/graphql/queries'
import { API, Auth } from 'aws-amplify'
import TextField from '../ui-kit/TextField'
import ACTION_KEYS from '../../constants/action-keys'
import { countryCodeJson } from '../../public/utils/CountryCodeJson'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { verifyStep4 } from '../../public/utils/schema'
import { v4 as uuid } from 'uuid'

const numberValidation = new RegExp(/^[0-9]{0,10}$/)
const KYC_step4 = () => {
  const registerType = useSelector((state) => state.AuthReducer)
  const router = useRouter()
  const dispatch = useDispatch()
  //   const [phoneNumber, setPhoneNumber] = useState()
  const [loading, setLoading] = useState()
  debugger
  const initialState = {
    phoneNumber:
      registerType?.kycStep4?.[registerType.registerType]?.phoneNumber,
  }
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
                ? require('../../public/assets/icon/stu_StepIndicator3.png')
                : require('../../public/assets/icon/StepIndicator4.png')
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
                // alignSelf: "center",
                // backgroundColor: "red",
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
                Receive updates on whatsapp
              </div>
              <div
                style={{
                  color: color.lightGrey,
                  fontSize: 16,
                  fontWeight: 400,
                  marginTop: 16,
                  marginBottom: 60,
                }}
              >
                Add your Whats app number so that you get reminder of session on
                time
              </div>
              <Formik
                enableReinitialize={true}
                initialValues={initialState}
                onSubmit={async (values, { setErrors, setSubmitting }) => {
                  debugger
                  setSubmitting(true)

                  const id = uuid()
                  console.log('entry')
                  if (registerType?.registerType === 'STUDENT') {
                    let payload = {
                      ...registerType?.professionalDetails?.payload,
                      ...registerType?.kycStep1,
                      phone_number: values.phoneNumber,
                    }
                    try {
                      const postData = await API.graphql({
                        query: mutations.createStudentRegister,
                        variables: { input: payload },
                        authMode: 'AMAZON_COGNITO_USER_POOLS',
                      })
                      console.log(postData)
                      if (postData) {
                        let user = await Auth.currentAuthenticatedUser()
                        let data = {
                          'custom:kyc_done': 'true',
                        }
                        Auth.updateUserAttributes(user, data)
                          .then((res) => {
                            console.log('res', res)
                            router.push('/register/SuccessRegister')
                            setSubmitting(false)
                          })
                          .catch((e) => {
                            console.log('err', e)
                          })
                      }
                    } catch (e) {
                      console.log('e', e)
                    }
                  } else {
                    let payload = {
                      ...registerType?.kycStep2,
                      ...registerType?.kycStep1,
                      phone_number: values.phoneNumber,
                    }
                    console.log(payload)
                    try {
                      const postData = await API.graphql({
                        query: mutations.createMentorRegister,
                        variables: { input: payload },
                        authMode: 'AMAZON_COGNITO_USER_POOLS',
                      })
                      console.log(postData)
                      if (postData) {
                        let user = await Auth.currentAuthenticatedUser()
                        let data = {
                          'custom:kyc_done': 'true',
                        }
                        Auth.updateUserAttributes(user, data)
                          .then((res) => {
                            console.log('res', res)
                            router.push('/register/SuccessRegister')
                            setSubmitting(false)
                          })
                          .catch((e) => {
                            console.log('err', e)
                          })
                      }
                    } catch (e) {
                      console.log('e', e)
                    }
                  }
                }}
                validationSchema={verifyStep4}
                validateOnChange={true}
                validateOnBlur={true}
                validateOnMount={true}
              >
                {({
                  handleChange,
                  values,
                  isSubmitting,
                  errors,
                  touched,
                  handleBlur,
                  setErrors,
                  handleSubmit,
                  setFieldValue,
                  ...restProps
                }) => (
                  <>
                    <TextField
                      label="Whatsapp Number"
                      id="number"
                      // type="number"
                      placeholder="000 000 000"
                      value={values.phoneNumber}
                      phoneNumber={true}
                      onChangeValue={(text) => {
                        if (numberValidation.test(text.target.value)) {
                          setFieldValue('phoneNumber', text.target.value)
                        }
                      }}
                      styleOverride={{
                        backgroundColor: color.white,
                        height: 56,
                      }}
                      textStyleOverride={{
                        backgroundColor: color.white,
                        paddingLeft: 8,
                      }}
                      // errMsg={touched.email && errors.email}
                    />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <Button
                        label={'Previous'}
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
                          backgroundColor: color.blackVariant,
                          width: 186,
                          marginTop: 70,
                          marginBottom: 48,
                          marginRight: 24,
                        }}
                        loader={loading}
                        onClick={() => {
                          debugger
                          dispatch({
                            type: ACTION_KEYS.KYCSTEP4,
                            payload: {
                              phoneNumber: values.phoneNumber,
                              registerType: registerType?.registerType,
                            },
                          })
                          //   setShowDomainInput(true);
                          //   if (showDomainInput) {
                          //     saveDomainSkills();
                          //   }
                          // router.push("/register/KYC_step1    ");
                          router.back()
                        }}
                      />
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
                        loader={isSubmitting}
                        // onClick={() => {
                        //   //   setShowDomainInput(true);
                        //   //   if (showDomainInput) {
                        //   //     saveDomainSkills();
                        //   //   }
                        //   // router.push("/register/MentorAvailability");
                        // }}
                        onClick={(e) => {
                          debugger
                          handleSubmit(e)
                        }}
                      />
                    </div>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default KYC_step4
