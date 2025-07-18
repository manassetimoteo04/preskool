import styled from "styled-components";
import SettingMenu from "./SettingMenu";
import { useEffect, useState } from "react";
import GeneralSettingTab from "./GeneralSettingTab";
import UsersPermissionsSettingTab from "./usersPermissionsSettings/UsersPermissionsSettingTab";
import { TabContextProvider } from "./usersPermissionsSettings/TabContext";
import SubjectCurriculumContainer from "./subjectsCurriculums/SubjectCurriculumContainer";
import { SubjectTabContextProvider } from "./subjectsCurriculums/SubjectTabContext";
import ClasseAndGradesSettingTab from "./classesAndGrades/ClasseAndGradesSettingTab";
import ClasseContextProvider from "./classesAndGrades/ClasseContext";

const StyledSettingLayout = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  display: grid;
  grid-template-columns: 30rem 1fr;
  padding: 2rem 1rem;
`;
const MainSetting = styled.main`
  border-left: 1px solid var(--color-grey-200);
  padding: 0 1rem 0 2rem;
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
    <ClasseContextProvider>
      <SubjectTabContextProvider>
        <TabContextProvider>
          <StyledSettingLayout>
            <SettingMenu />
            <MainSetting>
              {hash === "#general" && <GeneralSettingTab />}
              {hash === "#permissions" && <UsersPermissionsSettingTab />}
              {hash === "#subjects" && <SubjectCurriculumContainer />}
              {hash === "#classes" && <ClasseAndGradesSettingTab />}
            </MainSetting>
          </StyledSettingLayout>
        </TabContextProvider>
      </SubjectTabContextProvider>
    </ClasseContextProvider>
  );
}

export default SettingsLayout;
