import { useCurrentTab } from "./TabContext";
import ProfilesManagementTab from "./ProfilesManagementTab";
import Modal from "../../../ui/Modal";
function TabContainer() {
  const { currentTab } = useCurrentTab();
  return (
    <Modal>{currentTab === "profile-roles" && <ProfilesManagementTab />}</Modal>
  );
}

export default TabContainer;
