import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Table from "../../../ui/Table";
import { useParams } from "react-router-dom";
import { useStudents } from "../../students/useStudents";
import Spinner from "../../../ui/Spinner";
import Menus from "../../../ui/Menus";
import Modal from "../../../ui/Modal";
import Select from "../../../ui/Select";
import StudentsTableRow from "./StudentsTableRow";
import { useSubject } from "../../classes/useSubject";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useTrimester } from "../../settings/useTrimester";
import { useAcademic } from "../../../context/AcademicYearContext";
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
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
function TeacherClassStudentsTable() {
  const [currentSubject, setCurrentSubject] = useState();
  const { classId } = useParams();
  const { user } = useUser();
  const { data, isLoading: isLoadingSubjects } = useSubject({
    filterField: "teacherId",
    filterId: user.id,
    classId,
  });
  const { students, isLoading } = useStudents(classId);
  const { trimester } = useTrimester();
  const { currentTrimester, setCurrentTrimester } = useAcademic();
  console.log(currentTrimester);
  useEffect(() => {
    setCurrentSubject(data?.at(0));
  }, [data, setCurrentSubject]);
  if (isLoading || isLoadingSubjects) return <Spinner />;
  return (
    <StyledStudentsTable>
      <header>
        <Heading as="h3">Todos Estudantes</Heading>
        <Flex>
          <Select
            onChange={(e) => {
              const selectedId = e.target.value;
              const selectedTri = trimester.find(
                (tri) => tri.id === selectedId
              );
              setCurrentTrimester(selectedTri);
            }}
            disabled={isLoading}
          >
            {trimester.map((tri) => (
              <option value={tri.id} key={tri.id}>
                {tri.trimester}º Trimestre
              </option>
            ))}
          </Select>
          <Select onChange={(e) => setCurrentSubject(e.target.value)}>
            {data.map((subj) => (
              <option value={subj.id} key={subj.id}>
                {subj.name}
              </option>
            ))}
          </Select>
        </Flex>
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
              render={(student) => (
                <StudentsTableRow
                  currentSubject={currentSubject}
                  student={student}
                />
              )}
            />
          </Modal>
        </Menus>
      </Table>
    </StyledStudentsTable>
  );
}

export default TeacherClassStudentsTable;
