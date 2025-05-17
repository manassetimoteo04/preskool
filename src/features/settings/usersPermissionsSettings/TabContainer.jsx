import { useCurrentTab } from "./TabContext";
import ProfilesManagementTab from "./ProfilesManagementTab";
import Modal from "../../../ui/Modal";
import CreateEditUsersTab from "./CreateEditUsersTab";
import UsersReportsTab from "./UsersReportsTab";

function TabContainer() {
  const { currentTab } = useCurrentTab();
  return (
    <Modal>
      {currentTab === "profile-roles" && <ProfilesManagementTab />}
      {currentTab === "create-edit-users" && <CreateEditUsersTab />}
      {currentTab === "users-reports" && <UsersReportsTab />}
    </Modal>
  );
}

export default TabContainer;
