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

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {}
    default:
      return state
  }
}