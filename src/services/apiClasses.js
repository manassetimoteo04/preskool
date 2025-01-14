import {
  getDocs,
  collection,
  getDoc,
  doc,
  addDoc,
  arrayUnion,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase.js";

export async function getClasse({ id, courseId }) {
  console.log(id, courseId.courseId);
  try {
    if (id) {
      const docRef = doc(db, "classes", id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return { id: docSnapshot.id, ...docSnapshot.data() };
      } else {
        throw new Error("Document not found");
      }
    }
    if (courseId.courseId) {
      const ref = collection(db, "classes");
      const q = query(ref, where("course", "==", courseId.courseId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    } else {
      throw new Error("You must provide either an id or a courseId");
    }
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

export async function createNewClass(newClassData) {
  try {
    const finalData = {
      ...newClassData,
      students: [],
      subjects: [],
      type: "medium",
    };
    const data = await addDoc(collection(db, "classes"), finalData);
    const docRef = doc(db, "courses", finalData.course);
    await updateDoc(docRef, { classes: arrayUnion(finalData.course) });
    return data;
  } catch (error) {
    throw new Error("UPS! ocorreu um erro ao cadastrar turma");
  }
}
