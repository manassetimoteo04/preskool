import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStudentMarks } from "../../../services/apiMarks";
import toast from "react-hot-toast";

export function useCreateMarks() {
  const queryClient = useQueryClient();
  const { mutate: createMarks, isLoading } = useMutation({
    mutationFn: createStudentMarks,
    onSuccess() {
      toast.success("Notas adicionadas com sucesso");
      queryClient.invalidateQueries({ queryKey: ["marks"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { createMarks, isLoading };
}
