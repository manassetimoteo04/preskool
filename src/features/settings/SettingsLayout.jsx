import styled from "styled-components";
import SettingMenu from "./SettingMenu";
import { useEffect, useState } from "react";
import GeneralSettingTab from "./GeneralSettingTab";

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
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash);
    });
  }, [hash, setHash]);
  return (
    <StyledSettingLayout>
      <SettingMenu />
      <MainSetting>{hash === "#general" && <GeneralSettingTab />}</MainSetting>
    </StyledSettingLayout>
  );
}

export default SettingsLayout;
