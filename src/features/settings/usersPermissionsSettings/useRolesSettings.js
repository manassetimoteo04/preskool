import { useQuery } from "@tanstack/react-query";
import { getRolesSettings } from "../../../services/apiSettings";

export function useRolesSettings() {
  const { data, isLoading } = useQuery({
    queryFn: getRolesSettings,
    queryKey: ["roles"],
  });
  return { data, isLoading };
}
