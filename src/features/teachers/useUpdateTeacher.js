import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTeacher as updateTeacherApi } from "../../services/apiTeachers";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdateTeacher() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: updateTeacher, isLoading } = useMutation({
    mutationFn: updateTeacherApi,
    onSuccess: () => {
      toast.success("Informações actualizadas com sucesso");
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      navigate("/teachers");
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateTeacher, isLoading };
}
