import {
  getDocs,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./firebase.js";
import { uploadFile } from "./apiUpload.js";

export async function getStudents() {
  // const isIds = ids && Array.isArray(ids);
  try {
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

export async function createNewStudent(newStudentData = {}) {
  try {
    const hasFile = newStudentData.biUpload[0] || newStudentData.docUpload[0];
    const [courseName, courseId] = newStudentData.course.split("-");
    const [grade, classId] = newStudentData.grade.split("-");
    console.log(grade, classId);
    if (hasFile) {
      const bi = await uploadFile(newStudentData.biUpload[0]);
      const document = await uploadFile(newStudentData.docUpload[0]);
      const finalData = {
        ...newStudentData,
        docUpload: document,
        biUpload: bi,
        createdAt: new Date(),
        status: "active",
        course: courseName,
        grade,
        courseId,
      };
      const data = await addDoc(collection(db, "students"), finalData);
      const docRef = doc(db, "classes", classId);
      await updateDoc(docRef, { students: arrayUnion(data.id) });
      return data;
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
