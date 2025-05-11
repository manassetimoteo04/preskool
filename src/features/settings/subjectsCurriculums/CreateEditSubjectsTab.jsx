import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import ButtonBackTabSubjects from "./ButtonBackTabSubjects";

import SubjectsTable from "./SubjectsTable";
import { useSubjectsTab } from "./SubjectTabContext";
import SubjectDetails from "./SubjectDetails";

const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

function CreateEditSubjectsTab() {
  const { subjectDetail } = useSubjectsTab();
  return (
    <Row>
      <Row type="horizontal">
        <Flex>
          <ButtonBackTabSubjects />
          <Heading as="h2">Criar e Editar Disciplinas</Heading>
        </Flex>
      </Row>
      {subjectDetail && <SubjectDetails />}
      {!subjectDetail && <SubjectsTable />}
    </Row>
  );
}

export default CreateEditSubjectsTab;
