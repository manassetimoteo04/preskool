import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";

const StyledFinancialTable = styled.div`
  & > header {
    padding: 1rem 2rem;
    display: grid;
    align-items: center;

    grid-template-columns: 2fr 1fr 1.2fr 1fr 0.5fr;
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
  grid-template-columns: 2fr 1fr 1.2fr 1fr 0.5fr;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
function FinancialMonthlyPayments() {
  return (
    <DetailBox>
      <header>
        <Heading as="h3">Pagamentos e Cobranças</Heading>
      </header>
      <StyledFinancialTable>
        <header>
          <span>Nome</span>
          <span>Status</span>
          <span>Valor</span>
          <span>Tipo</span>
          <span></span>
        </header>
        <StyledTableRow>
          <span>Manasse Timóteo</span>
          <Tag type="pending">Pendente</Tag>
          <span>50.000,00</span>
          <span>Salário</span>

          <Button size="small">Pagar</Button>
        </StyledTableRow>

        <StyledTableRow>
          <span>Ricardo Pembele</span>
          <Tag type="active">Pago</Tag>
          <span>6.500,00</span>
          <span>Propina</span>

          <Button size="small">Pagar</Button>
        </StyledTableRow>

        <StyledTableRow>
          <span>Adelino Pembele</span>
          <Tag type="inactive">Atrasado</Tag>
          <span>20.000,00</span>
          <span>Salário</span>

          <Button size="small">Pagar</Button>
        </StyledTableRow>

        <StyledTableRow>
          <span>Manasse Timóteo</span>
          <Tag type="pending">Pendente</Tag>
          <span>20.000,00</span>
          <span>Salário</span>

          <Button size="small">Pagar</Button>
        </StyledTableRow>
      </StyledFinancialTable>
    </DetailBox>
  );
}

export default FinancialMonthlyPayments;
