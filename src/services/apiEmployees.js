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
    return data;
  } catch (error) {
    console.error("Erro ao cadastrar professores:", error.message);
    throw new Error("Ocorreu um erro ao cadastrar, tente novamente");
  }
}

export async function getEmployees(idList = []) {
  try {
    const results = [];
    const CHUNK_SIZE = 10;
    if (idList?.length === 0) {
      const snapshot = await getDocs(collection(db, "employees"));
      snapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      return results;
    } else {
      for (let i = 0; i < idList.length; i += CHUNK_SIZE) {
        const chunk = idList.slice(i, i + CHUNK_SIZE);

        const promises = chunk.map((id) => getDoc(doc(db, "employees", id)));
        const docs = await Promise.all(promises);

        docs.forEach((docSnap) => {
          if (docSnap.exists()) {
            results.push({ id: docSnap.id, ...docSnap.data() });
          }
        });
        return results;
      }
    }
  } catch (error) {
    console.error("Erro ao buscar funcionários:", error.message);
    return []; // retorna array vazio em caso de erro
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

export async function getDepartments() {
  try {
    const ref = collection(db, "departments");
    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar departamentos:", error.message);
    throw new Error("Ups! ocorreu um erro ao buscar departamentos");
  }
}

export async function createEmployeeLeaves(data) {
  try {
    await addDoc(collection(db, "employeeLeaves"), data);
    return data;
  } catch (error) {
    console.error("Erro ao criar licença:", error.message);
    throw new Error("Ups! ocorreu um erro ao criar licença");
  }
}

export async function getEmployeesLeaves() {
  try {
    const ref = collection(db, "employeeLeaves");
    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar licenças:", error.message);
    throw new Error("Ups! ocorreu um erro ao buscar licenças");
  }
}

export async function getEmployeeLeaveById(id) {
  try {
    const docRef = doc(db, "employeeLeaves", id);
    const docSnap = await getDoc(docRef);

    if (docSnap?.exists()) {
      return { ...docSnap.data(), id: docSnap.id };
    } else {
      throw new Error("Nenhuma licença encontrada");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteEmployeeLeave(id) {
  try {
    const docRef = doc(db, "employeeLeaves", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(error.message);
    throw new Error("Ups! ocorreu um erro ao deletar licença");
  }
}
