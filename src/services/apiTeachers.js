import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

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
