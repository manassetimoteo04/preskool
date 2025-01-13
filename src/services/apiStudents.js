import {
  getDocs,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.js";
import { uploadFile } from "./apiUpload.js";
export async function getStudents() {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
}

export async function createNewStudent(newStudentData) {
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
  try {
    const docRef = doc(db, "students", id);
    const docSnap = await getDoc(docRef);

    if (docSnap?.exists()) {
      console.log("studens", docSnap);
      return { ...docSnap.data(), id: docSnap.id };
    } else {
      throw new Error("Nenhum estudante encontrado");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateStudent({ id, updateData }) {
  console.log(id, updateData);
  try {
    console.log("Atualizando estudante:", id, updateData);

    const docRef = doc(db, "students", id);
    await updateDoc(docRef, updateData);

    console.log("Estudante atualizado com sucesso!");
    return { id, ...updateData }; // Retorna os dados atualizados
  } catch (error) {
    console.error("Erro ao atualizar estudante:", error);
    throw new Error(
      "Ups, ocorreu um erro durante a actualização do estudante, por favor verifique a conexão e tente novamente"
    );
  }
}
