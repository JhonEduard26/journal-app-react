import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import { types } from "../types/types"

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      createdAt: new Date().getTime()
    }

    try {
      const docRef = await addDoc(collection(db, `${uid}`, ...['journal', 'notes']), newNote)
      console.log("Document written with ID: ", docRef.id);
      dispatch(activeNote(docRef.id, newNote))
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
})