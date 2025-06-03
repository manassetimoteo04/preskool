import { useQuery } from "@tanstack/react-query";
import { getStudent } from "../../services/apiStudents";
import { useParams } from "react-router-dom";

export function useStudent(argId) {
  const { studentId: id } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getStudent(id || argId),
    queryKey: ["students", id || argId],
  });
  return { data, isLoading };
}
