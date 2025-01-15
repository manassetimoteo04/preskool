import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../services/apiClasses";

export function useCourse(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["courses", id],
    queryFn: () => getCourse(id),
  });
  return { data, isLoading };
}
