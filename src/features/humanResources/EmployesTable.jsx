import DetailBox from "../../ui/DetailBox";
import Table from "../../ui/Table";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import EmployesTableOperation from "./EmployesTableOperation";
import { useGetEmployees } from "./useGetEmployees";
import styled from "styled-components";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../../ui/Pagination";
import { normalizeText } from "../../utils/helpers";
import { useState } from "react";
import Menus from "../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
            render={(employee) => (
              <Table.Row key={employee.id}>
                <FirstLetterBox>
                  <span>{employee?.fullName?.[0]}</span>
                </FirstLetterBox>
                <StyledConcatedBox>
                  <p>{employee.fullName}</p>
                  <span>{employee.emailAddress}</span>
                </StyledConcatedBox>
                <StyledConcatedBox>
                  <p>{employee?.qualification}</p>
                  <span>{employee?.qualificationCourse}</span>
                </StyledConcatedBox>
                <span>{employee?.sectorId}</span>
                <span>12 Jan 2025</span>
                <Tag type="active">activo</Tag>
                <Menus.Toggle menuId={employee.id} />
                <Menus.Menu menuId={employee.id}>
                  <Menus.List>
                    <Menus.Button
                      onClick={() => navigate(`employee/${employee.id}`)}
                      icon={<HiEye />}
                    >
                      Ver Detalhes
                    </Menus.Button>
                    <Menus.Button
                      onClick={() => navigate(`employee/${employee.id}/edit`)}
                      icon={<HiPencil />}
                    >
                      Editar
                    </Menus.Button>
                    <Menus.Button icon={<HiTrash />}>Deletar </Menus.Button>
                  </Menus.List>
                </Menus.Menu>
              </Table.Row>
            )}
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
