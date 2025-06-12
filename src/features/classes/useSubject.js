import { useQuery } from "@tanstack/react-query";
import { getSubject } from "../../services/apiSubjects";

export function useSubject({ id, filterField, filterId, classId }) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getSubject({ id, filterField, filterId, classId }),
    queryKey: ["subjects", id ? id : filterId, classId],
  });
  return { data, isLoading, error };
}
