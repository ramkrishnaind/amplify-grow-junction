import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { color } from '../../public/theme/Color'
import { RegistrationSchema } from '../../public/utils/schema'
import useWindowDimensions from '../../public/utils/useWindowDimensions'
import { StoreUserAuth } from '../../redux/actions/AuthAction'
import Header from '../components/common/Header'
import Button from '../ui-kit/Button'
import TextField from '../ui-kit/TextField'

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
  //   first_name: 'riyaz',
  //   last_name: 'ahamed',
  //   email: 'er.riyaz2507@gmail.com',
  //   password: 'R!yaz2507',
  //   confirm_password: 'R!yaz2507',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
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
const Register = (props) => {
  const registerType = useSelector((state) => state.AuthReducer)
  const { width, height } = useWindowDimensions()
  const router = useRouter()
  const dispatch = useDispatch()

  //   const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  //     ssr: false,
  //   });

  //   const [registration, setRegistration] = useState(initialState);

  console.log('assdasda', registerType?.registerType)

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
          btnName="Log In"
          onClickBtn={() => {
            router.push('/auth/Login')
          }}
          style={{
            backgroundColor: color.blackVariant,
            height: 42,
            width: 95,
            fontSize: 16,
          }}
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
            Fill in the details to create your account
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialState}
            onSubmit={async (values, { setErrors }) => {
              let username = values.email
              let first_name = values.first_name
              let last_name = values.last_name
              let email = values.email
              let password = values.password
              let register_type = registerType?.registerType
              let profile_registration = 'false'

              try {
                const { user } = await Auth.signUp({
                  username,
                  password,
                  attributes: {
                    email: email,
                    'custom:first_name': first_name,
                    'custom:last_name': last_name,
                    'custom:register_type': register_type,
                    'custom:kyc_done': profile_registration,
                  },
                  autoSignIn: {
                    enabled: true,
                  },
                })
                console.log('user', user)

                if (user) {
                  StoreUserAuth(dispatch, user)
                  router.push('/auth/VerifyEmail')
                }
              } catch (e) {
                console.log('err', e)

                if (
                  e
                    ?.toString()
                    ?.includes(
                      'An account with the given email already exists.',
                    )
                ) {
                  setErrors({ email: 'User email id is already registered' })
                }
              }
            }}
            validationSchema={RegistrationSchema()}
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
                <div
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ marginRight: 20, display: 'flex', flex: 1 }}>
                    <TextField
                      label="First Name"
                      id="first_name"
                      type="FirstName"
                      placeholder="Robert"
                      value={values.first_name}
                      onChangeValue={(text) => {
                        //   onChange(text);
                        if (spaceValidation.test(text.target.value)) {
                          console.log(text.target.id, text.target.value)

                          setFieldValue(text.target.id, text.target.value)
                        }
                      }}
                      errMsg={touched.first_name && errors.first_name}
                      styleOverride={{ marginRight: 5 }}
                    />
                  </div>
                  <TextField
                    label="Last Name"
                    id="last_name"
                    type="LastName"
                    placeholder="Miller"
                    value={values.last_name}
                    onChangeValue={(text) => {
                      if (spaceValidation.test(text.target.value)) {
                        setFieldValue(text.target.id, text.target.value)
                      }
                    }}
                    errMsg={touched.last_name && errors.last_name}
                  />
                </div>

                <TextField
                  label="Email"
                  id="email"
                  type="Email"
                  placeholder="examplemail@gmail.com"
                  value={values.email}
                  onChangeValue={(text) => {
                    if (spaceValidation.test(text.target.value)) {
                      setFieldValue(text.target.id, text.target.value)
                    }
                  }}
                  errMsg={touched.email && errors.email}
                />

                <TextField
                  label="Password"
                  id="password"
                  type="Password"
                  placeholder="Enter Password"
                  icon={require('../../public/assets/icon/eye.png')}
                  value={values.password}
                  onChangeValue={(text) => {
                    if (spaceValidation.test(text.target.value)) {
                      setFieldValue(text.target.id, text.target.value)
                    }
                  }}
                  errMsg={touched.password && errors.password}
                />
                <TextField
                  label="Confirm Password"
                  id="confirm_password"
                  type="ConfirmPassword"
                  placeholder="Re-Enter Password"
                  value={values.confirm_password}
                  onChangeValue={(text) => {
                    if (spaceValidation.test(text.target.value)) {
                      setFieldValue(text.target.id, text.target.value)
                    }
                  }}
                  errMsg={touched.confirm_password && errors.confirm_password}
                />
                <Button
                  label="Get Started"
                  styleOverride={{
                    height: 62,
                    backgroundColor: color.btnColor,
                    color: color.blackVariant,
                    marginTop: 40,
                    fontSize: 16,
                  }}
                  onClick={handleSubmit}
                  //   onClick={() => {
                  //     router.push('/auth/VerifyEmail');
                  //   }}
                />
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

      {/* <OwlCarousel
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
        {...options}>
        {productsp && productsp.length > 0
          ? productsp.map((product, index) => {
              return (
                <Image
                  key={index}
                  src={require('../../public/assets/icon/carousel.png')}
                  alt={product.name}
                  style={{height: height / 1.5, width: width / 5}}
                  title={product.name}
                />
              );
            })
          : ''}
      </OwlCarousel> */}
    </div>
  )
}
export default Register
