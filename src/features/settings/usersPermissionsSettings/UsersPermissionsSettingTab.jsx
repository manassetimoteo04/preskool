import styled from "styled-components";
import Row from "../../../ui/Row";
import Heading from "../../../ui/Heading";
import SettingNavButton from "../SettingNavButton";
import { useCurrentTab } from "./TabContext";
import TabContainer from "./TabContainer";
import { useEffect } from "react";

const StyledUsersPermissionsSetting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function UsersPermissionsSettingTab() {
  const { currentTab, setCurrentTab } = useCurrentTab();
  useEffect(() => {
    return () => setCurrentTab("");
  }, [setCurrentTab]);
  return (
    <Row>
      {!currentTab && (
        <>
          <Heading as="h2">Usuários e Permissões</Heading>
          <StyledUsersPermissionsSetting>
            <SettingNavButton setTab={() => setCurrentTab("profile-roles")}>
              Gestão de Perfis (Roles)
            </SettingNavButton>
            <SettingNavButton setTab={() => setCurrentTab("create-edit-users")}>
              Criação e Edição de Usuários
            </SettingNavButton>

            <SettingNavButton setTab={() => setCurrentTab("users-reports")}>
              Relatórios de Usuários
            </SettingNavButton>
          </StyledUsersPermissionsSetting>
        </>
      )}
      {currentTab && <TabContainer />}
    </Row>
  );
}

export default UsersPermissionsSettingTab;
