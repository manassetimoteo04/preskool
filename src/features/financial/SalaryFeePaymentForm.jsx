import styled, { css } from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import SmallUserImg from "../../ui/SmallUserImg";
import Button from "../../ui/Button";
import Empty from "../../ui/Empty";
import SpinnerMini from "../../ui/SpinnerMini";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";
import { useState } from "react";
import { formatCurrency, normalizeText } from "../../utils/helpers";
import { useGetEmployees } from "../humanResources/useGetEmployees";
import { usePayEmployee } from "./usePayEmployee";
import { useStudents } from "../students/useStudents";
import { useStudentFeePay } from "./useStudentFeePay";
const StyledBox = styled.div`
  padding: 2rem;
  min-width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const PayUserDetail = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  & > div > strong {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 1.4rem;
    padding: 1px 3px;
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-sm);
  }
  & > span {
    font-size: 1.4rem;
    font-weight: 600;
  }
  border: 1px solid var(--color-grey-200);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-sm);
`;
const StyledConcatedBox = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: 600;
  }
  & > span {
    font-size: 1.2rem;
  }
`;
// const StyledPaymentHistoryTable = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const StyledPaymentRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 0.5fr 1fr 2.5rem;
//   gap: 1rem;
//   padding: 0.5rem;
//   align-items: center;
//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const StyledPopupList = styled.div`
  position: absolute;
  background-color: var(--color-grey-0);
  padding: 1rem;
  width: 100%;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-grey-100);
  height: 20rem;
  overflow: auto;
  z-index: 9999999999;
  border-radius: var(--border-radius-sm);
  & > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.5rem;
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-200);
    }
    &:hover {
      background-color: var(--color-grey-100);
      cursor: pointer;
    }
  }
`;
const StyledForm = styled.form`
  position: relative;
`;
const StyledPayMethod = styled.div`
  margin-top: 1rem;
`;
const PayTypeButton = styled.button`
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  padding: 0.1rem 0.5rem;
  border-radius: var(--border-radius-sm);
  &:hover {
    background-color: var(--color-grey-200);
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-800);
      &:hover {
        background-color: var(--color-brand-700);
        cursor: pointer;
      }
    `}
`;

