import {
  getDocs,
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase.js";
import { uploadFile } from "./apiUpload.js";

export async function getStudents({ classId, userId }) {
  try {
    if (classId) {
      const ref = collection(db, "students");
      const q = query(ref, where("classId", "==", classId));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs
        .filter((doc) => doc.id !== userId)
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      return results;
    }

    const ref = collection(db, "students");

    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
}

export async function createNewStudent(newStudentData = {}, id) {
  try {
    const hasFile = newStudentData.biUpload[0] || newStudentData.docUpload[0];

    if (hasFile) {
      const bi = await uploadFile(newStudentData.biUpload[0]);
      const document = await uploadFile(newStudentData.docUpload[0]);

      console.log(bi, document);
      const finalData = {
        ...newStudentData,
        docUpload: document,
        biUpload: bi,
        createdAt: new Date(),
        status: "active",
      };

      const studentRef = doc(db, "students", id);
      await setDoc(studentRef, finalData);

      const classRef = doc(db, "classes", newStudentData.classId);
      await updateDoc(classRef, { students: arrayUnion(id) });

      return studentRef;
    }
  } catch (error) {
    console.error(error);
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
      return { ...docSnap.data(), id: docSnap.id };
    } else {
      throw new Error("Nenhum estudante encontrado");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateStudent({ id, updateData }) {
  try {
    const docRef = doc(db, "students", id);
    await updateDoc(docRef, updateData);

    return { id, ...updateData };
  } catch (error) {
    console.error("Erro ao atualizar estudante:", error);
    throw new Error(
      "Ups, ocorreu um erro durante a actualização do estudante, por favor verifique a conexão e tente novamente"
    );
  }
}

export async function deteleteStudent(id) {
  try {
    const docRef = doc(db, "students", id);

    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao deletar estudante: ", error);
    throw new Error("Ups, ocorreu um erro ao excluir estudante");
  }
}
