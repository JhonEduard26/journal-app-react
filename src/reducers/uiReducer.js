import { types } from '../types/types'

const initialState = {
  loading: false,
  msgError: null
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        loading: false,
        msgError: action.payload,
      }
    case types.uiRemoveError:
      return {
        loading: false,
        msgError: null,
      }
    default:
      return state
  }
}