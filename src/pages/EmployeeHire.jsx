import { HiArrowLeft } from "react-icons/hi2";
import CreateEmployeeForm from "../features/humanResources/CreateEmployeeForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useNavigate } from "react-router-dom";

function EmployeeHire() {
  const navigate = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">Cadastrar Funcionário</Heading>
        <Button variation="secondary" onClick={() => navigate(-1)}>
          <HiArrowLeft /> Voltar
        </Button>
      </Row>

      <CreateEmployeeForm />
    </>
  );
}

export default EmployeeHire;
