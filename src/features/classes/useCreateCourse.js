import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCourse } from "../../services/apiClasses";
import toast from "react-hot-toast";

export function useCreateCourse() {
  const queryClient = useQueryClient();
  const { mutate: createCourse, isLoading } = useMutation({
    mutationFn: createNewCourse,
    onSuccess: () => {
      toast.success("Novo curso cadastrado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["classes", "courses"] });
    },
  });
  return { createCourse, isLoading };
}
