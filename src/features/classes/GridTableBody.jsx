import Spinner from "../../ui/Spinner";
import { useGrades } from "../settings/classesAndGrades/useGrades";
import ClassesTable from "./ClassesTable";
import { useClasse } from "./useClasse";

function GridTableBody({ course = null }) {
  const { data, isLoading } = useGrades(null, course?.id);

  const finalData = !course
    ? data?.filter((c) => c.gradeType === "fundamentalSchool")
    : data;
  const gradesIds = finalData?.map((c) => c.id);
  const { classe, isLoading: isLoading2 } = useClasse({ gradesIds });

  if (isLoading || isLoading2) return <Spinner />;

  const classesList = classe
    ?.map((cl) => {
      const grade = finalData?.find((d) => d.id === cl.gradeId)?.gradeYear;
      return { ...cl, grade };
    })
    .sort((a, b) => a?.grade?.localeCompare(b.grade))
    .sort((a, b) => a?.variation?.localeCompare(b.variation));
  return (
    <ClassesTable.Body
      data={classesList}
      render={(classe) => (
        <ClassesTable.Box classe={classe} key={classe.id}></ClassesTable.Box>
      )}
    />
  );
}

export default GridTableBody;
