import { useQuery } from "@tanstack/react-query";
import { getAcademicYear } from "../../services/apiSettings";

export function useAcademicYear(id) {
  const { data: academicYear, isLoading } = useQuery({
    queryFn: () => getAcademicYear(id),
    queryKey: ["academicYear", id],
  });
  return { academicYear, isLoading };
}
