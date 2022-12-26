import { store } from '../redux/store'
export const getLoggedinUserEmail = () => {
  //   debugger
  const authData = store.getState().AuthReducer
  if (authData.user) {
    return authData.user.email
  } else if (authData.userAuth) {
    return authData.userAuth.username
  } else {
    return ''
  }
}
