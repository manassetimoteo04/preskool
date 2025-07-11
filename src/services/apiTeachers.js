import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { uploadFile } from "./apiUpload";

export async function getTeachers() {
  try {
    const ref = collection(db, "teachers");
    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar professores:", error.message);
    throw new Error(error.message);
  }
}
export async function getTeacher(id) {
  try {
    const docRef = doc(db, "teachers", id);
    const docSnap = await getDoc(docRef);

    if (docSnap?.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    } else {
      throw new Error("Nenhum professor encontrado");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createNewTeacher(newData, id) {
  try {
    const biDocument = await uploadFile(newData.biDocument[0]);
    const cvDocument = await uploadFile(newData.cvDocument[0]);

    const finalData = { ...newData, biDocument, cvDocument };
    const teacherRef = doc(db, "teachers", id);
    await setDoc(teacherRef, finalData);
    return teacherRef;
  } catch (error) {
    console.error("Erro ao cadastrar professores:", error.message);
    throw new Error("Ocorreu um erro ao cadastrar, tente novamente");
  }
}
export async function updateTeacher({ editId, data }) {
  try {
    const docRef = doc(db, "teachers", editId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error("Erro ao actualizar professores:", error.message);
    throw new Error("Ocorreu um erro ao editar professor, tente novamente");
  }
}

export async function deleteTeacher(id) {
  try {
    const docRef = doc(db, "teachers", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao deletar professores:", error.message);
    throw new Error("Ocorreu um erro ao depetar professor, tente novamente");
  }
}
