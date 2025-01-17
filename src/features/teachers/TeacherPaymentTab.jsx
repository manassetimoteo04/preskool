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

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

function TeacherPaymentTab() {
  const [query, setQuery] = useState("");
  return (
    <Row>
      <SummaryGrid>
        <SummaryBox icon={<HiOutlineCurrencyDollar />} color="blue">
          <small>Salário</small>
          <Heading as="h3">234244</Heading>
        </SummaryBox>
        <SummaryBox icon={<HiOutlineChartBar />} color="yellow">
          <small>Total</small>
          <Heading as="h3">234244</Heading>
        </SummaryBox>
        <SummaryBox icon={<HiOutlineArrowTrendingDown />} color="red">
          <small>Descontos</small>
          <Heading as="h3">234244</Heading>
        </SummaryBox>
      </SummaryGrid>
      <DetailBox>
        <header>
          <Row type="horizontal">
            <Heading as="h3">Registo de pagemento</Heading>
            <SearchForm query={query} setQuery={setQuery} label="pagamento" />
          </Row>
        </header>
        <Table columns="2fr 1fr 1fr 1fr 2rem">
          <Table.Header>
            <span>ID Pagamento</span>
            <span>Referência</span>
            <span>Status</span>
            <span>Data</span>
            <span></span>
          </Table.Header>
          <Menus>
            <Table.Body
              render={(i) => (
                <Table.Row>
                  <span>2340945234</span>
                  <span>Abril</span>
                  <Tag type="active">sucesso</Tag>
                  <span>18 Abr 2024</span>
                  <Menus.Toggle menuId={i} />
                  <Menus.Menu menuId={i}>
                    <Menus.List>
                      <Modal.Open opens={1}>
                        <Menus.Button icon={<HiEye />}>Detalhes</Menus.Button>
                      </Modal.Open>
                    </Menus.List>
                  </Menus.Menu>
                  <Modal.Window name={i} buttonClose={true}>
                    <PaymentDetail />
                  </Modal.Window>
                </Table.Row>
              )}
              data={[1, 2, 3]}
            />
          </Menus>
        </Table>
      </DetailBox>
    </Row>
  );
}

export default TeacherPaymentTab;
