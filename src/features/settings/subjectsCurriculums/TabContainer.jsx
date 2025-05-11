import CreateEditSubjectsTab from "./CreateEditSubjectsTab";
import { useSubjectsTab } from "./SubjectTabContext";

function TabContainer() {
  const { currentTab } = useSubjectsTab();
  return (
    <>{currentTab === "create-edit-subject" && <CreateEditSubjectsTab />}</>
  );
}

export default TabContainer;
