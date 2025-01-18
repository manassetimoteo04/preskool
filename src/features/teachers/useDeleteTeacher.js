import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeacher as deleteTeacherApi } from "../../services/apiTeachers";
import toast from "react-hot-toast";

export function useDeleteTeacher() {
  const queryClient = useQueryClient();
  const { mutate: deleteTeacher, isLoading } = useMutation({
    mutationFn: deleteTeacherApi,
    onSuccess: () => {
      toast.success("Professor deletado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });
  return { deleteTeacher, isLoading };
}
