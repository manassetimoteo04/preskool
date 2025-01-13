import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import SpinnerMini from "../../ui/SpinnerMini";
import { useStudent } from "./useStudent";
import styled from "styled-components";
import Button from "../../ui/Button";
import {
  HiOutlineDocument,
  HiOutlineDocumentDuplicate,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";
import { formatDate } from "../../utils/helpers";
import SeeStudentDocument from "./SeeStudentDocument";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useNavigate } from "react-router-dom";

const StyledDetailBox = styled.div`
  background-color: var(--color-grey-0);

  & > h4 {
    background-color: var(--color-brand-100);
    padding: 2rem 3rem;
  }
`;
const StyledDetail = styled.div`
  padding: 2rem 3rem;
`;
const Img = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 4px solid
    var(--color-${(props) => (props.type === "active" ? "yellow" : "red")}-100);
`;
const FlexBox = styled.div`
  display: flex;
  gap: 2rem;

  align-items: center;
  & > span {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    gap: 0.3rem;
  }
  & > span > strong > svg {
    font-size: 1%.4;
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    & > h1 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  gap: 2rem;
  padding: 2rem 0;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const ButtonsAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;
function StudentDetail() {
  const { data, isLoading } = useStudent();
  const navigate = useNavigate();
  if (isLoading) return <SpinnerMini />;
  const {
    biUpload,
    docUpload,
    fullName,
    status,
    birthDate,
    idNumber,
    emissionDate,
    residence,
    studentPhone,
    gender,
    course,
    grade,
    schoolPeriod,
    parent,
    province,
  } = data;
  const { name, phone, email, occupation, type } = parent;
  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h2">Estudante #{data?.internNumber}</Heading>
        <Button onClick={() => navigate("edit")}>
          <HiOutlinePencil /> Editar informações
        </Button>
      </Row>
      <StyledDetailBox>
        <Heading as="h4">Informações Pessoais</Heading>

        <StyledDetail>
          <FlexBox>
            <Img src={biUpload} />
            <div>
              <Heading as="h1">
                {fullName}

                <Tag type={status}>{status}</Tag>
              </Heading>
              <FlexBox>
                <span>{course}</span>
                &mdash;
                <span>{grade}ª Classe</span>
                &mdash;
                <span>{schoolPeriod}</span>
              </FlexBox>
            </div>
          </FlexBox>
          <GridBox columns="repeat(4,1fr)">
            <div>
              <strong>Nome Completo</strong>
              <span>{fullName}</span>
            </div>

            <div>
              <strong>Data de nascimento</strong>
              <span>{formatDate(birthDate)}</span>
            </div>
            <div>
              <strong>Província</strong>
              <span>{province}</span>
            </div>

            <div>
              <strong>Número de identificação</strong>
              <span>{idNumber}</span>
            </div>

            <div>
              <strong>Data de emissão</strong>
              <span>{formatDate(emissionDate)}</span>
            </div>
            <div>
              <strong>Residência actual</strong>
              <span>{residence}</span>
            </div>
            <div>
              <strong>Telefone</strong>
              <span>{studentPhone}</span>
            </div>
            <div>
              <strong>Sexo</strong>
              <span>{gender === "m" ? "Masculino" : "Femenino"}</span>
            </div>
          </GridBox>
        </StyledDetail>

        <StyledDetail>
          <FlexBox>
            <div>
              <Heading as="h3">Informações do Parente & Guardião</Heading>
              <FlexBox>
                <span>Relação</span>
                &mdash;
                <span>
                  {type === "father"
                    ? "Pai"
                    : type === "mother"
                    ? "Mãe"
                    : "Outro"}
                </span>
              </FlexBox>
            </div>
          </FlexBox>
          <GridBox columns="repeat(4,1fr)">
            <div>
              <strong>Nome Completo</strong>
              <span>{name}</span>
            </div>

            <div>
              <strong>Telefone</strong>
              <span>{phone}</span>
            </div>
            <div>
              <strong>Email</strong>
              <span>{email}</span>
            </div>

            <div>
              <strong>Ocupação</strong>
              <span>{occupation}</span>
            </div>
          </GridBox>
        </StyledDetail>
        <StyledDetail>
          <ButtonsAction>
            <Modal.Open opens="documents">
              <Button type="secondary">
                <HiOutlineDocument /> Documentos
              </Button>
            </Modal.Open>
            <Button onClick={() => navigate("marks")}>
              <HiOutlineDocumentDuplicate /> Ver Notas
            </Button>
            <Modal.Open opens="confirmDelete">
              <Button type="danger">
                <HiOutlineTrash /> Excluir aluno
              </Button>
            </Modal.Open>
          </ButtonsAction>
        </StyledDetail>
      </StyledDetailBox>
      <Modal.Window name="documents" buttonClose={true}>
        <SeeStudentDocument images={[biUpload, docUpload]} />
      </Modal.Window>{" "}
      <Modal.Window name="confirmDelete">
        <ConfirmDelete>
          Tens certeza que deseja exluir esse estudante?
        </ConfirmDelete>
      </Modal.Window>
    </Modal>
  );
}

export default StudentDetail;