const NoteInput = styled.input`
  background: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;
// const fakeData = [
//   {
//     id: 2842,
//     nome: "Morgan Larson",
//     email: "brightdwayne@yahoo.com",
//     data: "1967-11-02",
//     telefone: "+1-469-989-4281",
//     sector: "TI",
//     cargo: "Analista",
//   },
//   {
//     id: 1059,
//     nome: "Lorraine Watson",
//     email: "kevinmorales@gill.com",
//     data: "2003-06-20",
//     telefone: "291-263-9585",
//     sector: "Marketing",
//     cargo: "Analista",
//   },
//   {
//     id: 7646,
//     nome: "Thomas James",
//     email: "owenjohn@gmail.com",
//     data: "1963-03-08",
//     telefone: "3825311349",
//     sector: "Financeiro",
//     cargo: "Assistente",
//   },
//   {
//     id: 5350,
//     nome: "Jasmine Drake",
//     email: "snyderjerry@rich.org",
//     data: "1995-07-29",
//     telefone: "001-786-270-5401x169",
//     sector: "Vendas",
//     cargo: "Assistente",
//   },
//   {
//     id: 7358,
//     nome: "Nicholas Washington",
//     email: "glowery@yahoo.com",
//     data: "1998-02-09",
//     telefone: "301-328-1504x571",
//     sector: "RH",
//     cargo: "Gerente",
//   },
//   {
//     id: 7358,
//     nome: "Nicholas Washington",
//     email: "glowery@yahoo.com",
//     data: "1998-02-09",
//     telefone: "301-328-1504x571",
//     sector: "RH",
//     cargo: "Gerente",
//   },
// ];

function SalaryFeePaymentForm({ onCloseModal, isEmployee }) {
  const [currentSelect, setcurrentSelect] = useState(null);
  const [paymentType, setPaymentType] = useState("Bank Transfer");
  const [query, setQuery] = useState("");
  const [notes, setNotes] = useState("");
  const { employees, isLoading } = useGetEmployees();
  const { students } = useStudents();
  const { createEmployeePay, isLoading: isPaying } = usePayEmployee();
  const { studentFeePay, isLoading: isPayingFee } = useStudentFeePay();
  const filteredData = isEmployee
    ? employees?.filter((el) =>
        normalizeText(el.fullName)?.startsWith(normalizeText(query))
      )
    : students.filter((el) =>
        normalizeText(el.fullName)?.startsWith(normalizeText(query))
      );

  function handlePayment() {
    if (!notes) return;
    const salaryPayment = {
      employeId: currentSelect.id,
      baseSalary: currentSelect.baseSalary,
      bonus: 0,
      deductions: 0.0,
      totalAmount: currentSelect.baseSalary,
      paymentDate: new Date().toDateString(),
      period: "2025-04",
      paymentMethod: paymentType,
      status: "Paid", // or "Pending", "Late"
      notes,
    };
    const feePayment = {
      studentId: currentSelect.id,
      feePaymentBase: currentSelect.feePaymentBase,
      fineDelayFee: 0.0,
      totalAmount: currentSelect.feePaymentBase,
      paymentDate: new Date().toDateString(),
      period: "2025-04",
      paymentMethod: paymentType,
      status: "Paid", // or "Pending", "Late"
      notes,
    };
    isEmployee
      ? createEmployeePay(salaryPayment, { onSuccess: onCloseModal })
      : studentFeePay(feePayment, { onSuccess: onCloseModal });
  }
  return (
    <DetailBox>
      <header>
        <Heading as="h3">
          {" "}
          Efectuar Pagamento {isEmployee ? "do Salário" : "de Propina"}
        </Heading>
      </header>
      <StyledBox>
        {!currentSelect && (
          <StyledForm action="">
            <InputRow
              label={isEmployee ? "Procurar Funcionário" : "Procurar Estudante"}
            >
              <Input value={query} onChange={(e) => setQuery(e.target.value)} />
            </InputRow>
            {query && (
              <StyledPopupList>
                {isLoading ? (
                  <Empty>Carregando...</Empty>
                ) : filteredData.length ? (
                  filteredData.map((e) => (
                    <div key={e.id} onClick={() => setcurrentSelect(e)}>
                      <SmallUserImg src={e.biDocument || "/default-user.jpg"} />
                      <StyledConcatedBox>
                        <p>{e.fullName}</p>
                        <span>{e.employeeFunction}</span>
                      </StyledConcatedBox>
                    </div>
                  ))
                ) : (
                  <Empty>Nenhum resultado para {query}</Empty>
                )}
              </StyledPopupList>
            )}
          </StyledForm>
        )}
        {currentSelect ? (
          <>
            <PayUserDetail>
              <div>
                <SmallUserImg src="/default-user.jpg" />
                <StyledConcatedBox>
                  <p>{currentSelect.fullName}</p>
                  <span>
                    {currentSelect[isEmployee ? "employeeFunction" : "course"]}
                    {!isEmployee
                      ? ` - ${currentSelect.grade}ª Classe - ${currentSelect.schoolPeriod}`
                      : ""}
                  </span>
                </StyledConcatedBox>
              </div>
              <div>
                <strong>
                  <HiOutlineMail />{" "}
                  {currentSelect[isEmployee ? "emailAddress" : ""]}
                  manassetimoteo4@gmail.com
                </strong>
                <strong>
                  <HiOutlinePhone />{" "}
                  {currentSelect[isEmployee ? "phoneNumber" : "studentPhone"]}
                </strong>
              </div>
            </PayUserDetail>{" "}
            <PayUserDetail>
              <span>Mês de Referência</span>
              <p>Abril</p>
            </PayUserDetail>
            <PayUserDetail>
              <span>{isEmployee ? "Salário Base" : "Propina"}</span>
              <p>
                {formatCurrency(
                  currentSelect[isEmployee ? "baseSalary" : "feePaymentBase"]
                )}
              </p>
            </PayUserDetail>
            <PayUserDetail>
              <span>Método de Pagamento</span>
              <StyledPayMethod>
                <PayTypeButton
                  active={paymentType === "Bank Transfer" ? "true" : ""}
                  onClick={() => setPaymentType("Bank Transfer")}
                  disabled={isPaying || isPayingFee}
                >
                  Transferência
                </PayTypeButton>
                <PayTypeButton
                  active={paymentType === "Cash" ? "true" : ""}
                  onClick={() => setPaymentType("Cash")}
                  disabled={isPaying || isPayingFee}
                >
                  Cash
                </PayTypeButton>
                <PayTypeButton
                  active={paymentType === "Deposit" ? "true" : ""}
                  onClick={() => setPaymentType("Deposit")}
                  disabled={isPaying || isPayingFee}
                >
                  Depósito
                </PayTypeButton>
              </StyledPayMethod>
            </PayUserDetail>
            <PayUserDetail>
              <span>Notas</span>
              <NoteInput
                disabled={isPaying || isPayingFee}
                placeholder="Escrever nota..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </PayUserDetail>
            <Button onClick={handlePayment} disabled={isPaying || isPayingFee}>
              {isPaying || isPayingFee ? (
                <SpinnerMini />
              ) : (
                "Finalizar Pagamento"
              )}
            </Button>
          </>
        ) : (
          <Empty>Nenhum funcionário selecionado</Empty>
        )}
      </StyledBox>
    </DetailBox>
  );
}

export default SalaryFeePaymentForm;
