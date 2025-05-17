import styled from "styled-components";
import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";
import SettingNavButton from "../SettingNavButton";
import { useClassContext } from "./ClasseContext";
import TabContainer from "./TabContainer";

const StyledUsersPermissionsSetting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ClasseAndGradesSettingTab() {
  const { currentTab, setCurrentTab } = useClassContext();
  return (
    <Row>
      {!currentTab && (
        <>
          <Heading as="h2">Turmas e Séries</Heading>
          <StyledUsersPermissionsSetting>
            <SettingNavButton setTab={() => setCurrentTab("create-grades")}>
              Cadastro de Séries (ou Etapas de Ensino)
            </SettingNavButton>
            <SettingNavButton setTab={() => setCurrentTab("create-classes")}>
              Cadastro de Turmas
            </SettingNavButton>

            <SettingNavButton setTab={() => setCurrentTab("classes-grades")}>
              Todas as Turmas e Séries
            </SettingNavButton>

            <SettingNavButton
              setTab={() => setCurrentTab("vinculate-to-classes")}
            >
              Atribuição de Professores às Turmas
            </SettingNavButton>
            <SettingNavButton>Gestão de Alunos</SettingNavButton>
          </StyledUsersPermissionsSetting>
        </>
      )}

      {currentTab && <TabContainer />}
    </Row>
  );
}

export default ClasseAndGradesSettingTab;
