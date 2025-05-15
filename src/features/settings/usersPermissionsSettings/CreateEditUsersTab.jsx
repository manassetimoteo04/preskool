import styled, { css } from "styled-components";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import ButtonBackTab from "./ButtonBackTab";
import Table from "../../../ui/Table";
import Button from "../../../ui/Button";
import Pagination from "../../../ui/Pagination";
import ButtonIcon from "../../../ui/ButtonIcon";
import {
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineFaceFrown,
  HiOutlinePresentationChartBar,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiPlus,
} from "react-icons/hi2";
import UserTableRow from "./UserTableRow";
import { usePagination } from "../../../hooks/usePagination";
import Menus from "../../../ui/Menus";
import { HiOutlineFilter } from "react-icons/hi";
import { useState } from "react";
import SearchForm from "../../../ui/SearchForm";
import { normalizeText } from "../../../utils/helpers";
import Empty from "../../../ui/Empty";
import { useCurrentTab } from "./TabContext";
import EditUserContainer from "./EditUserContainer";
const StyledTabHeader = styled.header`
  gap: 0.5rem;
  display: flex;
  align-items: center;
`;
const TableHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid var(--color-grey-200);
      margin-bottom: 0.5rem;
    `}
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
const users = [
  {
    name: "Ana Ribeiro",
    email: "ana.ribeiro@email.com",
    role: { role: "admin", name: "Admin" },
    status: "Ativo",
  },
  {
    name: "João Pedro Costa",
    email: "joaocosta@email.com",
    role: { role: "teacher", name: "Professor" },
    status: "Inativo",
  },
  {
    name: "Marina Silva",
    email: "marina.silva@email.com",
    role: { role: "secretary", name: "Secretaria" },
    status: "Ativo",
  },
  {
    name: "Carlos Henrique",
    email: "carlosh@email.com",
    role: { role: "admin", name: "Admin" },
    status: "Ativo",
  },
  {
    name: "Letícia Duarte",
    email: "leticia@email.com",
    role: { role: "student", name: "Estudante" },
    status: "Ativo",
  },
  {
    name: "Bruno Fernandes",
    email: "bruno@email.com",
    role: { role: "student", name: "Estudante" },
    status: "Inativo",
  },
  {
    name: "Julia Albuquerque",
    email: "julia.a@email.com",
    role: { role: "secretary", name: "Secretaria" },

    status: "Ativo",
  },
  {
    name: "Tiago Monteiro",
    email: "tiago.m@email.com",
    role: { role: "secretary", name: "Secretaria" },

    status: "Ativo",
  },
  {
    name: "Fernanda Lopes",
    email: "fernanda@email.com",
    role: { role: "guardian", name: "Responsável" },
    relationId: "",
    status: "Ativo",
  },
  {
    name: "Rafael Nascimento",
    email: "rafael.n@email.com",
    role: { role: "admin", name: "Administrador" },

    status: "Inativo",
  },
];

function CreateEditUsersTab() {
  const { tableEditTab } = useCurrentTab();
  const [activeFilter, setActiveFilter] = useState("roles");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("active");

  const filteredData = filter
    ? users.filter((user) => {
        if (filter === "active" || filter === "inactive")
          return (
            user.status.toLocaleLowerCase() ===
            (filter === "active" ? "ativo" : "inativo")
          );
        else return user.role.role.toLocaleLowerCase() === filter;
      })
    : users;
  const searchedData = query
    ? filteredData?.filter((user) =>
        normalizeText(user.name).startsWith(normalizeText(query))
      )
    : filteredData;

  const { data, totalPages, count } = usePagination(searchedData);
  return (
    <Row>
      <StyledTabHeader>
        <ButtonBackTab />
        <Heading as="h2">Criação e Edição de Usuário</Heading>
      </StyledTabHeader>

      {!tableEditTab && (
        <Table columns="4rem 1.5fr 1fr 0.5fr  3rem">
          <TableHeader>
            <Heading as="h2">Lista de Usuário</Heading>
            <Button>
              <HiPlus />
              Usuário
            </Button>
          </TableHeader>
          <TableHeader>
            <div>
              <SearchForm query={query} setQuery={setQuery} label="Usuários" />
            </div>
            <Flex>
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
                          active={activeFilter === "roles"}
                          onClick={() => setActiveFilter("roles")}
                        >
                          Permissões
                        </ActiveFilterButton>
                        <ActiveFilterButton
                          active={activeFilter === "status"}
                          onClick={() => setActiveFilter("status")}
                        >
                          Status
                        </ActiveFilterButton>
                      </Flex>
                    </Menus.Button>
                    {activeFilter === "roles" && (
                      <>
                        <Menus.Button
                          icon={<HiOutlineFilter />}
                          active={filter === ""}
                          onClick={() => setFilter("")}
                        >
                          Todos
                        </Menus.Button>
                        <Menus.Button
                          icon={<HiOutlineShieldCheck />}
                          active={filter === "admin"}
                          onClick={() => setFilter("admin")}
                        >
                          Admin
                        </Menus.Button>

                        <Menus.Button
                          icon={<HiOutlineDocumentText />}
                          active={filter === "secretary"}
                          onClick={() => setFilter("secretary")}
                        >
                          Secretaria
                        </Menus.Button>
                        <Menus.Button
                          icon={<HiOutlinePresentationChartBar />}
                          active={filter === "teacher"}
                          onClick={() => setFilter("teacher")}
                        >
                          Professor
                        </Menus.Button>
                        <Menus.Button
                          icon={<HiOutlineAcademicCap />}
                          active={filter === "student"}
                          onClick={() => setFilter("student")}
                        >
                          Aluno
                        </Menus.Button>
                        <Menus.Button
                          icon={<HiOutlineUserGroup />}
                          active={filter === "guardian"}
                          onClick={() => setFilter("guardian")}
                        >
                          Responsável
                        </Menus.Button>
                      </>
                    )}
                    {activeFilter === "status" && (
                      <>
                        <Menus.Button
                          icon={<HiOutlineFilter />}
                          active={filter === ""}
                          onClick={() => setFilter("")}
                        >
                          Todos
                        </Menus.Button>{" "}
                        <Menus.Button
                          icon={<HiOutlineFilter />}
                          active={filter === "active"}
                          onClick={() => setFilter("active")}
                        >
                          Contas activas
                        </Menus.Button>
                        <Menus.Button
                          icon={<HiOutlineShieldCheck />}
                          active={filter === "inactive"}
                          onClick={() => setFilter("inactive")}
                        >
                          Contas inactivas
                        </Menus.Button>
                      </>
                    )}
                  </Menus.List>
                </Menus.Menu>
              </Menus>
            </Flex>
          </TableHeader>
          <Table.Header>
            <span></span>
            <span>Nome</span>
            <span>Role</span>
            <span>Status</span>
            <span></span>
          </Table.Header>
          {data.length ? (
            <>
              <Table.Body
                data={data}
                render={(user) => <UserTableRow user={user} />}
              />
              <Table.Footer>
                <Pagination totalPages={totalPages} count={count}></Pagination>
              </Table.Footer>
            </>
          ) : (
            <Empty>
              <HiOutlineFaceFrown />
              Nenhum usuário encontrado
            </Empty>
          )}
        </Table>
      )}
      {tableEditTab === "edit-user-tab" && <EditUserContainer />}
    </Row>
  );
}

export default CreateEditUsersTab;
