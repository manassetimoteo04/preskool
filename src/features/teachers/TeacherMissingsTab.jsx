import styled from "styled-components";
import Row from "../../ui/Row";
import Table from "../../ui/Table";
import SummaryBox from "../../ui/SummaryBox";
import {
  HiOutlineArchiveBoxXMark,
  HiOutlineArrowDown,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import Heading from "../../ui/Heading";
import DetailBox from "../../ui/DetailBox";
import SearchForm from "../../ui/SearchForm";
import { useState } from "react";
import Tag from "../../ui/Tag";

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
        <SummaryBox icon={<HiOutlineArrowDown />} color="yellow">
          <small>Total faltas</small>
          <Heading as="h3">234244</Heading>
        </SummaryBox>
        <SummaryBox icon={<HiOutlineCheckBadge />} color="blue">
          <small>Justificados</small>
          <Heading as="h3">234244</Heading>
        </SummaryBox>
        <SummaryBox icon={<HiOutlineArchiveBoxXMark />} color="red">
          <small>Não Justificados</small>
          <Heading as="h3">234244</Heading>
        </SummaryBox>
      </SummaryGrid>
      <DetailBox>
        <header>
          <Row type="horizontal">
            <Heading as="h3">Registo de faltas</Heading>
            <SearchForm query={query} setQuery={setQuery} label="faltas" />
          </Row>
        </header>
        <Table columns="1.5fr 1fr 1fr 1fr">
          <Table.Header>
            <span>Data</span>
            <span>Desconto</span>
            <span>Status</span>
          </Table.Header>
          <Table.Body
            render={() => (
              <Table.Row>
                <span>PAY$SSSDF$%</span>
                <span>2000,00 Kz</span>
                <Tag type="inactive">não justificado</Tag>
                <span>18 Abr 2024</span>
              </Table.Row>
            )}
            data={[1, 2, 3]}
          />
        </Table>
      </DetailBox>
    </Row>
  );
}

export default TeacherPaymentTab;
