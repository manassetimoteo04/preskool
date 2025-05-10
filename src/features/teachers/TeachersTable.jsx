import styled from "styled-components";
import TeachersTableOperation from "./TeachersTableOperation";
import SearchForm from "../../ui/SearchForm";
import { useState } from "react";
import { useTeachers } from "./useTeachers";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Pagination from "../../ui/Pagination";
import Menus from "../../ui/Menus";
import { HiEye, HiPencil, HiPlus, HiTrash } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";
import { normalizeText } from "../../utils/helpers";
import Empty from "../../ui/Empty";
import { VscEmptyWindow } from "react-icons/vsc";
import { HiSearch } from "react-icons/hi";
import Button from "../../ui/Button";
import { usePagination } from "../../hooks/usePagination";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteTeacher } from "./useDeleteTeacher";

const StyledTeacherTable = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-200);
  & > header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const { teachers, isLoading } = useTeachers();
  const { deleteTeacher, isLoading: isDeleting } = useDeleteTeacher();
  const searchData = teachers?.filter((teacher) =>
    normalizeText(teacher.fullName).startsWith(normalizeText(query))
  );

  const filter = searchParams.get("filter") || "";
  const [field, direction] = (searchParams.get("sortBy") || "").split("-");

  const modifier = direction === "asc" ? 1 : -1;
  const filteredData = filter
    ? searchData?.filter((item) => item.status === filter)
    : searchData;

  const sortedData = filteredData?.sort((a, b) => {
    if (field === "fullName")
      return a[field].localeCompare(b[field]) * modifier;
  });
  const { data: teachersList, totalPages } = usePagination(sortedData);

  if (isLoading === true) return <Spinner />;

  return (
    <StyledTeacherTable>
      <header>
        <SearchForm query={query} setQuery={setQuery} label="professor" />
        <TeachersTableOperation />
      </header>
      <Modal>
        <Table columns=" 4rem 1.1fr 1fr 1fr 1fr 0.5fr 4rem">
          <Table.Header>
            <span></span>
            <span>Nome Completo</span>
            <span>Qualificação</span>
            <span>Número de identificação</span>
            <span>Telefone</span>
            <span>Status</span>
          </Table.Header>
          <Menus>
            {sortedData?.length ? (
              <Table.Body
                data={teachersList}
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
                      <span>{teacher.qualificationCourse}</span>
                    </StyledConcatedBox>
                    <span>{teacher.idCardNumber}</span>
                    <span>{teacher.phoneNumber}</span>
                    <Tag type={teacher.status}>{teacher.status}</Tag>
                    <Menus.Toggle menuId={teacher.id} />
                    <Menus.Menu menuId={teacher.id}>
                      <Menus.List>
                        <Menus.Button
                          icon={<HiEye />}
                          onClick={() => navigate(`/teachers/${teacher.id}`)}
                        >
                          Ver Perfil
                        </Menus.Button>
                        <Menus.Button
                          icon={<HiPencil />}
                          onClick={() =>
                            navigate(`/teachers/${teacher.id}/edit`)
                          }
                        >
                          Editar
                        </Menus.Button>
                        <Modal.Open opens={"delete-" + teacher.id}>
                          <Menus.Button icon={<HiTrash />}>
                            Deletar
                          </Menus.Button>
                        </Modal.Open>
                      </Menus.List>
                    </Menus.Menu>
                    <Modal.Window name={"delete-" + teacher.id}>
                      <ConfirmDelete
                        onConfirm={() => deleteTeacher(teacher.id)}
                        isLoading={isDeleting}
                      >
                        <span>
                          Tens a certeza que deseja excluir permanentemente este
                          professor?
                        </span>
                      </ConfirmDelete>
                    </Modal.Window>
                  </Table.Row>
                )}
              />
            ) : (
              <Empty>
                {!query ? <VscEmptyWindow /> : <HiSearch />}

                <span>
                  {!query
                    ? "Nenhum professor foi encontrado"
                    : `Nenhum resultado para ${query}`}
                </span>
                {!query && (
                  <Button onClick={() => navigate("add-teacher")}>
                    <HiPlus />
                  </Button>
                )}
              </Empty>
            )}
          </Menus>
          {totalPages > 1 && (
            <Table.Footer>
              <Pagination totalPages={totalPages} count={sortedData.length} />
            </Table.Footer>
          )}
        </Table>
      </Modal>
    </StyledTeacherTable>
  );
}

export default TeachersTable;
