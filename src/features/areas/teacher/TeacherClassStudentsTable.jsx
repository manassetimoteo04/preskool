import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Table from "../../../ui/Table";
import { useParams } from "react-router-dom";
import { useStudents } from "../../students/useStudents";
import Spinner from "../../../ui/Spinner";
import Menus from "../../../ui/Menus";
import Modal from "../../../ui/Modal";
import StudentsTableRow from "./StudentsTableRow";

const StyledStudentsTable = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  & > header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid var(--color-grey-200);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function TeacherClassStudentsTable() {
  const { classId } = useParams();

  const { students, isLoading } = useStudents(classId);
  if (isLoading) return <Spinner />;
  return (
    <StyledStudentsTable>
      <header>
        <Heading as="h3">Todos Estudantes</Heading>
      </header>
      <Table columns="4fr 1fr 1fr 1fr 1fr 4rem">
        <Table.Header>
          <span>Nome Completo</span>
          <span>NAC</span>
          <span>NPP</span>
          <span>NPF</span>
          <span>MFT</span>
          <span></span>
        </Table.Header>
        <Menus>
          <Modal>
            <Table.Body
              data={students}
              render={(student) => <StudentsTableRow student={student} />}
            />
          </Modal>
        </Menus>
      </Table>
    </StyledStudentsTable>
  );
}

export default TeacherClassStudentsTable;
