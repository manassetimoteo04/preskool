import { useQuery } from "@tanstack/react-query";
import { getAllPayments } from "../../services/paymentsApi";
export function usePayments() {
  const { data: payments, isLoading } = useQuery({
    queryFn: getAllPayments,
    queryKey: ["payments"],
  });
  return { payments, isLoading };
}
