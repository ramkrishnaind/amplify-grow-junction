import Image from "next/image";
import React, { useState } from "react";

import { color } from "../../public/theme/Color";

// import 'react-multi-carousel/lib/styles.css';

// import {Auth} from 'aws-amplify';
import { Formik } from "formik";

// import {CognitoUser} from '@aws-amplify/auth';

// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import dynamic from "next/dynamic";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useRouter } from "next/router";
import useWindowDimensions from "../../public/utils/useWindowDimensions";

import { RegistrationSchema, SignInSchema } from "../../public/utils/schema";
import TextField from "../ui-kit/TextField";
import Button from "../ui-kit/Button";
import Header from "../components/common/Header";
import { Auth } from "aws-amplify";
// import { StoreUserAuth } from "../../redux/actions/AuthAction";
// import { useDispatch } from "react-redux";

let productsp = [
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
  {
    id: 1,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
  },
];

const initialState = {
  email: "",
  password: "",
};

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  //   dotsClass: {backgroundColor: 'red'},

  //   dotsContainer: {backgroundColor: 'red'},
  navClass: ["owl-prev", "owl-next"],
  navText: ["", ""],
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
};

const spaceValidation = new RegExp(/^[^ ]*$/);
const Login = (props) => {
  //   const {width, height} = props;
  const { width, height } = useWindowDimensions();
  //   const dispatch = useDispatch();
  //   console.log(width);
  const router = useRouter();
  //   const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  //     ssr: false,
  //   });

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
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        backgroundColor: color.headerColor,
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header
          btnName="Create Account"
          onClickBtn={() => {
            router.push("/auth/TypeOfRegister");
          }}
          style={{
            backgroundColor: color.blackVariant,
            height: 42,
            width: 167,
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
              //   const registration = {
              //     first_name: values.first_name,
              //     last_name: values.last_name,
              //     email: values.email,
              //     password: values.password,
              //   };
              let username = values.email;
              let first_name = values.first_name;
              let last_name = values.last_name;
              let email = values.email;
              let password = values.password;
              //   try {
              //     await API.graphql({
              //       query: createRegistration,
              //       variables: {input: registration},
              //       authMode: 'AMAZON_COGNITO_USER_POOLS',
              //     });
              //   } catch (e) {
              //     console.log('error', e);
              //   }
              //   console.log(email, password, username);

              try {
                const user = await Auth.signIn({
                  username,
                  password,
                });

                if (user) {
                  //   StoreUserAuth(dispatch, user);
                  //   router.push('/mentor/MentorDashboard');
                  Auth.currentUserInfo()
                    .then((res) => {
                      console.log("res", res?.attributes);
                      Object.entries(res?.attributes).map((item, index) => {
                        console.log("ityem", item[0]);
                        if (item[0] === "custom:kyc_done") {
                          console.log("entry");
                          if (item[1] === "true") {
                          } else {
                            router.push("/register/KYC_step1");
                          }
                        }
                      });
                    })
                    .catch((e) => {});
                }
              } catch (e) {
                console.log("e", e);
                if (
                  e
                    ?.toString()
                    ?.includes(
                      "An account with the given email already exists."
                    )
                ) {
                  setErrors({ email: "User email id is already registered" });
                }
              }
            }}
            validationSchema={SignInSchema()}
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
                  label="Email"
                  id="email"
                  type="Email"
                  placeholder="examplemail@gmail.com"
                  value={values.email}
                  onChangeValue={(text) => {
                    if (spaceValidation.test(text.target.value)) {
                      setFieldValue(text.target.id, text.target.value);
                    }
                  }}
                  errMsg={touched.email && errors.email}
                />

                <TextField
                  label="Password"
                  id="password"
                  type="Password"
                  placeholder="Enter Password"
                  icon={require("../../public/assets/icon/eye.png")}
                  value={values.password}
                  onChangeValue={(text) => {
                    if (spaceValidation.test(text.target.value)) {
                      setFieldValue(text.target.id, text.target.value);
                    }
                  }}
                  errMsg={touched.password && errors.password}
                />

                <Button
                  label="Sign-in"
                  styleOverride={{
                    height: 62,
                    backgroundColor: color.btnColor,
                    color: color.blackVariant,
                    marginTop: 40,
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
        src={require("../../public/assets/icon/rectangle.png")}
        alt={""}
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
  );
};
export default Login;
