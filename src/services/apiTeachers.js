import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
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
export async function createNewTeacher(newData) {
  try {
    const biDocument = await uploadFile(newData.biDocument[0]);
    const cvDocument = await uploadFile(newData.cvDocument[0]);

    const finalData = { ...newData, biDocument, cvDocument };
    const data = addDoc(collection(db, "teachers"), finalData);
    return data;
  } catch (error) {
    console.error("Erro ao cadastrar professores:", error.message);
    throw new Error("Ocorreu um erro ao cadastrar, tente novamente");
  }
}
