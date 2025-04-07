import { useMutation } from "@tanstack/react-query";
import { createEmployeeLeaves } from "../../services/apiEmployees";
import toast from "react-hot-toast";

export function useCreateLeaves() {
  const { mutate: createLeave, isLoading } = useMutation({
    mutationFn: createEmployeeLeaves,
    onSuccess() {
      toast.success("Licença criada com sucesso");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { createLeave, isLoading };
}
