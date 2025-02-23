import { HiArrowLeft } from "react-icons/hi";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import EditEmployeeForm from "../features/humanResources/EditEmployeeForm";
import { useNavigate } from "react-router-dom";

function EditEmployee() {
  const navigate = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">Actualizar Funcionário</Heading>
        <Button variation="secondary" onClick={() => navigate(-1)}>
          <HiArrowLeft /> Voltar
        </Button>
      </Row>

      <EditEmployeeForm />
    </>
  );
}

export default EditEmployee;
