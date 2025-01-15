import styled from "styled-components";
// import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Form from "../../ui/Form";
import {
  HiCheck,
  HiOutlineDocument,
  HiOutlineDocumentDuplicate,
  HiOutlineExclamationCircle,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import Button from "../../ui/Button";
import { HiX } from "react-icons/hi";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledConfirmInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-width: 80rem;
  background-color: var(--color-grey-0);
  padding: 2rem 0;
  & > section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
const StyledInforBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & > svg {
      font-size: 2.2rem;
    }
  }
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;
function ConfirmInformation({ onCloseModal, data = {}, onConfirm, isLoading }) {
  const {
    fullName,
    birthYear,
    province,
    idNumber,
    emissionDate,
    residence,
    studentPhone,
    parent,
    biUpload,
    docUpload,
    schoolYear,
    grade,
    course,
    schoolPeriod,
    genre,
  } = data;

  console.log(isLoading);
  return (
    <StyledConfirmInformation>
      <Heading as="h3">Confirmar informações</Heading>

      <Form.Group columns="1fr 1fr 1fr 1fr">
        <Form.Header icon={<HiOutlineExclamationCircle />}>
          <Heading as="h3">Informações pessoais</Heading>
        </Form.Header>
        <Form.Row>
          <StyledInforBox>
            <strong>Nome Completo</strong>
            <p>{fullName}</p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Data de nascimento</strong>
            <p>{birthYear}</p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Província</strong>
            <p>{province}</p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Número de identificação</strong>
            <p>{idNumber}</p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Data de emissão</strong>
            <p>{emissionDate}</p>
          </StyledInforBox>

          <StyledInforBox>
            <strong>Residência actual</strong>
            <p>{residence}</p>
          </StyledInforBox>

          <StyledInforBox>
            <strong>Telefone</strong>
            <p>{studentPhone}</p>
          </StyledInforBox>

          <StyledInforBox>
            <strong>Gênero</strong>
            <p>{genre === "m" ? "Masculino" : "Femenino"}</p>
          </StyledInforBox>
        </Form.Row>
      </Form.Group>

      <Form.Group columns="1fr 1fr 1fr 1fr">
        <Form.Header icon={<HiOutlineUserPlus />}>
          <Heading as="h3">Informação do Parentes & Guardião</Heading>
        </Form.Header>
        <Form.Row>
          <Heading as="h4">
            Responsável -{" "}
            <strong>
              {parent?.type === "father"
                ? "Pai"
                : parent.type === "mother"
                ? "Mãe"
                : "Outro"}
            </strong>
          </Heading>

          <StyledInforBox>
            <strong>Nome completo</strong>
            <p>{parent.name}</p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Telefone</strong>
            <p>{parent.name}</p>
          </StyledInforBox>

          <StyledInforBox>
            <strong>Email</strong>
            <p>{parent.email}</p>
          </StyledInforBox>

          <StyledInforBox>
            <strong>Ocupação</strong>
            <p>{parent.occupation}</p>
          </StyledInforBox>
        </Form.Row>
      </Form.Group>

      <Form.Group columns="1fr 1fr 1fr">
        <Form.Header icon={<HiOutlineDocumentDuplicate />}>
          <Heading as="h3">Documentos & Informações da inscrição</Heading>
        </Form.Header>
        <Form.Row>
          <StyledInforBox>
            <strong>Bilhete de identidade</strong>
            <p>
              <HiOutlineDocument /> {biUpload?.[0].name}
            </p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Certificado/Tranferência</strong>
            <p>
              <HiOutlineDocument /> {docUpload?.[0].name}
            </p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Ano lectivo</strong>
            <p>{schoolYear}</p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Classe</strong>
            <p>{grade.split("-")[0]}ª Classe</p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Curso</strong>
            <p>{course.split("-")[0]}</p>
          </StyledInforBox>
          <StyledInforBox>
            <strong>Turno</strong>
            <p>{schoolPeriod}</p>
          </StyledInforBox>
        </Form.Row>
      </Form.Group>
      <FlexBox>
        <Button type="secondary" onClick={onCloseModal}>
          <HiX /> Cancelar
        </Button>
        <Button onClick={onConfirm} disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : <HiCheck />} Confirmar
        </Button>
      </FlexBox>
    </StyledConfirmInformation>
  );
}

export default ConfirmInformation;
