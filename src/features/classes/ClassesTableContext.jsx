import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

function ClassesTableContext({ children }) {
  const [isGrid, setIsGrid] = useState(true);
  function toggleIsGrid() {
    setIsGrid((is) => !is);
  }
  return (
    <ContextProvider.Provider value={{ isGrid, toggleIsGrid }}>
      {children}
    </ContextProvider.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGridList = () => {
  const context = useContext(ContextProvider);
  if (!context) throw new Error("A context was used outside the provider");
  return context;
};
export default ClassesTableContext;
