import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMarks } from "../../../services/apiMarks";
import toast from "react-hot-toast";

export function useUpdateMarks() {
  const queryClient = useQueryClient();
  const { mutate: updateStudentMarks, isLoading } = useMutation({
    mutationFn: updateMarks,
    onSuccess() {
      toast.success("Notas actualizadas com sucesso");
      queryClient.invalidateQueries({ queryKey: ["marks"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { updateStudentMarks, isLoading };
}
