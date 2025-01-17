import { useQuery } from "@tanstack/react-query";
import { getTeacher } from "../../services/apiTeachers";

export function useGetTeacher(id) {
  const { data, isLoading } = useQuery({
    queryFn: () => getTeacher(id),
    queryKey: ["teachers", id],
  });
  return { data, isLoading };
}
