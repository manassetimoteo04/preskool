import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import { useFeeSalaryLatePayments } from "./useFeeSalaryLatePayments";
import { formatCurrency } from "../../utils/helpers";
import SalaryFeePaymentForm from "./SalaryFeePaymentForm";
import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineClock } from "react-icons/hi2";
import Empty from "../../ui/Empty";

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
  const { latePayments, isLoading } = useFeeSalaryLatePayments();
  if (isLoading) return <Spinner />;
  return (
    <Modal>
      <DetailBox>
        <header>
          <Heading as="h3">Pagamentos e Cobranças em Atraso</Heading>
          <Link to="late-payments">
            todos <HiArrowRight />
          </Link>
        </header>
        <StyledFinancialTable>
          {latePayments.length ? (
            <>
              <header>
                <span>Nome</span>
                <span>Status</span>
                <span>Valor</span>
                <span>Tipo</span>
                <span></span>
              </header>
              {latePayments.map((pay) => (
                <StyledTableRow key={pay}>
                  <span>{pay.fullName}</span>
                  <Tag type="pending">Pendente</Tag>
                  <span>
                    {formatCurrency(
                      pay[pay.isEmployee ? "baseSalary" : "feePaymentBase"]
                    )}
                  </span>
                  <span>{pay.isEmployee ? "Salário" : "Propina"}</span>
                  <Modal.Open
                    opens={
                      pay.isEmployee
                        ? "salary-form" + pay.id
                        : "fee-form" + pay.id
                    }
                  >
                    <Button size="small">
                      {pay.isEmployee ? "Pagar" : "Cobrar"}
                    </Button>
                  </Modal.Open>
                  <Modal.Window
                    buttonClose={true}
                    name={
                      pay.isEmployee
                        ? "salary-form" + pay.id
                        : "fee-form" + pay.id
                    }
                  >
                    <SalaryFeePaymentForm
                      isEmployee={pay.isEmployee ? true : false}
                      current={pay}
                    />
                  </Modal.Window>
                </StyledTableRow>
              ))}
            </>
          ) : (
            <Empty>
              <HiOutlineClock />
              <p>Nenhum pagamento ou cobrança em atraso</p>
            </Empty>
          )}
        </StyledFinancialTable>
      </DetailBox>
    </Modal>
  );
}

export default FinancialMonthlyPayments;
