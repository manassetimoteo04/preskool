import { useQuery } from "@tanstack/react-query";
import { getGrades } from "../../../services/apiGrades";

export function useGrades(id, courseId) {
  const { data, isLoading } = useQuery({
    queryFn: () => getGrades(id, courseId),
    queryKey: ["grades", id, courseId],
  });
  return { data, isLoading };
}
