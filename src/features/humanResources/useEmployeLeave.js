import { useQuery } from "@tanstack/react-query";
import { getEmployeeLeaveById } from "../../services/apiEmployees";

export function useEmployeeLeave(id) {
  const { data, isLoading } = useQuery({
    queryFn: () => getEmployeeLeaveById(id),
    queryKey: ["employeeLeaves", id],
  });
  return { data, isLoading };
}
