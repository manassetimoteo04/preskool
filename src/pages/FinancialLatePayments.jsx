import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { HiArrowLeft } from "react-icons/hi2";
import FinancialLatePaymentsTable from "../features/financial/FinancialLatePaymentsTable";

function FinancialLatePayments() {
  const navigate = useNavigate();
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Pagamentos e Cobranças</Heading>
        <Button variation="secondary" onClick={() => navigate(-1)}>
          <HiArrowLeft /> Voltar
        </Button>
      </Row>
      <FinancialLatePaymentsTable />
    </Row>
  );
}

export default FinancialLatePayments;
