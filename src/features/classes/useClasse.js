import { useQuery } from "@tanstack/react-query";
import { getClasse } from "../../services/apiClasses";

export function useClasse({ id, courseId }) {
  const { data: classe, isLoading } = useQuery({
    queryFn: () => getClasse({ id, courseId }),
    queryKey: ["classes", courseId || id],
  });
  return { classe, isLoading };
}
