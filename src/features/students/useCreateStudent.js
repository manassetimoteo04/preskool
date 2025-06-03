import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewStudent } from "../../services/apiStudents";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../authentication/useCreateUser";

export function useCreateStudent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { createUser } = useCreateUser();
  async function handleCreate(data) {
    try {
      const { user } = await createUser({
        username: data.internNumber,
        name: data.fullName,
        role: "student",
      });
      await createNewStudent(data, user.id);
    } catch (error) {
      throw new Error(error);
    }
  }
  const { mutate: createStudent, isLoading } = useMutation({
    mutationFn: handleCreate,
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
