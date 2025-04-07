import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployeeLeave as updateEmployeeLeaveApi } from "../../services/apiEmployees";
import toast from "react-hot-toast";

export function useUpdateEmployeeLeave() {
  const queryClient = useQueryClient();
  const { mutate: updateEmployeeLeave, isLoading } = useMutation({
    mutationFn: updateEmployeeLeaveApi,
    onSuccess() {
      toast.success("Licença actualizado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["employeeLeaves"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { updateEmployeeLeave, isLoading };
}
