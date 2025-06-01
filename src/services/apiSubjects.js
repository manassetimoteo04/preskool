import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getSubject({ id, filterId, filterField }) {
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
    if (filterId) {
      const ref = collection(db, "subjects");
      const q = query(ref, where(filterField, "==", filterId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    }

    const ref = collection(db, "subjects");
    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createSubject(data) {
  try {
    console.log(data);
    const refData = addDoc(collection(db, "subjects"), data);
    const docRef = doc(db, "classes", data.classId);
    await updateDoc(docRef, { subjects: arrayUnion(docRef.id) });
    return refData;
  } catch (error) {
    console.error(error);

    throw new Error("Ocorreu um erro ao adicionar disciplina, tente novamente");
  }
}

export async function updateSubject(id, updateData) {
  try {
    console.log(id, updateData);
    const docRef = doc(db, "subjects", id);
    await updateDoc(docRef, updateData);
  } catch (error) {
    console.error(error);
    throw new Error(
      "Ocorreu um erro ao actualizar disciplina, tente novamente"
    );
  }
}

export async function deleteSubject(id) {
  try {
    const docRef = doc(db, "subjects", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao deletar disciplina: ", error);
    throw new Error("Ups, ocorreu um erro ao excluir disciplina");
  }
}
