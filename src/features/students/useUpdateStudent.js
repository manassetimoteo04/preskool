import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudent as updateStudentApi } from "../../services/apiStudents";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export function useUpdateStudent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { studentId: id } = useParams();
  const { mutate: updateStudent, isLoading } = useMutation({
    mutationFn: (updateData) => updateStudentApi({ id, updateData }),
    onSuccess: () => {
      toast.success("Estudante actualizado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["students"] });
      navigate(`/students/${id}`);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateStudent, isLoading };
}
