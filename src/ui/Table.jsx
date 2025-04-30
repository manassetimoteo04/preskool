import { createContext, useContext } from "react";
import styled from "styled-components";
const StyledTable = styled.div`
  max-width: 100%;
`;

const StyledBody = styled.section`
  background-color: var(--color-grey-0);
`;

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  padding: 1rem 3rem;
  font-weight: 600;
  column-gap: 2rem;
`;

const StyledRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${(props) => props.columns};
  padding: 1rem 3rem;
  column-gap: 2rem;
  position: relative;
  border-bottom: 1px solid var(--color-grey-100);
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
`;
const TableContext = createContext();
function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}
function Header({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}
function Row({ children }) {
  const { columns } = useContext(TableContext);

  return <StyledRow columns={columns}>{children}</StyledRow>;
}
function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}
function Body({ render, data }) {
  return <StyledBody>{data?.map(render)}</StyledBody>;
}
Table.Header = Header;
Table.Row = Row;
Table.Footer = Footer;
Table.Body = Body;
export default Table;
