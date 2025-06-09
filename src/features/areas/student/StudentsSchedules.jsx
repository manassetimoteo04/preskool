import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";
import Table from "../../../ui/Table";
import Spinner from "../../../ui/Spinner";
import styled from "styled-components";
import { useUser } from "@clerk/clerk-react";
import { useStudent } from "../../students/useStudent";
import { useSubject } from "../../classes/useSubject";
import SubjectRow from "./SubjectRow";

const StyledSchedulesTable = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
`;
function StudentsSchedules() {
  const { user } = useUser();
  const { data: student, isLoading: isLoading1 } = useStudent(user?.id);

  const { data: subjects, isLoading } = useSubject({
    filterField: "classId",
    filterId: student?.classId,
  });

  if (isLoading1 || isLoading) return <Spinner />;
  return (
    <Row>
      <Heading as="h2">Horário da Turma</Heading>
      <StyledSchedulesTable>
        <Table columns="2fr 1.5fr 1fr 1fr">
          <Table.Header>
            <span>Disciplina</span>
            <span>Professor</span>
            <span>Email</span>
            <span>Telefone</span>
          </Table.Header>
          <Table.Body
            data={subjects}
            render={(subject) => <SubjectRow subject={subject} />}
          />
        </Table>
      </StyledSchedulesTable>
    </Row>
  );
}

export default StudentsSchedules;
