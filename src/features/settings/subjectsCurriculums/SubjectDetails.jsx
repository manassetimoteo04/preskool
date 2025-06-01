import styled from "styled-components";
import Row from "../../../ui/Row";
import Tag from "../../../ui/Tag";
import { HiArrowRight, HiOutlinePencil } from "react-icons/hi";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { useSubjectsTab } from "./SubjectTabContext";
import { useSubject } from "../../classes/useSubject";
import Spinner from "../../../ui/Spinner";
import UpdateSubjectLinkForm from "./UpdateSubjectLinkForm";
import { useClasse } from "../../classes/useClasse";
import { useGetTeacher } from "../../teachers/useGetTeacher";
import { useGrades } from "../classesAndGrades/useGrades";
import { useCourse } from "../../classes/useCourse";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
`;

const DetailBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 4rem 1.5fr 4rem 1fr;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-100);
  padding: 2rem;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0rem;
  & > strong {
    display: flex;
    gap: 0.5rem;
    & > svg {
      font-size: 2rem;
    }
  }
  & > p {
    & > span {
      font-weight: 600;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }
`;
const ButtonsGroup = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
function SubjectDetails() {
  const { subjectDetail: id } = useSubjectsTab();
  const { data, isLoading } = useSubject({ id });
  const { classe, isLoading: isLoading1 } = useClasse({ id: data?.classId });
  const { data: grade, isLoading: isLoading2 } = useGrades(classe?.gradeId);
  const { data: course, isLoading: isLoading3 } = useCourse(grade?.courseId);
  const { data: teacher, isLoading: isLoading4 } = useGetTeacher(
    data?.teacherId
  );
  const { name, code, classId, teacherId } = data || {};

  if (isLoading || isLoading1 || isLoading2 || isLoading3 || isLoading4)
    return <Spinner />;
  const isLinked = classId && teacherId;

  return (
    <Modal>
      <Row>
        <StyledHeader>
          <p>
            {name} &mdash; {code}
          </p>
          <Tag type={isLinked ? "pending" : "inactive"}>
            {isLinked ? "Vinculado" : "Desvinculado"}
          </Tag>
        </StyledHeader>
        <DetailBox>
          <p>{name}</p>
          <HiArrowRight />
          <p>
            {course.courseName || "Ensino Fundamental"} &mdash;{" "}
            {grade?.gradeYear} &mdash; {classe.period}
          </p>
          <HiArrowRight />
          <p>{teacher?.fullName || "desconhecido"}</p>
        </DetailBox>
        <div>
          <Details>
            <strong>Disciplina Selecionada</strong>
            <span>
              {name} &mdash; {code}
            </span>
          </Details>{" "}
          <Details>
            <strong>Vínculo actual</strong>

            <p>
              <span>Turma:</span> {classe.variation} &mdash; {grade.gradeYear}{" "}
              &mdash; {classe.period}
            </p>
            <p>
              <span>Professor:</span> {teacher?.fullName || "desconhecido"}
            </p>
          </Details>{" "}
        </div>
        <ButtonsGroup>
          <Modal.Open opens="edit-link">
            <Button>
              <HiOutlinePencil /> Actualizar Vínculo
            </Button>
          </Modal.Open>
        </ButtonsGroup>
      </Row>
      <Modal.Window name="edit-link" buttonClose={true}>
        <UpdateSubjectLinkForm subject={data} />
      </Modal.Window>
    </Modal>
  );
}

export default SubjectDetails;
