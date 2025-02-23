import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../../services/apiEmployees";

export function useEmployee(id) {
  const { data, isLoading } = useQuery({
    queryFn: () => getEmployeeById(id),
    queryKey: ["employees", id],
  });
  return { data, isLoading };
}
