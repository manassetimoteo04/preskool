import { useMutation } from "@tanstack/react-query";
import { createEmployeePayment } from "../../services/paymentsApi";
import toast from "react-hot-toast";

export function usePayEmployee() {
  const { mutate: createEmployeePay, isLoading } = useMutation({
    mutationFn: createEmployeePayment,
    onSuccess() {
      toast.success("Pagamento resgistado com sucesso");
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { createEmployeePay, isLoading };
}
