/* eslint-disable no-unused-vars */
import { useGetEmployees } from "../humanResources/useGetEmployees";
import { useStudents } from "../students/useStudents";
import { usePayments } from "./usePayments";
export function useFeeSalaryLatePayments() {
  const { employees, isLoading: isLoadingEmployees } = useGetEmployees();
  const { students, isLoading: isLoadingStudents } = useStudents();
  const { payments, isLoading: isLoadingPayments } = usePayments();
  const recentPayments = payments?.filter(
    (pay) => new Date(pay.period).getMonth() === new Date().getMonth()
  );
  const filteredEmployees =
    employees
      ?.filter((e) => {
        if (!recentPayments?.some((rec) => rec.employeeId === e.id)) return e;
        else return;
      })
      .map((e) => (e = { ...e, isEmployee: true })) || [];
  const filteredStudents =
    students
      ?.filter((e) => {
        if (!recentPayments?.some((rec) => rec.studentId === e.id)) return e;
        else return;
      })
      .map((s) => (s = { ...s, isTudent: true })) || [];
  console.log(filteredEmployees);
  return {
    latePayments: [...filteredEmployees, ...filteredStudents],
    isLoading: isLoadingEmployees || isLoadingPayments || isLoadingStudents,
  };
}
