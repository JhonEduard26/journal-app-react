import { addDoc, collection, doc, updateDoc, deleteDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import { db } from "../firebase/config"
import { loadNotes } from "../helpers/loadNotes"
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

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}

const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
})

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    const noteRef = doc(db, `${uid}`, ...['journal', 'notes', `${note.id}`]);

    const noteToFireStore = { ...note }
    delete noteToFireStore.id

    await updateDoc(noteRef, noteToFireStore);
    dispatch(refreshNote(note.id, noteToFireStore))
    Swal.fire('Saved', note.title, 'success')
  }
}

const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})


export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    try {
      await deleteDoc(doc(db, `${uid}`, ...['journal', 'notes', `${id}`]));
      dispatch(deleteNote(id))
    } catch (e) {
      console.error("Error deleting document: ", e);
    }

  }
}

const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id
})