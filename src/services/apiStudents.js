import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js";
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
  try {
    const data = await addDoc(collection(db, "students"), newStudentData);
    console.log(data);

    return data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
}
