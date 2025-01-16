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
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateEditSubjectForm from "./CreateEditSubjectForm";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { useDeleteSubject } from "./useDeleteSubject";
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
  const { data: subjects, isLoading } = useSubject({ classId });
  const { deleteSubject, isLoading: isDeleting } = useDeleteSubject();
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
      <Table columns=" 2.5fr 2.5fr 1fr 1.6fr  4rem">
        <Table.Header>
          <span>Disciplina</span>
          <span>Professor</span>
          <span>Tipo</span>
          <span>Telefone</span>
          <span></span>
        </Table.Header>
        <Menus>
          {subjects?.length > 0 ? (
            <Modal>
              <Table.Body
                render={(subject) => (
                  <Table.Row>
                    <span>{subject.subjectName}</span>
                    <span>{subject.teacherName}</span>
                    <span>{subject.subjectType}</span>
                    <span>{subject.name}</span>
                    <Menus.Toggle menuId={subject.id} />
                    <Menus.Menu menuId={subject.id}>
                      <Menus.List>
                        <Menus.Button icon={<HiEye />}>Professor</Menus.Button>
                        <Modal.Open opens={subject.id}>
                          <Menus.Button icon={<HiPencil />}>
                            Editar
                          </Menus.Button>
                        </Modal.Open>
                        <Modal.Open opens={subject.id + "-delete"}>
                          <Menus.Button icon={<HiTrash />}>
                            Deletar
                          </Menus.Button>
                        </Modal.Open>
                      </Menus.List>
                    </Menus.Menu>
                    <Modal.Window name={subject.id} buttonClose={true}>
                      <CreateEditSubjectForm
                        subjectId={subject.id}
                        subject={subject}
                      />
                    </Modal.Window>{" "}
                    <Modal.Window
                      name={subject.id + "-delete"}
                      buttonClose={true}
                    >
                      <ConfirmDelete
                        onConfirm={() => deleteSubject(subject.id)}
                        isLoading={isDeleting}
                      >
                        <span>
                          Tens a certeza que deseja exluir essa disciplina?
                        </span>
                      </ConfirmDelete>
                    </Modal.Window>
                  </Table.Row>
                )}
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
