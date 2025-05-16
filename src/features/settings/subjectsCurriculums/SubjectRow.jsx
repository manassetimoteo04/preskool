import { HiOutlineEye } from "react-icons/hi";
import Menus from "../../../ui/Menus";
import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import { generateClasseCode } from "../../../utils/helpers";
import { useSubjectsTab } from "./SubjectTabContext";
import { HiOutlinePencil } from "react-icons/hi2";
function SubjectRow({ subject }) {
  const { setSubjectDetail } = useSubjectsTab();
  const isLinked = subject.class.id && subject.teacher.id;

  return (
    <Table.Row>
      <span>{subject.name}</span>
      <span>{subject.code}</span>
      <Tag type={isLinked ? "pending" : "inactive"}>
        {isLinked ? "Vinculado" : "Desvinculado"}
      </Tag>
      <span>
        {generateClasseCode(
          subject.class.grade,
          subject.class.course,
          subject.class.period
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
          <Menus.Button
            onClick={() => setSubjectDetail(subject.id)}
            icon={<HiOutlinePencil />}
          >
            Editar vínculo
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default SubjectRow;
