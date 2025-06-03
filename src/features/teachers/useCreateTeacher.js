import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewTeacher } from "../../services/apiTeachers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../authentication/useCreateUser";
export function useCreateTeacher() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { createUser } = useCreateUser();
  async function handleCreate(data) {
    try {
      const { user } = await createUser({
        username: data.internNumber,
        name: data.fullName,
        role: "teacher",
      });
      await createNewTeacher(data, user.id);
    } catch (error) {
      throw new Error(error);
    }
  }
  const { mutate: createTeacher, isLoading } = useMutation({
    mutationFn: handleCreate,
    onSuccess: () => {
      toast.success("Novo Professor cadastrado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      navigate("/teachers");
    },
    onError: (err) => toast.error(err.message),
  });
  return { createTeacher, isLoading };
}
