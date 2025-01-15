import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineUsers,
} from "react-icons/hi2";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useClasse } from "./useClasse";
import { useNavigate } from "react-router-dom";
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

function Box({ classe }) {
  const navigate = useNavigate();
  const { grade, period, students, subjects, id } = classe;
  return (
    <TableBox>
      <Heading as="h3">
        {grade}ª Classe &mdash; {period}
      </Heading>
      <div>
        <span>
          <HiOutlineUsers /> {students?.length} Estudantes
        </span>
        <span>
          <HiOutlineBookOpen /> {subjects?.length} Cadeiras
        </span>
        <span>
          <HiOutlineClock /> {period}
        </span>
        <Button onClick={() => navigate(`/classes/${id}`)}>Ver detalhes</Button>
      </div>
    </TableBox>
  );
}
function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
function Body({ render, courseId, index }) {
  const { classe: data, isLoading } = useClasse({ courseId: courseId?.id });
  console.log(index, courseId.id);
  if (isLoading) return <Spinner />;

  return <StyledBody>{data?.map(render)}</StyledBody>;
}

ClassesTable.Box = Box;
ClassesTable.Header = Header;
ClassesTable.Body = Body;
export default ClassesTable;
