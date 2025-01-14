import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiClasses";

export function useCourses() {
  const { data: courses, isLoading } = useQuery({
    queryFn: getCourses,
    queryKey: ["classes", "courses"],
  });
  return { courses, isLoading };
}
