import ACTION_KEYS from '../../constants/action-keys'

export const RegisterTypeRequest = (dispatch, data) => {
  try {
    dispatch({ type: ACTION_KEYS.REGSITER_TYPE, payload: data })
  } catch (err) {}
}

export const StoreUserAuth = (dispatch, data) => {
  try {
    dispatch({ type: ACTION_KEYS.STORE_AUTH, payload: data })
  } catch (err) {}
}
export const SetUser = (dispatch, data) => {
  try {
    dispatch({ type: ACTION_KEYS.SET_USER, payload: data })
  } catch (err) {}
}
export const ClearUser = (dispatch) => {
  try {
    dispatch({ type: ACTION_KEYS.CLEAR_USER })
  } catch (err) {}
}
