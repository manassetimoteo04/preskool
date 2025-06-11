import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getMarks({ classId, studentId, subjectId, trimesterId }) {
  try {
    const ref = collection(db, "marks");
    const q = query(
      ref,
      where("classId", "==", classId),
      where("studentId", "==", studentId),
      where("subjectId", "==", subjectId),
      where("trimesterId", "==", trimesterId)
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateMarks({ id, data }) {
  try {
    console.log(id, data);
    const docRef = doc(db, "marks", id);
    await updateDoc(docRef, { marks: data });
  } catch (error) {
    console.error(error.message);
    throw new Error("Ups! ocorreu um erro ao actualizar o notas");
  }
}
export async function createStudentMarks(marks) {
  try {
    const data = await addDoc(collection(db, "marks"), marks);

    return data;
  } catch (error) {
    console.error(error.message);

    throw new Error("UPS! ocorreu um erro ao adicionar notas");
  }
}
