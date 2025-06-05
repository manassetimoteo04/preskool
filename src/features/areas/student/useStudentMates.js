import { useStudents } from "../../students/useStudents";
import { useCurrentUser } from "../../../context/AuthContext";
export function useStudentMates() {
  const { currentUser } = useCurrentUser();
  const { students, isLoading } = useStudents({
    classId: currentUser?.user?.classId,
    userId: currentUser?.user?.id,
  });
  return { students, isLoading };
}
