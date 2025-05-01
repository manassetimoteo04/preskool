import styled from "styled-components";
import Heading from "../../../ui/Heading";

const StyledRolesContainer = styled.div`
  min-width: 40rem;
`;
const Role = styled.span`
  background-color: var(--color-grey-200);
  padding: 0.06rem 0.5rem;
  display: inline-block;
  border-radius: var(--border-radius-sm);
`;
const Header = styled.header`
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-200);
  & > div {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
function UpdateRolesContainer({ role }) {
  return (
    <StyledRolesContainer>
      <Header>
        <div>
          <Heading as="h2">Actualizar roles</Heading>
          &mdash;
          <Role>{role}</Role>
        </div>
      </Header>
      <div>Lorem</div>
    </StyledRolesContainer>
  );
}

export default UpdateRolesContainer;
