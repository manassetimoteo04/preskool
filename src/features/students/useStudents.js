import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";

export function useStudents(ids) {
  const { data: students, isLoading } = useQuery({
    queryFn: () => getStudents(ids),
    queryKey: ["students", ids],
  });
  return { students, isLoading };
}
