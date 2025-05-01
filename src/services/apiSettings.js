import { collection, getDocs, query, where } from "firebase/firestore";
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
    console.log(data);
    return data[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
