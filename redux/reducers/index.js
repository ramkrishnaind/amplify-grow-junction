import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import MentorHeaderReducer from './MentorHeaderReducer'
export default combineReducers({
  AuthReducer,
  MentorHeaderReducer,
})
