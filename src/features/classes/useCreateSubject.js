import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubject as createSubjectApi } from "../../services/apiSubjects";
import toast from "react-hot-toast";

export function useCreateSubject() {
  const queryClient = useQueryClient();
  const { mutate: createSubject, isLoading } = useMutation({
    mutationFn: createSubjectApi,
    onSuccess: () => {
      toast.success("Disciplina adicionada com sucesso");
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },
    onError: (err) => toast.error(err.messsage),
  });

  return { createSubject, isLoading };
}
