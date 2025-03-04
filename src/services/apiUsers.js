import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getUserPermissions(id) {
  try {
    const ref = collection(db, "permissions");
    const q = query(ref, where("userId", "==", id));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function updateUserPermissions({ updateId, field, value }) {
  try {
    const docRef = doc(db, "permissions", updateId);
    await updateDoc(docRef, { [field]: value });
  } catch (error) {
    console.error("Erro ao actualizar permissões:", error.message);
    throw new Error(
      "Ocorreu um erro ao actualizar informações, tente novamente"
    );
  }
}
