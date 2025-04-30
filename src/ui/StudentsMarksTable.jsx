import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTableBody = styled.div`
  background-color: var(--color-grey-0);
`;
const StyledTable = styled.div`
  max-width: 100%;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
`;
const StyledTableHeader = styled.div`
  background-color: var(--color-grey-100);
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  padding: 1rem 3rem;
  font-weight: 600;
  column-gap: 2rem;

  width: 100%;
`;
const StyledTableRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${(props) => props.columns};
  padding: 1rem 3rem;
  column-gap: 2rem;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const TableContext = createContext();
function StudentsMarksTable({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledTableHeader columns={columns}>{children}</StyledTableHeader>;
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledTableRow columns={columns}>{children}</StyledTableRow>;
}
function Body({ data, render }) {
  return <StyledTableBody>{data.map(render)}</StyledTableBody>;
}

StudentsMarksTable.Header = Header;
StudentsMarksTable.Body = Body;
StudentsMarksTable.Row = Row;
export default StudentsMarksTable;
