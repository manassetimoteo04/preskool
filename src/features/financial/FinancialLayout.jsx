import Row from "../../ui/Row";
import EarnExpensesChart from "./EarnExpensesChart";
import FinancialResume from "./FinancialResume";

function FinancialLayout() {
  return (
    <Row>
      <FinancialResume />
      <EarnExpensesChart />
    </Row>
  );
}

export default FinancialLayout;
