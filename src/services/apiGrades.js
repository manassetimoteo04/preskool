import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export async function createNewGrade(newData) {
  try {
    const data = await addDoc(collection(db, "grades"), newData);
    return data;
  } catch (error) {
    console.error(error.message);

    throw new Error("UPS! ocorreu um erro ao cadastrar Série");
  }
}
