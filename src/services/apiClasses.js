import {
  getDocs,
  collection,
  getDoc,
  doc,
  addDoc,
  // arrayUnion,
  updateDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

import { db } from "./firebase.js";
import { isIncluded } from "../utils/helpers.js";

export async function getClasse({ id, gradeId, gradesIds, field = "" }) {
  try {
    if (field) {
      const ref = collection(db, "classes");
      const querySnapshot = await getDocs(ref);
      const data = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((cl) => isIncluded(cl.id, gradesIds));
      return data;
    }
    if (id) {
      const docRef = doc(db, "classes", id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return { id: docSnapshot.id, ...docSnapshot.data() };
      } else {
        throw new Error("Document not found");
      }
    }

    if (gradeId) {
      const ref = collection(db, "classes");
      const q = query(ref, where("gradeId", "==", gradeId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    }
    if (gradesIds?.length) {
      const ref = collection(db, "classes");
      const q = query(ref, where(field, "in", gradesIds));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    }

    const ref = collection(db, "classes");
    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
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
    // const docRef = doc(db, "courses", finalData.course);
    // await updateDoc(docRef, { classes: arrayUnion(finalData.course) });
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

export async function getCourse(id, classId) {
  try {
    if (classId) {
      const ref = collection(db, "courses");
      const q = query(ref, where("classes", "array-contains", classId));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return results;
    }
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
