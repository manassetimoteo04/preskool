import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deteleteStudent as deleteStudentApi } from "../../services/apiStudents";
import toast from "react-hot-toast";

export function useDeleteStudent() {
  const queryClient = useQueryClient();
  const { mutate: deleteStudent, isLoading } = useMutation({
    mutationFn: deleteStudentApi,
    onSuccess: () => {
      toast.success("Estudante exluído com sucesso");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteStudent, isLoading };
}
