import { useMutation } from "@tanstack/react-query";
import { createStudentFeePayment } from "../../services/paymentsApi";
import toast from "react-hot-toast";

export function useStudentFeePay() {
  const { mutate: studentFeePay, isLoading } = useMutation({
    mutationFn: createStudentFeePayment,
    onSuccess() {
      toast.success("Pagamento resgistado com sucesso");
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { studentFeePay, isLoading };
}
