import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingsApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isLoading } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess() {
      toast.success("Informações actualizadas com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["settings", "roles", "roles-permissions"],
      });
    },
    onError(err) {
      toast.error(err.message);
    },
  });
  return { updateSettings, isLoading };
}
