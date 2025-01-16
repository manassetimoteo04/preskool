import { addDoc, collection, getDocs } from "firebase/firestore";
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

export async function createNewTeacher(newData) {
  try {
    const biDocument = await uploadFile(newData.biDocument[0]);
    const cvDocument = await uploadFile(newData.cvDocument[0]);

    const finalData = { ...newData, biDocument, cvDocument };
    const data = addDoc(collection(db, "teachers"), finalData);
    console.log("TEACHER ", data);
    return data;
  } catch (error) {
    console.error("Erro ao cadastrar professores:", error.message);
    throw new Error("Ocorreu um erro ao cadastrar, tente novamente");
  }
}
