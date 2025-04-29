import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import EarnExpensesChart from "./EarnExpensesChart";
import FinancialActions from "./FinancialActions";
import FinancialResume from "./FinancialResume";
import FinancialMonthlyPayments from "./FinancialMonthlyPayments";
import FinancialBasicExpanses from "./FinancialBasicExpanses";

const StyledGrid2Cols = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
`;
function FinancialLayout() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Financeiro</Heading>
        <FinancialActions />
      </Row>
      <FinancialResume />
      <EarnExpensesChart />
      <StyledGrid2Cols>
        <FinancialMonthlyPayments />
        <FinancialBasicExpanses />
      </StyledGrid2Cols>
    </Row>
  );
}

export default FinancialLayout;
