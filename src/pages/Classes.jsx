import { HiPlus } from "react-icons/hi2";
import ClassesLayout from "../features/classes/ClassesLayout";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Modal from "../ui/Modal";

function Classes() {
  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h2">Turmas</Heading>
        <Modal.Open opens="class-form">
          <Button>
            <HiPlus />
            Cadastrar Turma
          </Button>
        </Modal.Open>
      </Row>

      <ClassesLayout />
    </Modal>
  );
}

export default Classes;
