import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserPermissions } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function useUpdatePermissions() {
  const queryClient = useQueryClient();
  const { mutate: updatePermission, isLoading } = useMutation({
    mutationFn: updateUserPermissions,
    onSuccess() {
      toast.success("Informações actualizadas com sucesso");
      queryClient.invalidateQueries({ queryKey: ["permissions", "employees"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { updatePermission, isLoading };
}
