import styled from "styled-components";
import Table from "../../../ui/Table";
const StyledPayments = styled.div`
  display: flex;

  flex-direction: column;
  & > header {
    padding: 2rem;
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const paymentData = [
  {
    number: "#00123",
    description: "Maintenance service",
    amount: "$450.00",
    referenceMonth: "May 2025",
    paymentDate: "2025-06-03",
  },
  {
    number: "#00124",
    description: "Monthly hosting",
    amount: "$299.99",
    referenceMonth: "May 2025",
    paymentDate: "2025-06-01",
  },
  {
    number: "#00125",
    description: "Technical consulting",
    amount: "$1,200.00",
    referenceMonth: "April 2025",
    paymentDate: "2025-05-29",
  },
  {
    number: "#00126",
    description: "Platform subscription",
    amount: "$89.90",
    referenceMonth: "April 2025",
    paymentDate: "2025-05-27",
  },
];

function PaymentsInfo() {
  return (
    <StyledPayments>
      <header>
        <strong>Pagamentos</strong>
      </header>
      <Table columns="1.5fr 1fr 1fr 1fr 4rem">
        <Table.Header>
          <span>Recibo Nº</span>
          <span>Referente</span>
          <span>Montante</span>
          <span>Data</span>
          <span></span>
        </Table.Header>
        <Table.Body
          data={paymentData}
          render={(pay) => (
            <Table.Row>
              <span>{pay.number}</span>
              <span>{pay.referenceMonth}</span>
              <span>{pay.amount}</span>
              <span>{pay.paymentDate}</span>
              <span></span>
            </Table.Row>
          )}
        />
      </Table>
    </StyledPayments>
  );
}

export default PaymentsInfo;
