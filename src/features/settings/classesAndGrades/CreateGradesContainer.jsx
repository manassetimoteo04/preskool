import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import ButtonBackGrades from "./ButtonBackGrades";
import CreateEditGradeForm from "./CreateEditGradeForm";
const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;
function CreateGradesContainer() {
  return (
    <Row>
      <Flex>
        <ButtonBackGrades />
        <Heading as="h2">Cadastro de Séries</Heading>
      </Flex>
      <CreateEditGradeForm />
    </Row>
  );
}

export default CreateGradesContainer;
