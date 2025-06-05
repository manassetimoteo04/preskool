import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../services/apiClasses";

export function useCourse(id, classeId = null) {
  const { data, isLoading } = useQuery({
    queryKey: ["courses", id, classeId],
    queryFn: () => getCourse(id, classeId),
  });
  return { data, isLoading };
}
