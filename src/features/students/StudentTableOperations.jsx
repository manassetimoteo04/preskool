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
function StudentTableOperations() {
  return (
    <StyledStudentOperations>
      <SearchForm label="student" />
      <FlexBox>
        <Filter query="filter" />
        <Sort />
      </FlexBox>
    </StyledStudentOperations>
  );
}

export default StudentTableOperations;
