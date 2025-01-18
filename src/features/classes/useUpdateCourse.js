import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCourse as updateCourseApi } from "../../services/apiClasses";
import toast from "react-hot-toast";

export function useUpdateCourse() {
  const queryClient = useQueryClient();
  const { mutate: updateCourse, isLoading } = useMutation({
    mutationFn: updateCourseApi,
    onSuccess: () => {
      toast.success("Informações do curso actualizadas com sucesso");
      queryClient.invalidateQueries({ queryKey: ["classes", "courses"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateCourse, isLoading };
}
