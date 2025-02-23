import DetailBox from "../../ui/DetailBox";
import Table from "../../ui/Table";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import EmployesTableOperation from "./EmployesTableOperation";
import { useGetEmployees } from "./useGetEmployees";
import styled from "styled-components";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../../ui/Pagination";
import { normalizeText } from "../../utils/helpers";
import { useState } from "react";
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
const FirstLetterBox = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--color-grey-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
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
      <Table columns="4rem 2fr 1fr 1fr 1fr 1fr 1fr 4rem">
        <Table.Header>
          <span></span>
          <span>Nome</span>
          <span>Qualificação</span>
          <span>Sector</span>
          <span>Status</span>
          <span>Aderido aos</span>
          <span>Status</span>
          <span></span>
        </Table.Header>
        <Table.Body
          data={employeesList}
          render={(employee) => (
            <Table.Row key={employee.id}>
              <FirstLetterBox>
                <span>{employee?.fullName?.[0]}</span>
              </FirstLetterBox>
              <StyledConcatedBox>
                <p>{employee.fullName}</p>
                <span>{employee.email}</span>
              </StyledConcatedBox>
              <StyledConcatedBox>
                <p>{employee?.qualifications?.qualification}</p>
                <span>{employee?.qualifications?.qualificationArea}</span>
              </StyledConcatedBox>
              <span>{employee?.sectorId}</span>
              <span>{employee?.status}</span>
              <span>12 Jan 2025</span>
              <span>Name</span>
            </Table.Row>
          )}
        />
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
