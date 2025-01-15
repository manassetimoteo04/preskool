import styled from "styled-components";
import SearchForm from "../../ui/SearchForm";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

const StyledStudentOperations = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--color-grey-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
function StudentTableOperations({ query, setQuery }) {
  const filterOptions = [
    { value: "", label: "Filtrar" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];
  const sortOptions = [
    { value: "", label: "Ordernar" },
    { value: "fullName-asc", label: "Nome (A-Z)" },
    { value: "fullName-desc", label: "Nome (Z-A)" },
    { value: "grade-asc", label: "Classe (A-Z)" },
    { value: "grade-desc", label: "Classe (Z-A)" },
  ];
  return (
    <StyledStudentOperations>
      <SearchForm label="student" query={query} setQuery={setQuery} />
      <FlexBox>
        <Filter query="filter" options={filterOptions} />
        <Sort options={sortOptions} />
      </FlexBox>
    </StyledStudentOperations>
  );
}

export default StudentTableOperations;
