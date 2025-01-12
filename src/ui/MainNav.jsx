import styled from "styled-components";
import MainNavList from "./MainNavList";

const StyledMainNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
function MainNav() {
  return (
    <StyledMainNav>
      <MainNavList />
    </StyledMainNav>
  );
}

export default MainNav;
