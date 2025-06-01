import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateEditSubjectForm from "./CreateEditSubjectForm";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import { useDeleteSubject } from "./useDeleteSubject";
import { useGetTeacher } from "../teachers/useGetTeacher";
import { useNavigate } from "react-router-dom";

function SubjectRow({ subject }) {
  const navigate = useNavigate();
  const { deleteSubject, isLoading: isDeleting } = useDeleteSubject();
  const linked = subject.teacherId && subject.classId;
  const { data, isLoading } = useGetTeacher(subject.teacherId);
  return (
    <Table.Row>
      <span>{subject.name}</span>
      <span>{subject.code}</span>
      <Tag type={linked ? "active" : "pending"}>
        {linked ? "vinculado" : "pendente"}
      </Tag>
      <span>{isLoading ? "Carregando..." : data.fullName}</span>
      <Menus.Toggle menuId={subject.id} />
      <Menus.Menu menuId={subject.id}>
        <Menus.List>
          <Menus.Button
            onClick={() => navigate(`/teachers/${data.id}`)}
            icon={<HiEye />}
          >
            Professor
          </Menus.Button>
          <Modal.Open opens={subject.id}>
            <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
          </Modal.Open>
          <Modal.Open opens={subject.id + "-delete"}>
            <Menus.Button icon={<HiTrash />}>Deletar</Menus.Button>
          </Modal.Open>
        </Menus.List>
      </Menus.Menu>
      <Modal.Window name={subject.id} buttonClose={true}>
        <CreateEditSubjectForm subjectId={subject.id} subject={subject} />
      </Modal.Window>{" "}
      <Modal.Window name={subject.id + "-delete"} buttonClose={true}>
        <ConfirmDelete
          onConfirm={() => deleteSubject(subject.id)}
          isLoading={isDeleting}
        >
          <span>Tens a certeza que deseja exluir essa disciplina?</span>
        </ConfirmDelete>
      </Modal.Window>
    </Table.Row>
  );
}

export default SubjectRow;
