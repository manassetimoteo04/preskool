import styled, { css } from "styled-components";
import { HiOutlineFilter, HiPlus } from "react-icons/hi";
import Table from "../../../ui/Table";

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

import SubjectRow from "./SubjectRow";
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
  const { data, isLoading, error } = useSubject({});

  console.log(data, isLoading, error);
  const [activeFilter, setActiveFilter] = useState("roles");
  const [filter, setFilter] = useState("");

  if (error) return <Empty>{error.message}</Empty>;
  if (error) return <Spinner />;
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
          <SearchForm label="Disciplina" />
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
                    </Menus.Button>
                    <Menus.Button
                      active={filter === "admin"}
                      onClick={() => setFilter("admin")}
                    >
                      Informática
                    </Menus.Button>
                    <Menus.Button
                      active={filter === "admin"}
                      onClick={() => setFilter("admin")}
                    >
                      Efermagem
                    </Menus.Button>
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
                      active={filter === "active"}
                      onClick={() => setFilter("active")}
                    >
                      10ª Classe
                    </Menus.Button>
                    <Menus.Button
                      active={filter === "inactive"}
                      onClick={() => setFilter("inactive")}
                    >
                      11ª Classe
                    </Menus.Button>{" "}
                    <Menus.Button
                      active={filter === "inactive"}
                      onClick={() => setFilter("inactive")}
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
                      active={filter === "active"}
                      onClick={() => setFilter("active")}
                    >
                      Manhã
                    </Menus.Button>
                    <Menus.Button
                      active={filter === "inactive"}
                      onClick={() => setFilter("inactive")}
                    >
                      Tarde
                    </Menus.Button>{" "}
                    <Menus.Button
                      active={filter === "inactive"}
                      onClick={() => setFilter("inactive")}
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
          data={data}
          render={(subject) => <SubjectRow subject={subject} />}
        />
      </Menus>
    </Table>
  );
}

export default SubjectsTable;
