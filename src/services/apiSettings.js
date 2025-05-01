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
    if (!data[0])
      throw new Error(
        "Erro ao buscar configurações, verifique a sua conexão de internet e tente novamente"
      );
    return data[0];
  } catch (error) {
    throw new Error(
      "  Erro ao buscar configurações, verifique a sua conexão de internet e tente novamente"
    );
  }
}
export async function getRolesSettings() {
  try {
    const snapshot = await getDocs(collection(db, "roles"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (!data.length)
      throw new Error(
        "Erro ao buscar roles, verifique a sua conexão de internet e tente novamente"
      );
    return data;
  } catch (error) {
    throw new Error(
      "  Erro ao buscar roles, verifique a sua conexão de internet e tente novamente"
    );
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
