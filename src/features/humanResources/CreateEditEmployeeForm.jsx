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

const defaultData = {
  fullName: "Manasse Timóteo",
  birthDate: "2025-02-06",
  idCardNumber: "23423423",
  fatherName: "Ricardo Pembele",
  motherName: "Augustina Mpaka",
  actualResidence: "Luanda, Cazenga",
  phoneNumber: "+244 92883009",
  emailAddress: "antonia@gmail.com",
  qualification: "Licenciatura",
  qualificationCourse: "Informática de Gestão",
  institutionName: "Universidade Católica de Angola",
  institutionAddress: "Luanda, Golf II",
  experienceYears: "2",
  lastInsitutionName: "",
  lastInsitutionAddress: "",
  lastInsitutionEmail: "",
  lastInsitutionPhone: "",
  bankAccNumber: "123231",
  bankAccName: "BAI",
  bankName: "123123",
  cvDocument: {
    0: {},
  },
  biDocument: {
    0: {},
  },
  mainSubject: "teacher",
  employeeFunction: "23",
};
function CreateEditEmployeeForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: defaultData });
  const { createEmployee, isLoading } = useCreateEmployee();
  function onSubmit(data) {
    createEmployee(data);
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
          <h4>Documentos</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr">
            <EmployeeDocumentsInfo errors={errors} register={register} />
          </Form.Group>
        </StyledFormPad>
      </>
      <FormGroup>
        <Button variation="secondary" type="reset">
          Cancelar
        </Button>
        <Button disabled={isLoading}>
          <HiCheck /> Finzalizar Cadastro
        </Button>
      </FormGroup>
    </Form>
  );
}

export default CreateEditEmployeeForm;
