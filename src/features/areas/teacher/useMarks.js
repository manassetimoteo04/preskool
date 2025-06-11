import { useQuery } from "@tanstack/react-query";
import { getMarks } from "../../../services/apiMarks";

export function useMarks(props) {
  const { data: marks, isLoading } = useQuery({
    queryFn: () => getMarks(props),
    queryKey: [
      "marks",
      props.classId,
      props.studentId,
      props.subjectId,
      props.trimesterId,
    ],
  });
  return { marks, isLoading };
}
