import { createContext, useContext, useState } from "react";

const ClasseContext = createContext();

function ClasseContextProvider({ children }) {
  const [currentTab, setCurrentTab] = useState();
  return (
    <ClasseContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </ClasseContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useClassContext() {
  const context = useContext(ClasseContext);
  if (!context) throw new Error(" A context was used outside a provider");
  return context;
}

export default ClasseContextProvider;
