import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewGrade } from "../../../services/apiGrades";
import toast from "react-hot-toast";

export function useCreateGrades() {
  const queryClient = useQueryClient();
  const { mutate: createGrade, isLoading } = useMutation({
    mutationFn: createNewGrade,
    onSuccess: () => {
      toast.success("Série Cadastrada com sucesso");
      queryClient.invalidateQueries({ queryKey: ["grades"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createGrade, isLoading };
}
