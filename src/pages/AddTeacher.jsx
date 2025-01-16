import { HiArrowLeft } from "react-icons/hi2";
import CreateTeacherForm from "../features/teachers/CreateTeacherForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AddTeacher() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Cadastrar Professor</Heading>
        <Button variation="secondary">
          <HiArrowLeft /> Voltar
        </Button>
      </Row>
      <CreateTeacherForm />
    </Row>
  );
}

export default AddTeacher;
