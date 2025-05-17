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
  grid-template-columns: 1fr 4rem 1fr 4rem 1fr;
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

  const { name, code, class: classe, teacher } = data || {};
  if (isLoading) return <Spinner />;
  const isLinked = classe.id && teacher.id;
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
            {classe.course} &mdash; {classe.grade}ª &mdash; {classe.period}
          </p>
          <HiArrowRight />
          <p>{teacher.name || "desconhecido"}</p>
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
              <span>Turma:</span> {classe.course} &mdash; {classe.grade}ª Classe
              &mdash; {classe.period}
            </p>
            <p>
              <span>Professor:</span> {teacher.name || "desconhecido"}
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
