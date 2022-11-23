import ACTION_KEYS from "../../constants/action-keys";

export const RegisterTypeRequest = (dispatch, data) => {
  try {
    dispatch({ type: ACTION_KEYS.REGSITER_TYPE, payload: data });
  } catch (err) {}
};

export const StoreUserAuth = (dispatch, data) => {
  try {
    dispatch({ type: ACTION_KEYS.WINDOWLAYOUT, payload: data });
  } catch (err) {}
};
