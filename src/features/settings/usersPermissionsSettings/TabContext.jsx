import { createContext, useContext, useState } from "react";

const TabContext = createContext();
export function TabContextProvider({ children }) {
  const [currentTab, setCurrentTab] = useState("");
  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentTab = () => {
  const context = useContext(TabContext);
  if (!context) throw new Error("Context was used outside the provider");
  return context;
};
