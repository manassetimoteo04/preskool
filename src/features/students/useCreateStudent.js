import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewStudent } from "../../services/apiStudents";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateStudent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createStudent, isLoading } = useMutation({
    mutationFn: createNewStudent,
    onSuccess: () => {
      toast.success("Estudante registrado com successo");
      queryClient.invalidateQueries({ queryKey: ["students"] });
      navigate("/students");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createStudent, isLoading };
}
