import styled from "styled-components";
import Row from "../../../ui/Row";
import ButtonBackGrades from "./ButtonBackGrades";
import Heading from "../../../ui/Heading";
import CreateEditClassesForm from "./CreateEditClassesForm";
const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;
function CreateClassesContainer() {
  return (
    <Row>
      <Flex>
        <ButtonBackGrades />
        <Heading as="h2">Cadastro de Turmas</Heading>
      </Flex>
      <CreateEditClassesForm />
    </Row>
  );
}

export default CreateClassesContainer;
