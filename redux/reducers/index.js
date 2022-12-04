import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import MentorHeaderReducer from './MentorHeaderReducer'
import StudentHeaderReducer from './StudentHeaderReducer'
import ServicesHeaderReducer from './ServicesReducer'
export default combineReducers({
  AuthReducer,
  MentorHeaderReducer,
  StudentHeaderReducer,
  ServicesHeaderReducer,
})
