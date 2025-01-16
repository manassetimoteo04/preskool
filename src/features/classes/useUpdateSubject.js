import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSubject as updateSubjectApi } from "../../services/apiSubjects";
import toast from "react-hot-toast";

export function useUpdateSubject() {
  const queryClient = useQueryClient();
  const { mutate: updateSubject, isLoading } = useMutation({
    mutationFn: ({ id, data }) => updateSubjectApi(id, data),
    onSuccess: () => {
      toast.success("Disciplina adicionada com sucesso");
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
    onError: (err) => toast.error(err.messsage),
  });

  return { updateSubject, isLoading };
}
