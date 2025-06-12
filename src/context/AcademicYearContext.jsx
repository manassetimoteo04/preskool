import { createContext, useContext, useEffect, useState } from "react";
import { useTrimester } from "../features/settings/useTrimester";
import { useAcademicYear } from "../features/settings/useAcademicYear";

const ContextProvider = createContext();
function AcademicYearContextProvider({ children }) {
  const [currentYear, setCurrentYear] = useState(null);
  const [currentTrimester, setCurrentTrimester] = useState(null);
  const { academicYear, isLoading: isLoadingYear } = useAcademicYear();
  const { trimester, isLoading: isLoadingTrimester } = useTrimester();
  useEffect(() => {
    setCurrentYear(academicYear?.find((year) => year.currentYear === true));
    setCurrentTrimester(
      trimester?.find(
        (tri) =>
          tri.academicYear === currentYear?.id && tri.currentTrimester === true
      )
    );
  }, [
    academicYear,
    setCurrentYear,
    trimester,
    setCurrentTrimester,
    currentYear,
    isLoadingYear,
    isLoadingTrimester,
  ]);

  return (
    <ContextProvider.Provider
      value={{
        isLoading: isLoadingYear || isLoadingTrimester,
        currentYear,
        setCurrentYear,
        currentTrimester,
        setCurrentTrimester,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAcademic = function () {
  const context = useContext(ContextProvider);
  if (!context) throw new Error("A context was used ouside the provider");
  return context;
};
export { AcademicYearContextProvider };
