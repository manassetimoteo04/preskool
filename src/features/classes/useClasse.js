import { useQuery } from "@tanstack/react-query";
import { getClasse } from "../../services/apiClasses";

export function useClasse({ courseId }) {
  const { data: classe, isLoading } = useQuery({
    queryFn: () => getClasse({ courseId }),
    queryKey: ["classes", courseId],
  });
  return { classe, isLoading };
}
