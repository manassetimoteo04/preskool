import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();
function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ContextProvider.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </ContextProvider.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentUser = function () {
  const context = useContext(ContextProvider);
  if (!context) throw new Error("A context was used ouside the provider");
  return context;
};
export { AuthContextProvider };
