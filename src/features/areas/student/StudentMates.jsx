import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import Table from "../../../ui/Table";
import Spinner from "../../../ui/Spinner";
import { useStudentMates } from "./useStudentMates";
import { calcAge } from "../../../utils/helpers";

const MatesTable = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  & > header {
    padding: 2rem;
  }
`;
const FirstLetterBox = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--color-grey-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
function StudentMates() {
  // eslint-disable-next-line no-unused-vars
  const { students, isLoading } = useStudentMates();
  const sorted = students?.sort((a, b) => a.fullName.localeCompare(b.fullName));
  if (isLoading) return <Spinner />;
  return (
    <Row>
      <Heading as="h2">Colegas de Turma</Heading>
      <MatesTable>
        <header>
          <strong>Todos os Colegas</strong>
        </header>
        <Table columns=" 4rem 2fr 1fr 1fr 1fr">
          <Table.Header>
            <span></span>
            <span>Nome</span>
            <span>Sexo</span>
            <span>Idade</span>
            <span>Telefone</span>
          </Table.Header>
          <Table.Body
            data={sorted}
            render={(student, i) => (
              <Table.Row>
                <FirstLetterBox>{i + 1}</FirstLetterBox>

                <span>{student.fullName}</span>
                <span>{student.gender === "m" ? "Masculino" : "Femenino"}</span>
                <span>{calcAge(student.birthDate)}</span>
                <span>{student.studentPhone}</span>
              </Table.Row>
            )}
          />
        </Table>
      </MatesTable>
    </Row>
  );
}

export default StudentMates;
