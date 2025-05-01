import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
export function useSettings(name) {
  const { data: settings, isLoading } = useQuery({
    queryFn: () => getSettings(name),
    queryKey: ["settings", name],
  });
  return { settings, isLoading };
}
