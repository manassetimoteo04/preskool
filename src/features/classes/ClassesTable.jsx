import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineDocumentCurrencyRupee,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import Button from "../../ui/Button";

import { useNavigate } from "react-router-dom";
import { useGrades } from "../settings/classesAndGrades/useGrades";
import { useCourse } from "./useCourse";
import Spinner from "../../ui/Spinner";
const StyledClassTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-grey-0);
`;

const TableBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  & > h3 {
    padding: 1rem 2rem;
    background-color: var(--color-grey-200);
  }
  & > div {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    & > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    & > span svg {
      font-size: 2rem;
    }
  }
`;
const StyledHeader = styled.header`
  padding: 2rem;
  background-color: var(--color-brand-100);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > h3 span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

const StyledBody = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
function ClassesTable({ children }) {
  return <StyledClassTable>{children}</StyledClassTable>;
}

function Box({ classe, isTeacher }) {
  const navigate = useNavigate();
  const { id, variation, capacity, subjects, gradeId, students, period, room } =
    classe;

  const { data: gradeData, isLoading: gradeLoading } = useGrades(gradeId);
  const { data: course, isLoading: courseLoading } = useCourse(
    gradeData?.courseId
  );
  if (gradeLoading || courseLoading) return <Spinner />;

  return (
    <TableBox>
      <Heading as="h3">
        {course?.courseName} &mdash; {period} &mdash; {gradeData.gradeYear}
      </Heading>
      <div>
        <span>
          <HiOutlineUsers /> {students?.length} Estudantes
        </span>
        {!isTeacher && (
          <span>
            <HiOutlineBookOpen /> {subjects?.length} Cadeiras
          </span>
        )}
        <span>
          <HiOutlineClock /> {period}
        </span>{" "}
        <span>
          <HiOutlineHomeModern /> Sala {room}
        </span>{" "}
        {!isTeacher && (
          <span>
            <HiOutlineCube /> Capacidade {capacity}
          </span>
        )}
        <span>
          <HiOutlineDocumentCurrencyRupee /> Variação {variation}
        </span>
        <Button
          onClick={() =>
            navigate(`/area/${isTeacher ? "teacher" : "admin"}/classes/${id}`)
          }
        >
          Ver detalhes
        </Button>
      </div>
    </TableBox>
  );
}
function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
function Body({ render, data }) {
  return <StyledBody>{data?.map(render)}</StyledBody>;
}

ClassesTable.Box = Box;
ClassesTable.Header = Header;
ClassesTable.Body = Body;
export default ClassesTable;
