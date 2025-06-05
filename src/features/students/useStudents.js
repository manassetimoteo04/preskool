import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";

export function useStudents(classId) {
  const { data: students, isLoading } = useQuery({
    queryFn: () => getStudents(classId),
    queryKey: ["students", classId],
  });
  return { students, isLoading };
}
