import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import Menus from "../../ui/Menus";
import Row from "../../ui/Row";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import EmployesTableOperation from "./EmployesTableOperation";
import { useEmployeeLeaves } from "./useEmployeeLeaves";
import LeaveTableRow from "./LeaveTableRow";
import { useState } from "react";
import { normalizeText } from "../../utils/helpers";
import Empty from "../../ui/Empty";
import { VscEmptyWindow } from "react-icons/vsc";
import { HiSearch } from "react-icons/hi";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function EmployeeLeavesTable() {
  const { data: employeeLeavesList, isLoading } = useEmployeeLeaves();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState();

  const filter = !searchParams.get("filter") ? "" : searchParams.get("filter");
  const sortBy = !searchParams.get("sortBy") ? "" : searchParams.get("sortBy");
  const searchedData = query
    ? employeeLeavesList.filter((employee) =>
        normalizeText(employee.employee.fullName).startsWith(
          normalizeText(query)
        )
      )
    : employeeLeavesList;
  const filteredData = filter
    ? searchedData.filter((employee) => employee.licenseType === filter)
    : searchedData;

  const [field, direction] = sortBy.split("-") || "";
  const modifier = direction === "asc" ? 1 : -1;
  const sortedData = filteredData.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  if (isLoading) return <Spinner />;
  return (
    <DetailBox>
      <header>
        <Row type="horizontal">
          <Heading as="h3">Todas a licenças</Heading>
          <EmployesTableOperation query={query} setQuery={setQuery} />
        </Row>
      </header>
      {sortedData.length ? (
        <Table columns="4rem 2.5fr 1fr 1.5fr 1fr 1fr    4rem">
          <Table.Header>
            <span></span>
            <span>Funcionário</span>
            <span>Tipo</span>
            <span>Data início</span>
            <span>Dias</span>
            <span>Status</span>
            <span></span>
          </Table.Header>
          <Menus>
            <Table.Body
              data={sortedData}
              render={(leave, index) => (
                <LeaveTableRow leave={leave} index={index} />
              )}
            />
          </Menus>
        </Table>
      ) : (
        <Empty>
          {!query ? <VscEmptyWindow /> : <HiSearch />}

          <span>
            {!query
              ? "Nenhum estudante foi encontrado"
              : `Nenhum resultado para ${query}`}
          </span>
          {!query && (
            <Button>
              <HiPlus />
            </Button>
          )}
        </Empty>
      )}
    </DetailBox>
  );
}

export default EmployeeLeavesTable;
