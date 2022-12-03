import ACTION_KEYS from '../../constants/action-keys'

export const setStudentTitle = (dispatch, title) => {
  try {
    dispatch({ type: ACTION_KEYS.STUDENT_HEADING, payload: title })
  } catch (err) {}
}
