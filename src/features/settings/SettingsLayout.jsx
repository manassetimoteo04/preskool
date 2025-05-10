import styled from "styled-components";
import SettingMenu from "./SettingMenu";
import { useEffect, useState } from "react";
import GeneralSettingTab from "./GeneralSettingTab";
import UsersPermissionsSettingTab from "./usersPermissionsSettings/UsersPermissionsSettingTab";
import { TabContextProvider } from "./usersPermissionsSettings/TabContext";

const StyledSettingLayout = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  display: grid;
  grid-template-columns: 30rem 1fr;
  padding: 2rem;
`;
const MainSetting = styled.main`
  border-left: 1px solid var(--color-grey-200);
  padding: 0 2rem;
`;
function SettingsLayout() {
  const [hash, setHash] = useState("#general");
  useEffect(() => {
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, () => {
        setHash(() => window.location.hash);
      })
    );
  }, [hash, setHash]);
  return (
    <TabContextProvider>
      <StyledSettingLayout>
        <SettingMenu />
        <MainSetting>
          {hash === "#general" && <GeneralSettingTab />}
          {hash === "#permissions" && <UsersPermissionsSettingTab />}
        </MainSetting>
      </StyledSettingLayout>
    </TabContextProvider>
  );
}

export default SettingsLayout;
