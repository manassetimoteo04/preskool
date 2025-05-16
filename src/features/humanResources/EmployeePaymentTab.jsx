import styled from "styled-components";
import Row from "../../ui/Row";
import Table from "../../ui/Table";
import SummaryBox from "../../ui/SummaryBox";
import {
  HiEye,
  HiOutlineArrowTrendingDown,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import Heading from "../../ui/Heading";
import DetailBox from "../../ui/DetailBox";
import SearchForm from "../../ui/SearchForm";
import { useState } from "react";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import PaymentDetail from "../../ui/PaymentDetail";
import { useEmployeePayments } from "../financial/useEmployeePayments";
import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import { useEmployee } from "./useEmployee";

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

function EmployeePaymentTab() {
  const { employeeId } = useParams();
  const [query, setQuery] = useState("");
  const { data, isLoading } = useEmployeePayments(employeeId);
  const { data: employee } = useEmployee(employeeId);
  const totalPaid = data?.reduce((acc, el) => el.totalAmount + acc, 0);
  const totalDiscount = data?.reduce((acc, el) => el.deductions + acc, 0);

  if (isLoading) return <Spinner />;
  return (
    <Row>
      <SummaryGrid>
        <SummaryBox icon={<HiOutlineCurrencyDollar />} color="blue">
          <small>Salário Base</small>
          <Heading as="h3">{formatCurrency(employee?.baseSalary)}</Heading>
        </SummaryBox>
        <SummaryBox icon={<HiOutlineChartBar />} color="yellow">
          <small>Total Pago</small>
          <Heading as="h3">{formatCurrency(totalPaid - totalDiscount)}</Heading>
        </SummaryBox>
        <SummaryBox icon={<HiOutlineArrowTrendingDown />} color="red">
          <small>Descontos</small>
          <Heading as="h3">{formatCurrency(totalDiscount)}</Heading>
        </SummaryBox>
      </SummaryGrid>
      <DetailBox>
        <header>
          <Row type="horizontal">
            <Heading as="h3">Registo de pagemento</Heading>
            <SearchForm query={query} setQuery={setQuery} label="pagamento" />
          </Row>
        </header>
        <Table columns="1fr 1fr 0.4fr 1fr 1fr 2rem">
          <Table.Header>
            <span>Número</span>
            <span>Referência</span>
            <span>Status</span>
            <span>Total</span>
            <span>Data</span>
            <span></span>
          </Table.Header>
          <Menus>
            <Table.Body
              render={(pay, i) => (
                <Table.Row>
                  <span>{String(i + 1).padStart(10, "0")}</span>
                  <span>{pay.period}</span>
                  <Tag type="active">{pay.status}</Tag>
                  <span>
                    {formatCurrency(pay.totalAmount - pay.deductions)}
                  </span>

                  <span>{pay.paymentDate}</span>
                  <Menus.Toggle menuId={pay.id} />
                  <Menus.Menu menuId={pay.id}>
                    <Menus.List>
                      <Modal.Open opens={pay.id}>
                        <Menus.Button icon={<HiEye />}>Detalhes</Menus.Button>
                      </Modal.Open>
                    </Menus.List>
                  </Menus.Menu>
                  <Modal.Window name={pay.id} buttonClose={true}>
                    <PaymentDetail payment={pay} />
                  </Modal.Window>
                </Table.Row>
              )}
              data={data}
            />
          </Menus>
        </Table>
      </DetailBox>
    </Row>
  );
}

export default EmployeePaymentTab;
