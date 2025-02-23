import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function createNewEmployee() {
  try {
    const finalData = {
      fullName: "Manasse",
      createdAt: new Date(),
      birthDate: new Date(),
      idCardNumber: "sdfsdf",
      fatherName: "Sdf",
      motherName: "sdf",
      residence: "sdf",
      sectorId: "2342",
      status: "hired",
      phoneNumber: "3453",
      email: "sddf",
      qualifications: {
        qualification: "sad",
        qualificationArea: "sdsd",
        institutionName: "sdf",
        institutionAddress: "sdf",
      },
      experiences: {
        years: 4,
        lastInsitutionName: "sdf",
        lastInsitutionAddress: "sdf",
        lastInsitutionEmail: "sdf",
        lastInsitutionPhone: "sdf",
      },
      bankAccount: {
        accountNumber: "234234",
        accountName: "sdf",
        bankName: "as",
      },
      documents: {
        idCard: "",
        cv: "",
      },
      description: "",
    };
    const data = addDoc(collection(db, "employees"), finalData);
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
