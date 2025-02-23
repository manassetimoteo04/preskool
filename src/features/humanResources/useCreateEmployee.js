import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewEmployee } from "../../services/apiEmployees";
import toast from "react-hot-toast";

export function useCreateEmployee() {
  const queryClient = useQueryClient();
  const { mutate: createEmployee, isLoading } = useMutation({
    mutationFn: createNewEmployee,
    onSuccess: () => {
      toast.success("Funcionário cadastrado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createEmployee, isLoading };
}
