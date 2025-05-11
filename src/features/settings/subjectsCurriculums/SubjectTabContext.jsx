import { createContext, useContext, useState } from "react";

const SubjectContext = createContext();

export function SubjectTabContextProvider({ children }) {
  const [currentTab, setCurrentTab] = useState("");
  const [subjectDetail, setSubjectDetail] = useState("");
  return (
    <SubjectContext.Provider
      value={{ currentTab, setCurrentTab, subjectDetail, setSubjectDetail }}
    >
      {children}
    </SubjectContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSubjectsTab() {
  const context = useContext(SubjectContext);
  if (!context) throw new Error("A context was used outside a provider");
  return context;
}
