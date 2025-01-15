import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getSubject({ id, classId }) {
  try {
    if (id) {
      const docRef = doc(db, "subjects", id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return { id: docSnapshot.id, ...docSnapshot.data() };
      } else {
        throw new Error("Document not found");
      }
    }
    if (classId) {
      const ref = collection(db, "subjects");
      const q = query(ref, where("classId", "==", classId));
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
