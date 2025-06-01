import { useClassContext } from "./ClasseContext";
import CreateClassesContainer from "./CreateClassesContainer";
import CreateGradesContainer from "./CreateGradesContainer";

function TabContainer() {
  const { currentTab } = useClassContext();
  return (
    <>
      {currentTab === "create-grades" && <CreateGradesContainer />}{" "}
      {currentTab === "create-classes" && <CreateClassesContainer />}
    </>
  );
}

export default TabContainer;
