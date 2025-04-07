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
  deleteDoc,
} from "firebase/firestore";

import { db } from "./firebase.js";
export async function getClasse({ id, courseId }) {
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
    if (courseId) {
      const ref = collection(db, "classes");
      const q = query(ref, where("course", "==", courseId));
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
    console.error(error.message);

    throw new Error("UPS! ocorreu um erro ao cadastrar turma");
  }
}

export async function createNewCourse(courseData) {
  try {
    const finalData = {
      ...courseData,
      classes: [],
    };
    const data = await addDoc(collection(db, "courses"), finalData);
    return data;
  } catch (error) {
    console.error(error.message);

    throw new Error("UPS! ocorreu um erro ao cadastrar curso");
  }
}

export async function getCourse(id) {
  try {
    const docRef = doc(db, "courses", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error(error.message);
    throw new Error("UPS! ocorreu um erro ao buscar curso");
  }
}

export async function updateCourse({ id, updateData }) {
  try {
    const docRef = doc(db, "courses", id);
    await updateDoc(docRef, updateData);
  } catch (error) {
    console.error(error.message);
    throw new Error("Ups! ocorreu um erro ao actualizar o curso");
  }
}
export async function deleteCourse(id) {
  try {
    const docRef = doc(db, "courses", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(error.message);
    throw new Error("Ups! ocorreu um erro ao deletar o curso");
  }
}
