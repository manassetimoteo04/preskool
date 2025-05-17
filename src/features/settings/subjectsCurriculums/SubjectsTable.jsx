import styled from "styled-components";
import { HiOutlineSearch, HiPlus } from "react-icons/hi";
import Table from "../../../ui/Table";
import { usePagination } from "../../../hooks/usePagination";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";

import { useSubject } from "../../classes/useSubject";
import { useCourses } from "../../classes/useCourses";

import SubjectRow from "./SubjectRow";
import Pagination from "../../../ui/Pagination";
import { generateClasseCode, normalizeText } from "../../../utils/helpers";
import SubjectTableOperations from "./SubjectTableOperations";
import { HiOutlineTableCells } from "react-icons/hi2";
const StyledHeader = styled.header`
  margin-bottom: 2rem;
`;

function SubjectsTable() {
  const { data, isLoading, error } = useSubject({ all: "" });
  const [filter, setFilter] = useState({});
  const [query, setQuery] = useState("");
  const { courses } = useCourses();

  let filteredData = filter?.course
    ? data?.filter(
        (subject) =>
          normalizeText(subject.class.course) === normalizeText(filter.course)
      )
    : data;

  filteredData = filter?.grade
    ? filteredData?.filter(
        (subject) =>
          normalizeText(subject.class.grade) === normalizeText(filter.grade)
      )
    : filteredData;

  filteredData = filter?.period
    ? filteredData?.filter((subject) =>
        normalizeText(subject.class.period).startsWith(
          normalizeText(filter.period)
        )
      )
    : filteredData;

  const searchedData = query
    ? filteredData?.filter(
        (subject) =>
          normalizeText(subject.name).startsWith(normalizeText(query)) ||
          normalizeText(subject.code).startsWith(normalizeText(query)) ||
          normalizeText(
            generateClasseCode(
              subject.class.grade,
              subject.class.course,
              subject.class.period
            )
          ).startsWith(normalizeText(query))
      )
    : filteredData;

  const { totalPages, data: subjects } = usePagination(searchedData);

  if (isLoading) return <Spinner />;
  if (error) return <Empty>{error.message}</Empty>;
  return (
    <Modal>
      <Table columns="1.5fr 1fr 1fr 1fr 4rem">
        <StyledHeader>
          <Row type="horizontal">
            <Heading as="h2">Todas Disciplinas</Heading>
            <Button>
              <HiPlus />
              Disciplina
            </Button>
          </Row>
        </StyledHeader>
        <StyledHeader>
          <SubjectTableOperations
            query={query}
            setQuery={setQuery}
            filter={filter}
            setFilter={setFilter}
            courses={courses}
          />
        </StyledHeader>
        <Table.Header>
          <span>Disciplina</span>
          <span>Code</span>
          <span>Vínculo</span>
          <span>Turma</span>
          <span></span>
        </Table.Header>
        <Menus>
          {subjects.length ? (
            <Table.Body
              data={subjects}
              render={(subject) => <SubjectRow subject={subject} />}
            />
          ) : (
            <Empty>
              {query ? <HiOutlineSearch /> : <HiOutlineTableCells />}
              <span>
                Nenhum Resultado foi encontrado {query && `para ${query}`}
              </span>
            </Empty>
          )}
        </Menus>
        {totalPages > 1 && (
          <Table.Footer>
            <Pagination totalPages={totalPages} count={data.length} />
          </Table.Footer>
        )}
      </Table>
    </Modal>
  );
}

export default SubjectsTable;
