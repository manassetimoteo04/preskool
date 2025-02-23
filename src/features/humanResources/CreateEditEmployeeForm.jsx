import Form from "../../ui/Form";
import {
  HiAcademicCap,
  HiBuildingLibrary,
  HiOutlineIdentification,
} from "react-icons/hi2";
import EmployeePersonalInfoForm from "./EmployeePersonalInfoForm";
import styled from "styled-components";
import EmployeeQualificationFormInfo from "./EmployeeQualificationFormInfo";
import EmployeeExperienceFormInfo from "./EmployeeExperienceFormInfo";
import EmployeeBankAccInfor from "./EmployeeBankAccInfor";
const StyledFormPad = styled.div`
  padding: 2rem 2rem;
  background-color: var(--color-grey-0);
`;
function CreateEditEmployeeForm() {
  return (
    <Form>
      <>
        <Form.Header icon={<HiOutlineIdentification />}>
          <h4>Informações Pessoais</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeePersonalInfoForm errors={""} register={() => {}} />
          </Form.Group>
        </StyledFormPad>
      </>{" "}
      <>
        <Form.Header icon={<HiAcademicCap />}>
          <h4>Qualificações</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeeQualificationFormInfo errors={""} register={() => {}} />
          </Form.Group>
        </StyledFormPad>
      </>
      <>
        <Form.Header icon={<HiAcademicCap />}>
          <h4>Experiẽncias de Trabalho</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeeExperienceFormInfo errors={""} register={() => {}} />
          </Form.Group>
        </StyledFormPad>
      </>{" "}
      <>
        <Form.Header icon={<HiBuildingLibrary />}>
          <h4>Coordenadas Bancárias</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeeBankAccInfor errors={""} register={() => {}} />
          </Form.Group>
        </StyledFormPad>
      </>{" "}
      <>
        <Form.Header icon={<HiBuildingLibrary />}>
          <h4>Coordenadas Bancárias</h4>
        </Form.Header>
        <StyledFormPad>
          <Form.Group columns="1fr 1fr 1fr">
            <EmployeeBankAccInfor errors={""} register={() => {}} />
          </Form.Group>
        </StyledFormPad>
      </>
    </Form>
  );
}

export default CreateEditEmployeeForm;
