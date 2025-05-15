import { HiOutlineEye } from "react-icons/hi";
import Menus from "../../../ui/Menus";
import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import { generateClasseCode } from "../../../utils/helpers";
import { useSubjectsTab } from "./SubjectTabContext";
function SubjectRow({ subject }) {
  const { setSubjectDetail } = useSubjectsTab();
  const linked = subject.class.id && subject.teacher.id;

  console.log(linked);
  return (
    <Table.Row>
      <span>{subject.name}</span>
      <span>{subject.code}</span>
      <Tag type={linked ? "active" : "pending"}>Vinculado</Tag>
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
            onClick={() => setSubjectDetail("detail")}
            icon={<HiOutlineEye />}
          >
            Ver Detalhes
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default SubjectRow;
