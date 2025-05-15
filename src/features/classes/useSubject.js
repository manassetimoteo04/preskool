import { useQuery } from "@tanstack/react-query";
import { getSubject } from "../../services/apiSubjects";

export function useSubject({ id, filterField, filterId }) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getSubject({ id, filterField, filterId }),
    queryKey: ["subjects", id ? id : filterId],
  });
  return { data, isLoading, error };
}
