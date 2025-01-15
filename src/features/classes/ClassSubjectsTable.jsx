import { useState } from "react";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import SearchForm from "../../ui/SearchForm";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import { useSubject } from "./useSubject";
import styled from "styled-components";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

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
function ClassSubjectsTable({ classId }) {
  const { data: subjects, isLoading } = useSubject({ classId });
  const [query, setQuery] = useState("");
  console.log(subjects, classId);
  if (isLoading) return <Spinner />;
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
          {subjects?.length > 0 ? (
            <Table.Body
              render={() => (
                <Table.Row>
                  <p>Teste</p>
                  <Menus.Toggle />
                </Table.Row>
              )}
              data={subjects}
            />
          ) : (
            <Empty>
              <span>Nenhum resultado para {query}</span>
            </Empty>
          )}
        </Menus>
      </Table>
    </TableContainer>
  );
}

export default ClassSubjectsTable;
