import { useQuery } from "@tanstack/react-query";
import { getRolePermissions } from "../../../services/apiSettings";

export function useRolePermissions(id) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getRolePermissions(id),
    queryKey: ["role-permissions", id],
  });
  return { data, isLoading, error };
}
