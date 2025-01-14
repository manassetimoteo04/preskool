import styled from "styled-components";

const StyledClassTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-grey-0);
`;

const TableBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-sm);
`;
const StyledHeader = styled.header`
  padding: 2rem;
  background-color: var(--color-brand-100);
  display: flex;
  justify-content: space-between;
  align-items: center;
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

function Box({ children }) {
  return <TableBox>{children}</TableBox>;
}
function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
function Body({ render, data }) {
  return <StyledBody>{data.map(render)}</StyledBody>;
}

ClassesTable.Box = Box;
ClassesTable.Header = Header;
ClassesTable.Body = Body;
export default ClassesTable;
