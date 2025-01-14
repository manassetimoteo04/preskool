import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewClass } from "../../services/apiClasses";
import toast from "react-hot-toast";

export function useCreateClass() {
  const queryClient = useQueryClient();
  const { mutate: createClass, isLoading } = useMutation({
    mutationFn: createNewClass,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      toast.success("Nova turma cadastrada com sucesso");
    },
    onError: (err) => toast.error(err.message),
  });
  return { createClass, isLoading };
}
