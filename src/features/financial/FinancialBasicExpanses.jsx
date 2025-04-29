import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const StyledFinancialTable = styled.div`
  & > header {
    padding: 1rem 2rem;
    display: grid;
    align-items: center;

    grid-template-columns: 2fr 1fr 0.5fr;
    border-bottom: 1px solid var(--color-grey-100);
    & > span {
      font-weight: 600;
    }
  }
`;

const StyledTableRow = styled.div`
  display: grid;
  padding: 1rem 2rem;
  align-items: center;
  grid-template-columns: 2fr 1fr 0.5fr;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
function FinancialBasicExpanses() {
  return (
    <DetailBox>
      <header>
        <Heading as="h3">Outras Despesas</Heading>
      </header>
      <StyledFinancialTable>
        <header>
          <span>Categoria</span>
          <span>Valor</span>
          <span></span>
        </header>
        <StyledTableRow>
          <span>Água</span>
          <span>23.000,00</span>
          <Button size="small">Pagar</Button>
        </StyledTableRow>
        <StyledTableRow>
          <span>Energia</span>
          <span>5.000,00</span>
          <Button size="small">Pagar</Button>
        </StyledTableRow>
        <StyledTableRow>
          <span>Alimentação</span>
          <span>10.000,00</span>
          <Button size="small">Pagar</Button>
        </StyledTableRow>
      </StyledFinancialTable>
    </DetailBox>
  );
}

export default FinancialBasicExpanses;
