import { HiArrowLeft } from "react-icons/hi2";
import CreateEditTeacherForm from "../features/teachers/CreateEditTeacherForm";
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
      <CreateEditTeacherForm />
    </Row>
  );
}

export default AddTeacher;
