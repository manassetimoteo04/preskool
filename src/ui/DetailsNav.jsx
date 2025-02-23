import styled from "styled-components";

const StyledDetailsNav = styled.nav`
  & > ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
`;

function DetailsNav({ children }) {
  return (
    <StyledDetailsNav>
      <ul>{children}</ul>
    </StyledDetailsNav>
  );
}

export default DetailsNav;
