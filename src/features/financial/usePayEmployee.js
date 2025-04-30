import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployeePayment } from "../../services/paymentsApi";
import toast from "react-hot-toast";

export function usePayEmployee() {
  const queryClient = useQueryClient();

  const { mutate: createEmployeePay, isLoading } = useMutation({
    mutationFn: createEmployeePayment,
    onSuccess() {
      toast.success("Pagamento resgistado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["payments"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { createEmployeePay, isLoading };
}
