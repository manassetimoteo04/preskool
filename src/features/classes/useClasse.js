import { useQuery } from "@tanstack/react-query";
import { getClasse } from "../../services/apiClasses";

export function useClasse({ id, gradeId, gradesIds, field }) {
  const { data: classe, isLoading } = useQuery({
    queryFn: () => getClasse({ id, gradeId, gradesIds, field }),
    queryKey: ["classes", gradeId || id || gradesIds],
  });
  return { classe, isLoading };
}
