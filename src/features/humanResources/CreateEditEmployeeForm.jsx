import Form from "../../ui/Form";
import {
  HiAcademicCap,
  HiBuildingLibrary,
  HiCheck,
  HiOutlineIdentification,
} from "react-icons/hi2";
import EmployeePersonalInfoForm from "./EmployeePersonalInfoForm";
import styled from "styled-components";
import EmployeeQualificationFormInfo from "./EmployeeQualificationFormInfo";
import EmployeeExperienceFormInfo from "./EmployeeExperienceFormInfo";
import EmployeeBankAccInfor from "./EmployeeBankAccInfor";
import EmployeeDocumentsInfo from "./EmployeeDocuments.Info";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useCreateEmployee } from "./useCreateEmployee";
import { useUpdateEmployee } from "./useUpdateEmployee";
import SpinnerMini from "../../ui/SpinnerMini";
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

function CreateEditEmployeeForm({ editId, editEmployee }) {
  const isEditSession = Boolean(editId);
  console.log(editEmployee, editId);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: isEditSession ? editEmployee : {} });
  const { createEmployee, isLoading: isCreating } = useCreateEmployee();
  const { updateEmployee, isLoading: isUpdating } = useUpdateEmployee();
  function onSubmit(data) {
    console.log(data);
    !isEditSession ? createEmployee(data) : updateEmployee({ editId, data });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Form.Header icon={<HiOutlineIdentification />}>
          <h4>Informações Pessoais</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeePersonalInfoForm errors={errors} register={register} />
          </Form.Group>
        </StyledFormPad>
      </>{" "}
      <>
        <Form.Header icon={<HiAcademicCap />}>
          <h4>Qualificações</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeeQualificationFormInfo
              errors={errors}
              register={register}
            />
          </Form.Group>
        </StyledFormPad>
      </>
      <>
        <Form.Header icon={<HiAcademicCap />}>
          <h4>Experiẽncias de Trabalho</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeeExperienceFormInfo errors={errors} register={register} />
          </Form.Group>
        </StyledFormPad>
      </>{" "}
      <>
        <Form.Header icon={<HiBuildingLibrary />}>
          <h4>Coordenadas Bancárias</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeeBankAccInfor errors={errors} register={register} />
          </Form.Group>
        </StyledFormPad>
      </>{" "}
      <>
        <Form.Header icon={<HiBuildingLibrary />}>
          <h4>Documentos & Outros</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr">
            <EmployeeDocumentsInfo
              errors={errors}
              isEditSession={isEditSession}
              register={register}
            />
          </Form.Group>
        </StyledFormPad>
      </>
      <FormGroup>
        <Button variation="secondary" type="reset">
          Cancelar
        </Button>
        <Button disabled={isUpdating || isCreating}>
          {isUpdating || isCreating ? <SpinnerMini /> : <HiCheck />}Finzalizar
          Cadastro
        </Button>
      </FormGroup>
    </Form>
  );
}

export default CreateEditEmployeeForm;
