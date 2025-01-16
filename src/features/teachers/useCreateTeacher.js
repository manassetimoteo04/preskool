import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewTeacher } from "../../services/apiTeachers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateTeacher() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createTeacher, isLoading } = useMutation({
    mutationFn: createNewTeacher,
    onSuccess: () => {
      toast.success("Novo Professor cadastrado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      navigate("/teachers");
    },
    onError: (err) => toast.error(err.message),
  });
  return { createTeacher, isLoading };
}
