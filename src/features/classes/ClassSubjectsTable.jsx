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
import Modal from "../../ui/Modal";

import SubjectRow from "./SubjectRow";
const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);

  & > header {
    border-bottom: 1px solid var(--color-grey-200);
    padding: 1rem 2rem;
  }
`;
function ClassSubjectsTable({ classId }) {
  const { data: subjects, isLoading } = useSubject({
    filterField: "classId",
    filterId: classId,
  });
  console.log(subjects);
  const [query, setQuery] = useState("");
  if (isLoading) return <Spinner />;
  return (
    <TableContainer>
      <header>
        <Row type="horizontal">
          <Heading as="h3">Disciplinas</Heading>
          <SearchForm query={query} setQuery={setQuery} label="disciplinas" />
        </Row>
      </header>
      <Table columns=" 2.5fr 1fr 1fr 2fr  4rem">
        <Table.Header>
          <span>Disciplina</span>
          <span>Code</span>
          <span>Vinculado</span>
          <span>Professor</span>
          <span></span>
        </Table.Header>
        <Menus>
          {subjects?.length > 0 ? (
            <Modal>
              <Table.Body
                render={(subject) => <SubjectRow subject={subject} />}
                data={subjects}
              />
            </Modal>
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
