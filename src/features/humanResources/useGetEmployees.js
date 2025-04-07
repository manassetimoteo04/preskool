import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../services/apiEmployees";

export function useGetEmployees(idList) {
  const { data: employees, isLoading } = useQuery({
    queryFn: () => getEmployees(idList),
    queryKey: ["employees"],
  });
  return { employees, isLoading };
}
