import { HiPlus } from "react-icons/hi2";
import ClassesLayout from "../features/classes/ClassesLayout";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Classes() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">Turmas</Heading>
        <Button>
          <HiPlus />
          Cadastrar Turma
        </Button>
      </Row>
      <ClassesLayout />
    </>
  );
}

export default Classes;
