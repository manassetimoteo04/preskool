import styled, { css } from "styled-components";
import { HiOutlineFilter, HiPlus } from "react-icons/hi";
import Table from "../../../ui/Table";
import { usePagination } from "../../../hooks/usePagination";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import SearchForm from "../../../ui/SearchForm";
import { useState } from "react";
import ButtonIcon from "../../../ui/ButtonIcon";
import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";

import { useSubject } from "../../classes/useSubject";
import { useCourses } from "../../classes/useCourses";

import SubjectRow from "./SubjectRow";
import Pagination from "../../../ui/Pagination";
import { generateClasseCode, normalizeText } from "../../../utils/helpers";
const StyledHeader = styled.header`
  margin-bottom: 2rem;
`;
const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;
const ActiveFilterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);

  color: var(--color-grey-600);
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-grey-200);
      color: var(--color-grey-700);
      &:hover {
        background-color: var(--color-grey-200);
      }
    `}
`;
function SubjectsTable() {
  const { data, isLoading, error } = useSubject({ all: "" });
  const [activeFilter, setActiveFilter] = useState("courses");
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
        <Row type="horizontal">
          <SearchForm label="Disciplina" query={query} setQuery={setQuery} />
          <Menus>
            <Menus.Toggle menuId="filter" showIcon={false}>
              <ButtonIcon>
                <HiOutlineFilter />
              </ButtonIcon>
            </Menus.Toggle>
            <Menus.Menu menuId="filter">
              <Menus.List>
                <Menus.Button disabled={true}>
                  <Flex border={true}>
                    <ActiveFilterButton
                      active={activeFilter === "courses"}
                      onClick={() => setActiveFilter("courses")}
                    >
                      Cursos
                    </ActiveFilterButton>{" "}
                    <ActiveFilterButton
                      active={activeFilter === "grades"}
                      onClick={() => setActiveFilter("grades")}
                    >
                      Classe
                    </ActiveFilterButton>
                    <ActiveFilterButton
                      active={activeFilter === "period"}
                      onClick={() => setActiveFilter("period")}
                    >
                      Período
                    </ActiveFilterButton>
                  </Flex>
                </Menus.Button>
                {activeFilter === "courses" && (
                  <>
                    <Menus.Button
                      icon={<HiOutlineFilter />}
                      active={filter.all === ""}
                      onClick={() => setFilter({ ...filter, all: "" })}
                    >
                      Todos
                    </Menus.Button>
                    {courses?.map((course) => (
                      <Menus.Button
                        key={course.id}
                        active={filter.course === course.courseName}
                        onClick={() =>
                          setFilter({
                            ...filter,
                            course: course.courseName,
                            all: "",
                          })
                        }
                      >
                        {course.courseName}
                      </Menus.Button>
                    ))}
                  </>
                )}
                {activeFilter === "grades" && (
                  <>
                    <Menus.Button
                      icon={<HiOutlineFilter />}
                      active={filter === ""}
                      onClick={() => setFilter("")}
                    >
                      Todos
                    </Menus.Button>{" "}
                    <Menus.Button
                      active={filter.grade === "10"}
                      onClick={() =>
                        setFilter({ ...filter, grade: "10", all: null })
                      }
                    >
                      10ª Classe
                    </Menus.Button>{" "}
                    <Menus.Button
                      active={filter.grade === "11"}
                      onClick={() =>
                        setFilter({ ...filter, grade: "11", all: null })
                      }
                    >
                      11ª Classe
                    </Menus.Button>
                    <Menus.Button
                      active={filter.grade === "12"}
                      onClick={() =>
                        setFilter({ ...filter, grade: "12", all: null })
                      }
                    >
                      12ª Classe
                    </Menus.Button>
                  </>
                )}{" "}
                {activeFilter === "period" && (
                  <>
                    <Menus.Button
                      icon={<HiOutlineFilter />}
                      active={filter === ""}
                      onClick={() => setFilter("")}
                    >
                      Todos
                    </Menus.Button>{" "}
                    <Menus.Button
                      active={filter.period === "m"}
                      onClick={() =>
                        setFilter({ ...filter, period: "m", all: null })
                      }
                    >
                      Manhã
                    </Menus.Button>
                    <Menus.Button
                      active={filter.period === "t"}
                      onClick={() =>
                        setFilter({ ...filter, period: "t", all: null })
                      }
                    >
                      Tarde
                    </Menus.Button>{" "}
                    <Menus.Button
                      active={filter.period === "n"}
                      onClick={() =>
                        setFilter({ ...filter, period: "n", all: null })
                      }
                    >
                      Noite
                    </Menus.Button>
                  </>
                )}
              </Menus.List>
            </Menus.Menu>
          </Menus>
        </Row>
      </StyledHeader>
      <Table.Header>
        <span>Disciplina</span>
        <span>Code</span>
        <span>Vínculo</span>
        <span>Turma</span>
        <span></span>
      </Table.Header>
      <Menus>
        <Table.Body
          data={subjects}
          render={(subject) => <SubjectRow subject={subject} />}
        />
      </Menus>
      {totalPages > 1 && (
        <Table.Footer>
          <Pagination totalPages={totalPages} count={data.length} />
        </Table.Footer>
      )}
    </Table>
  );
}

export default SubjectsTable;
