import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

// const salaryPayment = {
//   employee_id: 101,
//   base_salary: 2500.0,
//   bonus: 0,
//   deductions: 0.0,
//   total_amount: 2650.0,
//   payment_date: "2025-04-28",
//   period: "2025-04",
//   payment_method: "Bank Transfer",
//   status: "Paid", // or "Pending", "Late"
//   notes: "Paid on time with bonus for extra hours",
// };
export async function createEmployeePayment(data) {
  try {
    const refData = await addDoc(collection(db, "salaryPayments"), data);

    return refData;
  } catch (error) {
    throw new Error("Ocorreu um erro finalizar pagamento, tente novamente");
  }
}
export async function createStudentFeePayment(data) {
  try {
    const refData = await addDoc(collection(db, "feePayments"), data);

    return refData;
  } catch (error) {
    throw new Error("Ocorreu um erro finalizar pagamento, tente novamente");
  }
}

export async function getEmployeePayments(id) {
  try {
    const q = query(
      collection(db, "salaryPayments"),
      where("employeeId", "==", id)
    );
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Erro ao buscar pagamentos:", error.message);
    throw new Error("Ups! ocorreu um erro ao buscar pagamentos");
  }
}

export async function getAllPayments() {
  try {
    const ref = collection(db, "salaryPayments");
    const querySnapshot = await getDocs(ref);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const ref2 = collection(db, "feePayments");
    const querySnapshot2 = await getDocs(ref2);
    const data2 = querySnapshot2.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data, data2);
    return [...data, ...data2];
  } catch (error) {
    console.error("Erro ao buscar pagamentos:", error.message);
    throw new Error("Ups! ocorreu um erro ao buscar pagamentos");
  }
}
