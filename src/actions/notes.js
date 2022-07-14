import { doc, setDoc, addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"

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
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
}