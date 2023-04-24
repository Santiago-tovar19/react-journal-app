import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid) => {
  const noteSnap = await getDocs(
    collection(FirebaseDB, `${uid}/journal/notas`)
  );
  const notes = noteSnap.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log(notes);
  return notes;
};
