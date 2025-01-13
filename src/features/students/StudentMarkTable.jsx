import styled from "styled-components";

const StyledStudentMarkTable = styled.div`
  /* display: grid;
  grid-template-columns: 2fr repeat(13, 3rem); */
  border: 1px solid var(--color-grey-100);
  width: 100%;
`;
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr repeat(12, 0.3fr);
  grid-template-rows: 1fr 1fr;
  background-color: var(--color-grey-100);
  font-weight: 600;
  width: 100%;
  & > span {
    border: 1px solid var(--color-grey-200);
    padding: 0.5rem 1rem;
  }
`;
const Subject = styled.span`
  grid-row: 1/3;
`;
const Trimester1 = styled.span`
  grid-column: 2/6;
  text-align: center;
`;
const Trimester2 = styled.span`
  grid-column: 6/10;
  text-align: center;
`;
const Trimester3 = styled.span`
  grid-column: 10/14;
  text-align: center;
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, 0.3fr);
  & > span {
    border: 1px solid var(--color-grey-200);
    padding: 0.5rem 1rem;
  }
`;
function StudentMarkTable({ children }) {
  return <StyledStudentMarkTable>{children}</StyledStudentMarkTable>;
}
function Header() {
  return (
    <StyledHeader>
      <Subject>Disciplinas</Subject>
      <Trimester1>I Trimestre</Trimester1>
      <Trimester2>II Trimestre</Trimester2>
      <Trimester3>III Trimestre</Trimester3>
      <span>NAC</span>
      <span>NPP</span>
      <span>NPT</span>
      <span>MF</span>

      <span>NAC</span>
      <span>NPP</span>
      <span>NPT</span>
      <span>MF</span>

      <span>NAC</span>
      <span>NPP</span>
      <span>NPT</span>
      <span>MF</span>
    </StyledHeader>
  );
}
function Row({ children }) {
  return <StyledRow>{children}</StyledRow>;
}
function Body({ render, data }) {
  return data.map(render);
}
StudentMarkTable.Header = Header;
StudentMarkTable.Body = Body;
StudentMarkTable.Row = Row;
export default StudentMarkTable;
