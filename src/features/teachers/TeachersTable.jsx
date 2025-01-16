import styled from "styled-components";
import TeachersTableOperation from "./TeachersTableOperation";
import SearchForm from "../../ui/SearchForm";
import { useState } from "react";
import { useTeachers } from "./useTeachers";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";

const StyledTeacherTable = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-200);
  & > header {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

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
function TeachersTable() {
  const [query, setQuery] = useState("");
  const { teachers, isLoading } = useTeachers();
  if (isLoading) return <Spinner />;
  console.log(teachers);
  return (
    <StyledTeacherTable>
      <header>
        <SearchForm query={query} setQuery={setQuery} label="professor" />
        <TeachersTableOperation />
      </header>
      <Table columns=" 4rem 1.1fr 1fr 1fr 1fr 0.5fr 4rem">
        <Table.Header>
          <span></span>
          <span>Nome Completo</span>
          <span>Qualificação</span>
          <span>Disciplina</span>
          <span>Telefone</span>
          <span>Status</span>
        </Table.Header>
        <Menus>
          <Table.Body
            data={teachers}
            render={(teacher) => (
              <Table.Row>
                <FirstLetterBox>
                  <span>{teacher.fullName.at(0)}</span>
                </FirstLetterBox>
                <StyledConcatedBox>
                  <p>{teacher.fullName}</p>
                  <span>{teacher.emailAddress}</span>
                </StyledConcatedBox>{" "}
                <StyledConcatedBox>
                  <p>{teacher.qualification}</p>
                  <span>Eng. Informática</span>
                </StyledConcatedBox>
                <span>{teacher.mainSubject}</span>
                <span>{teacher.phoneNumber}</span>
                <Tag type="active">Activo</Tag>
                <Menus.Toggle menuId={teacher.id} />
                <Menus.Menu menuId={teacher.id}>
                  <Menus.List>
                    <Menus.Button icon={<HiEye />}>Ver Perfil</Menus.Button>
                    <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
                    <Menus.Button icon={<HiTrash />}>Deletar</Menus.Button>
                  </Menus.List>
                </Menus.Menu>
              </Table.Row>
            )}
          />
        </Menus>
      </Table>
    </StyledTeacherTable>
  );
}

export default TeachersTable;
