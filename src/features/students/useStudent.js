import { useQuery } from "@tanstack/react-query";
import { getStudent } from "../../services/apiStudents";
import { useParams } from "react-router-dom";

export function useStudent() {
  const { studentId: id } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getStudent(id),
    queryKey: ["students", id],
  });
  return { data, isLoading };
}
