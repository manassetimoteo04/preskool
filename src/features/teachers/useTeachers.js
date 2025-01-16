import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "../../services/apiTeachers";

export function useTeachers() {
  const { data: teachers, isLoading } = useQuery({
    queryFn: getTeachers,
    queryKey: ["teachers"],
  });
  return { teachers, isLoading };
}
