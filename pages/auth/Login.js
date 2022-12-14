import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { color } from '../../public/theme/Color'

// import 'react-multi-carousel/lib/styles.css';

// import {Auth} from 'aws-amplify';
import { Formik } from 'formik'

// import {CognitoUser} from '@aws-amplify/auth';

// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import dynamic from 'next/dynamic'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Router, { useRouter } from 'next/router'
import useWindowDimensions from '../../public/utils/useWindowDimensions'

import { RegistrationSchema, SignInSchema } from '../../public/utils/schema'
import TextField from '../ui-kit/TextField'
import Button from '../ui-kit/Button'
import Header from '../components/common/Header'
import { Auth } from 'aws-amplify'
import Link from 'next/link'
import {
  RegisterTypeRequest,
  StoreUserAuth,
} from '../../redux/actions/AuthAction'
import { useDispatch, useSelector } from 'react-redux'

let productsp = [
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'Brand Name',
    url: 'products-number-1',
    price: 100,
  },
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'Brand Name',
    url: 'products-number-1',
    price: 100,
  },
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'Brand Name',
    url: 'products-number-1',
    price: 100,
  },
]

const initialState = {
  email: '',
  password: '',
}

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  //   dotsClass: {backgroundColor: 'red'},

  //   dotsContainer: {backgroundColor: 'red'},
  navClass: ['owl-prev', 'owl-next'],
  navText: ['', ''],
  responsive: {
    0: {
      items: 1,
    },
    // 400: {
    //   items: 1,
    // },
    // 600: {
    //   items: 2,
    // },
    // 700: {
    //   items: 3,
    // },
    // 1000: {
    //   items: 4,
    // },
  },
}

