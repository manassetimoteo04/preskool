import { useQuery } from "@tanstack/react-query";
import { getSubject } from "../../services/apiSubjects";

export function useSubject({ id, classId }) {
  const { data, isLoading } = useQuery({
    queryFn: () => getSubject({ id, classId }),
    queryKey: ["subjects", id ? id : classId],
  });
  return { data, isLoading };
}
