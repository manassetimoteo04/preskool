import { useQuery } from "@tanstack/react-query";
import { getTrimester } from "../../services/apiSettings";

export function useTrimester(id) {
  const { data: trimester, isLoading } = useQuery({
    queryFn: () => getTrimester(id),
    queryKey: ["trimester", id],
  });
  return { trimester, isLoading };
}
