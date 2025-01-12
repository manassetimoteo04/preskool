import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewStudent } from "../../services/apiStudents";
import toast from "react-hot-toast";

export function useCreateStudent() {
  const queryClient = useQueryClient();
  const { mutate: createStudent, isLoading } = useMutation({
    mutationFn: createNewStudent,
    onSuccess: (data) => {
      console.log("new ", data);
      toast.success("Estudante registrado com successo");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createStudent, isLoading };
}
