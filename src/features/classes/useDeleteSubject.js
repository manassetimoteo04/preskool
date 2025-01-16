import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubject as deleteSubjectApi } from "../../services/apiSubjects";
import toast from "react-hot-toast";

export function useDeleteSubject() {
  const queryClient = useQueryClient();
  const { mutate: deleteSubject, isLoading } = useMutation({
    mutationFn: deleteSubjectApi,
    onSuccess: () => {
      toast.success("Disciplina deletada com sucesso");
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteSubject, isLoading };
}
