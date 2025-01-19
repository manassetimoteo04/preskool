import DetailBox from "../../ui/DetailBox";
import Table from "../../ui/Table";
import Heading from "../../ui/Heading";
import EmployesTableOperation from "./EmployesTableOperation";

function EmployesTable() {
  return (
    <DetailBox>
      <header>
        <Heading as="h3">Lista Funcionários</Heading>
        <EmployesTableOperation />
      </header>
      <Table columns="2fr 1fr 1fr 1fr 1fr 1fr 4rem">
        <Table.Header>
          <span>Nome</span>
          <span>Trabalho</span>
          <span>Sector</span>
          <span>Salário</span>
          <span>Data de entrada</span>
          <span>Status</span>
          <span></span>
        </Table.Header>
      </Table>
    </DetailBox>
  );
}

export default EmployesTable;
