import { useParams } from "react-router-dom";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";

import Menus from "../../../ui/Menus";
import { useMarks } from "./useMarks";
import styled from "styled-components";
import DotLoader from "../../../ui/DotLoader";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import CreateEditStudentsMarks from "./CreateEditStudentsMarks";
const SpanIcon = styled.span`
  color: var(--color-${(props) => (props.isApprovad ? "brand" : "red")}-500);
`;
function StudentsTableRow({ student }) {
  const { classId } = useParams();
  const { marks, isLoading } = useMarks({
    classId,
    studentId: student.id,
    subjectId: "SIXB0i28afyVcWY6fGi8",
    trimesterId: "1",
  });
  const final =
    (+marks?.at(0)?.marks?.mac +
      +marks?.at(0)?.marks?.mpp +
      +marks?.at(0)?.marks?.mpf) /
    3;

  return (
    <Table.Row>
      <span>{student.fullName}</span>
      {isLoading && (
        <>
          <DotLoader />
          <DotLoader />
          <DotLoader />
          <DotLoader />
          <DotLoader />
        </>
      )}
      {!isLoading && (
        <>
          <SpanIcon isApprovad={marks?.at(0)?.marks?.mac >= 10}>
            {marks?.at(0)?.marks?.mac || <>&mdash;</>}
          </SpanIcon>
          <SpanIcon isApprovad={marks?.at(0)?.marks?.mpp >= 10}>
            {marks?.at(0)?.marks?.mpp || <>&mdash;</>}
          </SpanIcon>
          <SpanIcon isApprovad={marks?.at(0)?.marks?.mpf >= 10}>
            {marks?.at(0)?.marks?.mpf || <>&mdash;</>}
          </SpanIcon>
          <SpanIcon isApprovad={final >= 10}>
            {isNaN(final.toFixed(2)) ? <>&mdash;</> : final.toFixed(2)}
          </SpanIcon>
          <Menus.Toggle menuId={student.id} />
        </>
      )}
      <Menus.Menu menuId={student.id}>
        <Menus.List>
          <Modal.Open opens={student.id}>
            <Menus.Button icon={<HiOutlinePencilSquare />}>Notas</Menus.Button>
          </Modal.Open>
        </Menus.List>
      </Menus.Menu>
      <Modal.Window name={student.id} buttonClose={true}>
        <CreateEditStudentsMarks
          subjectId="SIXB0i28afyVcWY6fGi8"
          studentId={student.id}
          marks={marks?.at(0)}
          trimesterId="1"
        />
      </Modal.Window>
    </Table.Row>
  );
}

export default StudentsTableRow;
