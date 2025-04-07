import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEmployeeLeave } from "../../services/apiEmployees";
import toast from "react-hot-toast";

export function useDeleteEmployeeLeave() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteEmployeeLeave,
    onSuccess() {
      toast.success("Licença excluída com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["employeeLeaves"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  return { mutate, isLoading };
}
