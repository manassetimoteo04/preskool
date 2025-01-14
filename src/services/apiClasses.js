import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

export async function getClasse() {
  try {
    const docRef = doc(db, "classes", "fPH3sY7AaxciVjyGOrZc");
    const docSnap = await getDoc(docRef);

    return { ...docSnap.data(), id: docSnap.id };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCourses() {
  try {
    const querySnapshot = await getDocs(collection(db, "courses"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar cursos:", error.message);
  }
}
