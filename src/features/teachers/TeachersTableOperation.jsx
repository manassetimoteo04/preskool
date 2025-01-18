import styled from "styled-components";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
function TeachersTableOperation() {
  const filterOptions = [
    { value: "", label: "Tudo" },
    { value: "active", label: "Activos" },
    { value: "inactive", label: "Inactivos" },
  ];
  const sortOptions = [
    { value: "", label: "Ordernar" },
    { value: "fullName-asc", label: "Nome (A-Z)" },
    { value: "fullName-desc", label: "Nome (Z-A)" },
    { value: "grade-asc", label: "Classe (A-Z)" },
    { value: "grade-desc", label: "Classe (Z-A)" },
  ];
  return (
    <StyledHeader>
      <Filter query="filter" options={filterOptions} />
      <Sort options={sortOptions} />
    </StyledHeader>
  );
}

export default TeachersTableOperation;
