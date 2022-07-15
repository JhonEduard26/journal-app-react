/*
  {
    notes: [],
    active: null,
    active: {
      id: 'fes34esfsefse3r3rs',
      title: '',
      body: '',
      imageUrl: 'https://myimage',
      date: 123232432432,

    }
  }
*/

import { types } from "../types/types"

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }

      }
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload]
      }
    default:
      return state
  }
}