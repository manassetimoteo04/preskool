import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getSettings(settingName) {
  try {
    const q = query(
      collection(db, "settings"),
      where("name", "==", settingName)
    );

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateSettings({ settingId, data }) {
  try {
    const docRef = doc(db, "settings", settingId);
    await updateDoc(docRef, data);
  } catch (error) {
    throw new Error(
      "Ocorreu um erro ao actualizar configurações, tente novamente"
    );
  }
}
