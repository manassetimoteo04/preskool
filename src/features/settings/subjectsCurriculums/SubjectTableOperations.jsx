import { HiOutlineFilter } from "react-icons/hi";
import ButtonIcon from "../../../ui/ButtonIcon";
import Menus from "../../../ui/Menus";
import Row from "../../../ui/Row";
import SearchForm from "../../../ui/SearchForm";
import styled, { css } from "styled-components";
import { useState } from "react";
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
function SubjectTableOperations({
  query,
  setQuery,
  filter,
  setFilter,
  courses,
}) {
  const [activeFilter, setActiveFilter] = useState("courses");

  return (
    <Row type="horizontal">
      <SearchForm
        label="Disciplina, Code, Turma"
        query={query}
        setQuery={setQuery}
      />
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
                  active={filter === ""}
                  onClick={() => setFilter("")}
                >
                  Todos
                </Menus.Button>{" "}
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
  );
}

export default SubjectTableOperations;
