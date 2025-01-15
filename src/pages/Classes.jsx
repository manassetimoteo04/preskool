import { HiPlus } from "react-icons/hi2";
import ClassesLayout from "../features/classes/ClassesLayout";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Modal from "../ui/Modal";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;
function Classes() {
  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h2">Turmas</Heading>
        <Flex>
          <Modal.Open opens="class-form">
            <Button>
              <HiPlus />
              Turma
            </Button>
          </Modal.Open>
          <Modal.Open opens="course-form">
            <Button>
              <HiPlus />
              Curso
            </Button>
          </Modal.Open>
        </Flex>
      </Row>

      <ClassesLayout />
    </Modal>
  );
}

export default Classes;
