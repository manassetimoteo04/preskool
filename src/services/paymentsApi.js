import { addDoc, collection } from "firebase/firestore";
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
