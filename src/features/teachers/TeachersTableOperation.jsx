import styled from "styled-components";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
function TeachersTableOperation() {
  return (
    <StyledHeader>
      <Filter
        query="filter"
        options={[{ label: "Activos", value: "active" }]}
      />
      <Sort options={[{ label: "Activos", value: "active" }]} />
    </StyledHeader>
  );
}

export default TeachersTableOperation;
