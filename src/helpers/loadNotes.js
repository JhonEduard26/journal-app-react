import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const loadNotes = async (uid) => {
  const notes = []

  const querySnapshot = await getDocs(collection(db, `${uid}`, ...['journal', 'notes']))
  querySnapshot.forEach((doc) => {
    notes.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return notes
}
