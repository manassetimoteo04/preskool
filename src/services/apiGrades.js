import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function createNewGrade(newData) {
  try {
    const data = await addDoc(collection(db, "grades"), newData);
    return data;
  } catch (error) {
    console.error(error.message);

    throw new Error("UPS! ocorreu um erro ao cadastrar Série");
  }
}

export async function getGrades(id, courseId) {
  try {
    if (id) {
      const docRef = doc(db, "grades", id);
      const docSnap = await getDoc(docRef);
      if (docSnap?.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
      } else {
        throw new Error("No grade with the provided id where found");
      }
    }
    if (courseId) {
      const ref = collection(db, "grades");
      const q = query(ref, where("courseId", "==", courseId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    }
    const ref = collection(db, "grades");

    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar séries:", error.message);
    throw new Error("UPS! ocorreu um erro ao buscar Série");
  }
}
