import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";

export function useStudents() {
  const { data: students, isLoading } = useQuery({
    queryFn: getStudents,
    queryKey: ["students"],
  });
  return { students, isLoading };
}
