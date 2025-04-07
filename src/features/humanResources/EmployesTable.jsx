import DetailBox from "../../ui/DetailBox";
import Table from "../../ui/Table";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import EmployesTableOperation from "./EmployesTableOperation";
import { useGetEmployees } from "./useGetEmployees";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../../ui/Pagination";
import { normalizeText } from "../../utils/helpers";
import { useState } from "react";
import Menus from "../../ui/Menus";

import EmployeeTableRow from "./EmployeeTableRow";

function EmployesTable() {
  const { employees, isLoading } = useGetEmployees();

  const [searchQuery, setSearchQuery] = useState("");
  const searchedData = searchQuery
    ? employees.filter((search) =>
        normalizeText(search?.fullName)?.startsWith(normalizeText(searchQuery))
      )
    : employees;

  const { totalPages, data: employeesList } = usePagination(searchedData);
  if (isLoading) return <Spinner />;
  return (
    <DetailBox>
      <header>
        <Row type="horizontal">
          <Heading as="h3">Lista Funcionários</Heading>
          <EmployesTableOperation
            query={searchQuery}
            setQuery={setSearchQuery}
          />
        </Row>
      </header>
      <Table columns="4rem 2fr 1.5fr 1fr 1.5fr 0.5fr  4rem">
        <Table.Header>
          <span></span>
          <span>Nome</span>
          <span>Qualificação</span>
          <span>Sector</span>
          <span>Função</span>
          <span>Status</span>
          <span></span>
        </Table.Header>
        <Menus>
          <Table.Body
            data={employeesList}
            render={(employee) => <EmployeeTableRow employee={employee} />}
          />
        </Menus>
        {totalPages > 1 && (
          <Table.Footer>
            <Pagination totalPages={totalPages} count={employees.length} />
          </Table.Footer>
        )}
      </Table>
    </DetailBox>
  );
}

export default EmployesTable;