const spaceValidation = new RegExp(/^[^ ]*$/)
const Login = (props) => {
  const registerType = useSelector((state) => state.AuthReducer)

  //   const {width, height} = props;
  const { width, height } = useWindowDimensions()
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  //   console.log(width);
  const router = useRouter()
  const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  })

  useEffect(() => {
    // router.beforePopState(({ as }) => {
    //   if (as !== router.asPath) {
    //     // Will run when leaving the current page; on back/forward actions
    //     // Add your logic here, like toggling the modal state
    //     console.log('entry')
    //   }
    //   return true
    // })
    // return () => {
    //   router.beforePopState(() => true)
    // }
    // Router.reload()
  }, []) // Ad
  //   const landscapeHandler = () => {
  //     console.log('emntry ddasd')
  //     Router.reload()
  //   }
  //   useEffect(() => {
  //     console.log('asdsads', typeof window)
  //     if (typeof window !== 'undefined') {
  //       window
  //         .matchMedia('((orientation:landscape)')
  //         .addEventListener('change', landscapeHandler)
  //     }
  //     // component Will Unmount
  //     return () => {
  //       if (typeof window !== 'undefined') {
  //         window.removeEventListener('change', landscapeHandler)
  //       }
  //     }
  //   }, [])

  //   const isBrowser = () => typeof window !== 'undefined'

  //   // node
  //   console.log(isBrowser()) // false

  //   // browser
  //   console.log(isBrowser()) // true

  //   const [registration, setRegistration] = useState(initialState);

  //   const onChange = (e: any) => {
  //     setRegistration(() => ({
  //       ...registration,
  //       [e.target.id]: e.target.value,
  //     }));
  //   };

  const handleSubmit = async () => {
    // if(!registration.title || !registration.content) return
    // const id = uuidNum;
    // registration.id = id;
    // console.log(registration);
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: color.headerColor,
      }}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header
          btnName="Create Account"
          onClickBtn={() => {
            router.push('/auth/TypeOfRegister')
          }}
          style={{
            backgroundColor: color.blackVariant,
            height: 42,
            width: 167,
            fontSize: 16,
          }}
          //   btnStlye={{width: 100}}
        />
        <div style={{ borderWidth: 1, borderColor: color.divider }} />

        <div
          style={{
            paddingLeft: 140,
            paddingRight: 140,
            backgroundColor: color.headerColor,
          }}
        >
          <div
            style={{ color: color.blackVariant, fontSize: 28, marginTop: 56 }}
          >
            Welcome to Grow Junction
          </div>
          <div
            style={{
              fontSize: 16,
              color: color.blackVariant,
              marginBottom: 40,
            }}
          >
            Fill in the details to create your account as Student
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialState}
            onSubmit={async (values, { setErrors }) => {
              debugger
              setLoader(true)
              let username = values.email
              let password = values.password
              try {
                const user = await Auth.signIn({
                  username,
                  password,
                })

                if (user) {
                  console.log('user', user)
                  StoreUserAuth(dispatch, user)
                  Auth.currentUserInfo()
                    .then((res) => {
                      setLoader(false)
                      console.log(res?.attributes?.email)
                      Object.entries(res?.attributes).map((item, index) => {
                        let registerType
                        if (item[0] === 'custom:register_type') {
                          RegisterTypeRequest(dispatch, item[1])
                          registerType = item[1]
                        }
                        debugger
                        if (registerType) {
                          if (registerType === 'STUDENT') {
                            router.push('/student')
                          } else {
                            if (item[0] === 'custom:kyc_done') {
                              router.push('/mentor')
                            } else {
                              router.push('/register/KYC_step1')
                            }
                          }
                        }
                      })
                    })
                    .catch((e) => {})
                }
              } catch (e) {
                console.log('e', e)
                setLoader(false)
                if (
                  e
                    ?.toString()
                    ?.includes(
                      'An account with the given email already exists.',
                    )
                ) {
                  setErrors({ email: 'User email id is already registered' })
                } else if (e?.toString()?.includes('User is not confirmed.')) {
                  router.push('/auth/VerifyEmail')
                } else if (
                  e?.toString()?.includes('ResourceNotFoundException') ||
                  e?.toString()?.includes('UserNotFoundException')
                ) {
                  setErrors({ email: 'User email id is not registered' })
                }
              }
            }}
            validationSchema={SignInSchema}
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
                <form autoComplete="off">
                  <input type="hidden" value="prayer" />
                  {/* <input type="email" /> */}
                  <TextField
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="examplemail@gmail.com"
                    value={values.email}
                    onChangeValue={(text) => {
                      if (spaceValidation.test(text.target.value)) {
                        setFieldValue(text.target.id, text.target.value)
                      }
                    }}
                    errMsg={errors.email}
                  />

                  <TextField
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    icon={require('../../public/assets/icon/eye.png')}
                    value={values.password}
                    onChangeValue={(text) => {
                      if (spaceValidation.test(text.target.value)) {
                        setFieldValue(text.target.id, text.target.value)
                      }
                    }}
                    errMsg={errors.password}
                  />

                  <Button
                    label="Sign-in"
                    styleOverride={{
                      height: 62,
                      backgroundColor: color.btnColor,
                      color: color.blackVariant,
                      marginTop: 40,
                      fontSize: 16,
                    }}
                    loader={loader}
                    onClick={handleSubmit}
                    //   onClick={() => {
                    //     // router.prefetch('www.google.com')
                    //     window.open('https://www.codexworld.com/', '_self')
                    //   }}
                  />
                </form>
              </>
            )}
          </Formik>
        </div>
      </div>
      <Image
        src={require('../../public/assets/icon/rectangle.png')}
        alt={''}
        style={{ width: width / 2.5, height: height }}
        // style={{width: 600, height: 400}}
      />

      <OwlCarousel
        className="owl-theme"
        loop
        // margin={4}
        // nav={true}
        // navText={[
        //   '<img src="/images/Arrow_left.png" />',
        //   '<img src="/images/Arrow_right.png" />',
        // ]}
        style={{
          width: width / 3,
          height: height / 2.5,
          top: height / 6,
          position: 'absolute',
          right: 0,
          //   right: width / 350,
        }}
        // dots={true}
        animateIn={true}
        {...options}
      >
        {productsp && productsp.length > 0
          ? productsp.map((product, index) => {
              return (
                <Image
                  key={index}
                  src={require('../../public/assets/icon/carousel.png')}
                  alt={product.name}
                  style={{ height: height / 1.5, width: width / 5 }}
                  title={product.name}
                />
              )
            })
          : ''}
      </OwlCarousel>
    </div>
  )
}
export default Login
