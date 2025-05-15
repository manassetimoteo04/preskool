import styled from "styled-components";
import Row from "../../../ui/Row";
import Tag from "../../../ui/Tag";
import { HiArrowRight, HiOutlinePencil } from "react-icons/hi";
import Button from "../../../ui/Button";

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
  return (
    <Row>
      <StyledHeader>
        <p>Matemática - MAT001</p>
        <Tag type="pending">Vinculado</Tag>
      </StyledHeader>
      <DetailBox>
        <p>Matemática - MAT001</p>
        <HiArrowRight />
        <p>Informática - 12ª Classe</p>
        <HiArrowRight />
        <p>Geraldo Pindi</p>
      </DetailBox>
      <div>
        <Details>
          <strong>Disciplina Selecionada</strong>
          <span>Matemática - MAT001</span>
          <Tag type="pending">Vinculado</Tag>
        </Details>{" "}
        <Details>
          <strong>Vínculo actual</strong>

          <p>
            <span>Turma:</span> Informática &mdash; 12ª Classe &mdash; Tarde
          </p>
          <p>
            <span>Professor:</span> Geraldo Pindi
          </p>
        </Details>{" "}
      </div>
      <ButtonsGroup>
        <Button>
          <HiOutlinePencil /> Actualizar Vínculo
        </Button>
      </ButtonsGroup>
    </Row>
  );
}

export default SubjectDetails;
