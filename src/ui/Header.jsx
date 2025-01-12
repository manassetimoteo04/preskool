import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
`;
function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}

export default Header;
