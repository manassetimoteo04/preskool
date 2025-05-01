import { createContext, useContext, useState } from "react";

const MenuContext = createContext();
function MenuContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((o) => !o);
  }
  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("Context was used outside the provider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { MenuContextProvider, useMenu };
