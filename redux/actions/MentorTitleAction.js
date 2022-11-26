import ACTION_KEYS from '../../constants/action-keys'
export const setMentorTitle = (dispatch, title) => {
  try {
    dispatch({ type: ACTION_KEYS.MENTOR_HEADING, payload: title })
  } catch (err) {}
}
