import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";

import styled from "styled-components";

import { useFeeSalaryLatePayments } from "./useFeeSalaryLatePayments";
import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import FinancialLateTableOperations from "./FinancialLateTableOperations";
import { HiEye, HiPlus } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import SalaryFeePaymentForm from "./SalaryFeePaymentForm";
import { useNavigate } from "react-router-dom";

const StyledStudentTable = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  & > header {
    padding: 1rem 2rem;
    display: flex;
    border-bottom: 1px solid var(--color-grey-200);

    justify-content: end;
  }
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledConcatedBox = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: 500;
  }
  & > span {
    font-size: 1.2rem;
  }
`;
function FinancialLatePaymentsTable() {
  const { latePayments, isLoading } = useFeeSalaryLatePayments();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  return (
    <Modal>
      <StyledStudentTable>
        <header>
          <Heading as="h3">Pagamentos e Cobranças</Heading>
          <FinancialLateTableOperations />
        </header>
        <Menus>
          <Table columns="1.5fr 0.8fr 0.5fr 0.5fr 0.8fr 1fr 0.5fr 2rem">
            <Table.Header>
              <span>Nome Completo</span>
              <span>Valor</span>
              <span>Tipo</span>
              <span>Status</span>
              <span>Vencimento</span>
              <span>Estudante/Função</span>
              <span>Atraso</span>
              <span></span>
            </Table.Header>

            <Table.Body
              data={latePayments}
              render={(item) => (
                <Table.Row key={item.id}>
                  <FlexBox>
                    <Img src={"/default-user.jpg"} />
                    <StyledConcatedBox>
                      <p>
                        {item.fullName.split(" ")[0] +
                          " " +
                          item.fullName.split(" ").slice(-1)}
                      </p>
                      <span>{item.emailAddress || item.studentPhone}</span>
                    </StyledConcatedBox>
                  </FlexBox>
                  <span>
                    {formatCurrency(item.baseSalary || item.feePaymentBase)}
                  </span>
                  <span>{item.isEmployee ? "Salário" : "Propina"}</span>
                  <Tag type="pending">Pendente</Tag>
                  <span>23 Jan 2025</span>
                  <span>
                    {item.isEmployee ? item.employeeFunction : "Estudante"}{" "}
                  </span>{" "}
                  <span>23 Dia(s)</span>
                  <Menus.Toggle menuId={item.id} />
                  <Menus.Menu menuId={item.id}>
                    <Menus.List>
                      <Modal.Open opens={item.id}>
                        <Menus.Button icon={<HiPlus />}>
                          {item.isEmployee ? "Salário" : "Propina"}
                        </Menus.Button>
                      </Modal.Open>
                      <Menus.Button
                        onClick={() =>
                          navigate(
                            item.isEmployee
                              ? `/human-resources/employee/${item.id}`
                              : `/students/${item.id}`
                          )
                        }
                        icon={<HiEye />}
                      >
                        Visitar Perfil
                      </Menus.Button>
                    </Menus.List>
                  </Menus.Menu>
                  <Modal.Window name={item.id} buttonClose={true}>
                    <SalaryFeePaymentForm
                      isEmployee={item.isEmployee}
                      current={item}
                    />
                  </Modal.Window>
                </Table.Row>
              )}
            />
          </Table>
        </Menus>
      </StyledStudentTable>
    </Modal>
  );
}

export default FinancialLatePaymentsTable;
