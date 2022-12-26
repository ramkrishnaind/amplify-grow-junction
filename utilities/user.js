import { store } from '../redux/store'
export const getLoggedinUserEmail = () => {
  const authData = store.getState().AuthReducer
  if (authData.user) {
    return authData.email
  } else if (authData.userAuth) {
    return authData.username
  } else {
    return ''
  }
}
