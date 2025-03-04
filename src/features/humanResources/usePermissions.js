import { useQuery } from "@tanstack/react-query";
import { getUserPermissions } from "../../services/apiUsers";

export function usePermissions(id) {
  const { data: permissions, isLoading } = useQuery({
    queryFn: () => getUserPermissions(id),
    queryKey: ["permissions", id],
  });
  return { permissions, isLoading };
}
