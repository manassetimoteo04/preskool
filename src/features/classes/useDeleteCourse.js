import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse as deleteCourseApi } from "../../services/apiClasses";
import toast from "react-hot-toast";

export function useDeleteCourse() {
  const queryClient = useQueryClient();
  const { mutate: deleteCourse, isLoading } = useMutation({
    mutationFn: deleteCourseApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes", "courses"] });
      toast.success("Curso deletado com sucesso");
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteCourse, isLoading };
}
