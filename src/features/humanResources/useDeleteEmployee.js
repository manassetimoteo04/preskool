import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEmployee as deleteEmployeeApi } from "../../services/apiEmployees";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteEmployee() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteEmployee, isLoading } = useMutation({
    mutationFn: deleteEmployeeApi,
    onSuccess() {
      navigate(-1);
      toast.success("Funcionário excluido com sucesso");
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { deleteEmployee, isLoading };
}
