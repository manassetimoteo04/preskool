import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployee as updateEmployeeApi } from "../../services/apiEmployees";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdateEmployee() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: updateEmployee, isLoading } = useMutation({
    mutationFn: updateEmployeeApi,
    onSuccess() {
      toast.success("Informações actualizadas com sucesso");
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      navigate(-1);
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { updateEmployee, isLoading };
}
