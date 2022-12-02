import ACTION_KEYS from '../../constants/action-keys'
import { HYDRATE } from 'next-redux-wrapper'
const initialState = {
  isRequesting: false,
  success: false,
  error: null,
  data: null,
  registerType: null,
  userAuth: null,
  layout: null,
  kycStep1: null,
  kycStep2: null,
  professionalDetails: null,
}

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log('action', action, type)

  switch (type) {
    case HYDRATE:
      return {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      }
    case ACTION_KEYS.REGSITER_TYPE:
      return {
        ...state,
        registerType: payload,
      }
    case ACTION_KEYS.STORE_AUTH:
      return {
        ...state,
        userAuth: payload,
      }
    case ACTION_KEYS.WINDOWLAYOUT:
      return {
        ...state,
        layout: payload,
      }
    case ACTION_KEYS.KYCSTEP1:
      return {
        ...state,
        kycStep1: payload,
      }
    case ACTION_KEYS.PROFESSIONAL_DETAILS:
      return {
        ...state,
        professionalDetails: payload,
      }
    case ACTION_KEYS.KYCSTEP2:
      return {
        ...state,
        kycStep2: payload,
      }
    // case
    default:
      return state
  }
}

export default AuthReducer
