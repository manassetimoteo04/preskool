import styled from "styled-components";
import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Row from "../../ui/Row";
import SearchForm from "../../ui/SearchForm";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import { calcAge, normalizeText } from "../../utils/helpers";
import { useStudents } from "../students/useStudents";
import { useState } from "react";
import { usePagination } from "../../hooks/usePagination";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);

  & > header {
    padding: 1rem 2rem;
  }
`;
function ClassStudentsTable({ classe }) {
  const { students } = useStudents();
  const [query, setQuery] = useState("");

  const filteredStudents = students
    ?.filter((student) => classe?.students?.includes(student.id))
    .sort((a, b) => a.fullName.localeCompare(b.fullName));

  const searchedStudents = filteredStudents?.filter((student) =>
    normalizeText(student.fullName).startsWith(normalizeText(query))
  );

  const count = searchedStudents?.length;

  const { data: studentsList, totalPages } = usePagination(searchedStudents);
  return (
    <TableContainer>
      <header>
        <Row type="horizontal">
          <Heading as="h3">Estudantes</Heading>
          <SearchForm query={query} setQuery={setQuery} label="estudantes" />
        </Row>
      </header>
      <Table columns=" 2rem 2fr 1.6fr 1fr 1fr 4rem">
        <Table.Header>
          <span></span>
          <span>Nome</span>
          <span>ID</span>
          <span>Idade</span>
          <span>Status</span>
          <span></span>
        </Table.Header>
        <Menus>
          {studentsList.length > 0 ? (
            <Table.Body
              render={(student, i) => (
                <Table.Row>
                  <span>{i}</span>
                  <span>
                    {student.fullName.split(" ")[0]}{" "}
                    {student.fullName.split(" ").at(-1)}
                  </span>
                  <span>{student.internNumber}</span>
                  <span>{calcAge(student.birthDate)} anos</span>
                  <Tag type={student.status}>
                    {student.status === "active" ? "activo" : "inactivo"}
                  </Tag>
                  <Menus.Toggle />
                </Table.Row>
              )}
              data={studentsList}
            />
          ) : (
            <Empty>
              <span>Nenhum resultado para {query}</span>
            </Empty>
          )}
        </Menus>
        {totalPages > 1 && (
          <Table.Footer>
            <Pagination totalPages={totalPages} count={count} />
          </Table.Footer>
        )}
      </Table>
    </TableContainer>
  );
}

export default ClassStudentsTable;
