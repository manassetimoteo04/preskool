import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getSubject({ id, classId }) {
  try {
    if (id) {
      const docRef = doc(db, "subjects", id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return { id: docSnapshot.id, ...docSnapshot.data() };
      } else {
        throw new Error("Document not found");
      }
    }
    if (classId) {
      const ref = collection(db, "subjects");
      const q = query(ref, where("classId", "==", classId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    } else {
      throw new Error("You must provide either an id or a courseId");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createSubject(data) {
  try {
    const refData = addDoc(collection(db, "subjects"), data);
    return refData;
  } catch (error) {
    throw new Error("Ocorreu um erro ao adicionar disciplina, tente novamente");
  }
}

export async function updateSubject(id, updateData) {
  try {
    const docRef = doc(db, "subjects", id);
    await updateDoc(docRef, updateData);
  } catch (error) {
    throw new Error(
      "Ocorreu um erro ao actualizar disciplina, tente novamente"
    );
  }
}
