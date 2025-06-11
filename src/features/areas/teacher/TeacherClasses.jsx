import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";
import ClassesTable from "../../classes/ClassesTable";
import { useUser } from "@clerk/clerk-react";
import { useSubject } from "../../classes/useSubject";
import { useClasse } from "../../classes/useClasse";
import Spinner from "../../../ui/Spinner";

function TeacherClasses() {
  const { user } = useUser();
  const { data, isLoading } = useSubject({
    filterField: "teacherId",
    filterId: user.id,
  });
  const ids = data?.map((sub) => sub.classId);
  const { classe } = useClasse({ gradesIds: ids, field: "id" });
  if (isLoading) return <Spinner />;

  return (
    <Row>
      <Heading as="h2">Turmas</Heading>

      <ClassesTable>
        <ClassesTable.Header>
          <Heading as="h3">Todas as Turmas Vinculadas</Heading>
        </ClassesTable.Header>
        <ClassesTable.Body
          data={classe}
          render={(classe) => (
            <ClassesTable.Box classe={classe} isTeacher={true} />
          )}
        />
      </ClassesTable>
    </Row>
  );
}

export default TeacherClasses;
