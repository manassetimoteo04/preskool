import { useClassContext } from "./ClasseContext";
import CreateGradesContainer from "./CreateGradesContainer";

function TabContainer() {
  const { currentTab } = useClassContext();
  return <>{currentTab === "create-grades" && <CreateGradesContainer />}</>;
}

export default TabContainer;
