import { HiOutlineEye } from "react-icons/hi";
import Menus from "../../../ui/Menus";
import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import Modal from "../../../ui/Modal";
import { generateClasseCode } from "../../../utils/helpers";
import { useSubjectsTab } from "./SubjectTabContext";
import { HiOutlinePencil } from "react-icons/hi2";
import UpdateSubjectLinkForm from "./UpdateSubjectLinkForm";
import { useClasse } from "../../classes/useClasse";
import { useCourse } from "../../classes/useCourse";
import { useGrades } from "../classesAndGrades/useGrades";
function SubjectRow({ subject }) {
  const { setSubjectDetail } = useSubjectsTab();
  const isLinked = subject.classId && subject.teacherId;

  const { classe, isLoading } = useClasse({ id: subject.classId });
  const { data: grade, isLoading: isLoading2 } = useGrades(classe?.gradeId);
  const { data: course, isLoading: isLoading3 } = useCourse(grade?.courseId);
  return (
    <Table.Row>
      <span>{subject.name}</span>
      <span>{subject.code}</span>
      <Tag type={isLinked ? "pending" : "inactive"}>
        {isLinked ? "Vinculado" : "Desvinculado"}
      </Tag>
      <span>
        {isLoading || isLoading2 || isLoading3
          ? "Carregando..."
          : generateClasseCode(
              classe.variation,
              grade.gradeYear,
              course.courseName,
              classe.period
            )}
      </span>
      <Menus.Toggle menuId={subject.id} />
      <Menus.Menu menuId={subject.id}>
        <Menus.List>
          <Menus.Button
            onClick={() => setSubjectDetail(subject.id)}
            icon={<HiOutlineEye />}
          >
            Ver Detalhes
          </Menus.Button>{" "}
          <Modal.Open opens={"edit-subject-" + subject.id}>
            <Menus.Button icon={<HiOutlinePencil />}>
              Editar vínculo
            </Menus.Button>
          </Modal.Open>
        </Menus.List>
      </Menus.Menu>
      <Modal.Window name={"edit-subject-" + subject.id} buttonClose={true}>
        <UpdateSubjectLinkForm subject={subject} />
      </Modal.Window>
    </Table.Row>
  );
}

export default SubjectRow;
