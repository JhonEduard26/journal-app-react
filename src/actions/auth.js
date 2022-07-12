import { types } from "../types/types"

export const getUser = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login('f23adf', 'Jhon'))
    }, 4000);
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  }
})