import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import SettingNavButton from "../SettingNavButton";
import { useSubjectsTab } from "./SubjectTabContext";
import TabContainer from "./TabContainer";

const StyledSettingsFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
function SubjectCurriculumContainer() {
  const { setCurrentTab, currentTab } = useSubjectsTab();
  return (
    <Row>
      {!currentTab && (
        <>
          <Heading as="h2">Disciplinas e Curriculos</Heading>
          <StyledSettingsFlex>
            <SettingNavButton
              setTab={() => setCurrentTab("create-edit-subject")}
            >
              Cadastro e Edição de Disciplinas
            </SettingNavButton>
            <SettingNavButton setTab={() => setCurrentTab("vinculate-teacher")}>
              Vincular Disicplina ao Professor
            </SettingNavButton>

            <SettingNavButton setTab={() => setCurrentTab("users-reports")}>
              Vincular Disciplinas à Turmas
            </SettingNavButton>
          </StyledSettingsFlex>
        </>
      )}
      {currentTab && <TabContainer />}
    </Row>
  );
}

export default SubjectCurriculumContainer;
