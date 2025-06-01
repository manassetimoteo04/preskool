import Spinner from "../../ui/Spinner";
import { useGrades } from "../settings/classesAndGrades/useGrades";
import ClassesTable from "./ClassesTable";
import { useClasse } from "./useClasse";

function GridTableBody({ course, i }) {
  const { data, isLoading } = useGrades(null, course.id);
  const gradesIds = data?.map((c) => c.id);

  const { classe, isLoading: isLoading2 } = useClasse({ gradesIds });

  if (isLoading || isLoading2) return <Spinner />;

  const classesList = classe
    .map((cl) => {
      const grade = data.find((d) => d.id === cl.gradeId).gradeYear;
      return { ...cl, grade };
    })
    .sort((a, b) => a.grade.localeCompare(b.grade));
  return (
    <ClassesTable.Body
      data={classesList}
      index={i}
      render={(classe) => (
        <ClassesTable.Box classe={classe} key={classe.id}></ClassesTable.Box>
      )}
    />
  );
}

export default GridTableBody;
