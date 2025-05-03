import {
  collection,
  doc,
  getDocs,
  query,
  addDoc,
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

export async function updateSettings({ settingId, collectionName, data }) {
  try {
    console.log(data, settingId, collectionName);
    const docRef = doc(db, collectionName, settingId);
    await updateDoc(docRef, data);
  } catch (error) {
    throw new Error(
      "Ocorreu um erro ao actualizar configurações, tente novamente"
    );
  }
}

export async function createPermissions(data) {
  try {
    const ref = await addDoc(collection(db, "permissions"), data);
    return ref;
  } catch (error) {
    throw new Error(
      "Ocorreu um erro ao actualizar configurações, tente novamente"
    );
  }
}

export async function getRolePermissions(roleId) {
  try {
    const q = query(
      collection(db, "permissions"),
      where("roleId", "==", roleId)
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
