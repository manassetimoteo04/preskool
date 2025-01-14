import { useQuery } from "@tanstack/react-query";
import { getClasse } from "../../services/apiClasses";

export function useClasse(id) {
  const { data: classe, isLoading } = useQuery({
    queryFn: () => getClasse(id),
    queryKey: ["classes", id],
  });
  return { classe, isLoading };
}
