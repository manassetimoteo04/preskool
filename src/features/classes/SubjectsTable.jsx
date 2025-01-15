import Spinner from "../../ui/Spinner";
import { useSubject } from "./useSubject";
function SubjectsTable() {
  const { data: subjects, isLoading } = useSubject();
  if (isLoading) return <Spinner />;
  console.log(subjects);
  return <div></div>;
}

export default SubjectsTable;
