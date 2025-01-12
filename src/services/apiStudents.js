import { getDocs, collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import { uploadFile } from "./apiUpload.js";
export async function getStudents() {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
}

export async function createNewStudent(newStudentData) {
  console.log(newStudentData);
  try {
    const hasFile = newStudentData.biUpload[0] || newStudentData.docUpload[0];
    if (hasFile) {
      const bi = await uploadFile(newStudentData.biUpload[0]);
      const doc = await uploadFile(newStudentData.docUpload[0]);
      const finalData = {
        ...newStudentData,
        docUpload: doc,
        biUpload: bi,
        status: "active",
      };

      const data = await addDoc(collection(db, "students"), finalData);
      return data;
    }
  } catch (error) {
    throw new Error(
      "Ups, occoreu um erro, verifique a conexão de internet e tente novamente"
    );
  }
}

export async function getStudent(id) {
  const docRef = doc(db, "students", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("Nenhum estudante encontrado");
  }
}
