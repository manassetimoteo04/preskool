import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { uploadFile } from "./apiUpload";

export async function createNewEmployee(employeeData) {
  try {
    const biDocument = await uploadFile(employeeData.biDocument[0]);
    const cvDocument = await uploadFile(employeeData.cvDocument[0]);

    const finalData = { ...employeeData, biDocument, cvDocument };
    const data = await addDoc(collection(db, "employees"), finalData);
    const permissions = {
      manageMonthlyPayments: false,
      addTeacher: false,
      userId: data.id,
      generateBillsCharges: true,
      status: true,
      postGrades: true,
      systemsAccess: false,
      updateProfile: true,
      AddStudent: true,
      manageClassSubject: false,
    };
    await addDoc(collection(db, "permissions"), permissions);
    console.log(permissions);
    return data;
  } catch (error) {
    console.error("Erro ao cadastrar professores:", error.message);
    throw new Error("Ocorreu um erro ao cadastrar, tente novamente");
  }
}

export async function getEmployees() {
  try {
    const ref = collection(db, "employees");
    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
}

export async function getEmployeeById(id) {
  try {
    const docRef = doc(db, "employees", id);
    const docSnap = await getDoc(docRef);

    if (docSnap?.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    } else {
      throw new Error("Nenhum funcionário encontrado");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateEmployee({ editId, data }) {
  try {
    console.log(data);
    const docRef = doc(db, "employees", editId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error("Erro ao actualizar professores:", error.message);
    throw new Error("Ocorreu um erro ao editar professor, tente novamente");
  }
}

export async function deleteEmployee(id) {
  try {
    const docRef = doc(db, "employees", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(error.message);
    throw new Error("Ups! ocorreu um erro ao deletar o funcionário");
  }
}
