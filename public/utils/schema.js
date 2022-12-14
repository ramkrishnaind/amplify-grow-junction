import * as Yup from 'yup'

const nameValidation = new RegExp(/^[^\s*]{1,}[a-zA-Z0-9-_/.&\s*@'"]{1,}$/)
const numberValidation = new RegExp(/^[0-9]{10}$/)

export const RegistrationSchema = () =>
  Yup.object({
    first_name: Yup.string()
      .required('Please enter your first name')
      .matches(nameValidation, 'please enter valid first name'),
    last_name: Yup.string()
      .required('Please enter your last name')
      .matches(nameValidation, 'please enter valid last name'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Please enter your email id'),
    password: Yup.string()
      .required('Please enter your password')
      .min(6, ({ min }) => 'password must be atleast 6 character'),
    confirm_password: Yup.string()
      .required('Please enter your confirm password')
      .min(6, ({ min }) => 'password must be atleast 6 character')
      .when('password', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          'Confirm password not match with password',
        ),
      }),
  })

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email address')
    .required('Please enter your email id'),
  // .nullable(),
  password: Yup.string()
    .required('Please enter your password')
    // .nullable()
    .min(6, ({ min }) => 'password must be atleast 6 character'),
})

export const ProfessionalDetailSchema = () =>
  Yup.object({
    recent_college: Yup.string().required('Please enter your recent college'),
    degree: Yup.string().required('Please choose any degree'),
  })

export const verifyStep4 = () =>
  Yup.object({
    phoneNumber: Yup.string()
      .required('Please enter your mobile number')
      .matches(numberValidation, 'Phone number is not valid'),
  })
