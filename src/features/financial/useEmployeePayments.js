import { useQuery } from "@tanstack/react-query";
import { getEmployeePayments } from "../../services/paymentsApi";

export function useEmployeePayments(id) {
  const { data, isLoading } = useQuery({
    queryFn: () => getEmployeePayments(id),
    queryKey: ["employeePayments", id],
  });
  return { data, isLoading };
}
