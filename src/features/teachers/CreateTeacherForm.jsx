import {
  HiAcademicCap,
  HiBuildingLibrary,
  HiDocument,
  HiIdentification,
} from "react-icons/hi2";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import TeacherFormPersonalInfo from "./TeacherFormPersonalInfo";
import TeacherQualificationFormInfo from "./TeacherQualificationFormInfo";
import TeacherExperienceFormInfo from "./TeacherExperienceFormInfo";
import TeachersDocumentsInfo from "./TeachersDocuments.Info";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useCreateTeacher } from "./useCreateTeacher";
import TeacherBankAccInfor from "./TeacherBankAccInfor";
const StyledFormPad = styled.div`
  padding: 2rem 2rem;
  background-color: var(--color-grey-0);
`;
const FormGroup = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
function CreateTeacherForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createTeacher, isLoading } = useCreateTeacher();

  function onSubmit(data) {
    console.log(data);
    createTeacher(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header icon={<HiIdentification />}>
        <Heading as="h3">Informações Pessoais</Heading>
      </Form.Header>
      <StyledFormPad>
        <Form.Group columns="repeat(3,1fr)">
          <TeacherFormPersonalInfo errors={errors} register={register} />
        </Form.Group>
      </StyledFormPad>{" "}
      <Form.Header icon={<HiAcademicCap />}>
        <Heading as="h3">Qualificações</Heading>
      </Form.Header>
      <StyledFormPad>
        <Form.Group columns="repeat(3,1fr)">
          <TeacherQualificationFormInfo errors={errors} register={register} />
        </Form.Group>
      </StyledFormPad>{" "}
      <Form.Header icon={<HiAcademicCap />}>
        <Heading as="h3">Experiências de Trabalho</Heading>
      </Form.Header>
      <StyledFormPad>
        <Form.Group columns="repeat(3,1fr)">
          <TeacherExperienceFormInfo errors={errors} register={register} />
        </Form.Group>
      </StyledFormPad>{" "}
      <Form.Header icon={<HiBuildingLibrary />}>
        <Heading as="h3">Coordenadas bancárias</Heading>
      </Form.Header>
      <StyledFormPad>
        <Form.Group columns="repeat(3,1fr)">
          <TeacherBankAccInfor errors={errors} register={register} />
        </Form.Group>
      </StyledFormPad>{" "}
      <Form.Header icon={<HiDocument />}>
        <Heading as="h3">Qualificação e Documentos</Heading>
      </Form.Header>
      <StyledFormPad>
        <Form.Group columns="repeat(2,1fr)">
          <TeachersDocumentsInfo errors={errors} register={register} />
        </Form.Group>
      </StyledFormPad>
      <FormGroup>
        <Button variation="secondary" type="reset">
          Cancelar
        </Button>
        <Button disabled={isLoading}>Finalizar Cadastro</Button>
      </FormGroup>
    </Form>
  );
}

export default CreateTeacherForm;
