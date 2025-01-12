import styled from "styled-components";

const StyledLogo = styled.div`
  padding: 0.77rem 2rem;
  border-bottom: 1px solid var(--color-grey-50);
  & > img {
    width: auto;
    height: 100%;
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <img src="/logo.svg" alt="School logo" />
    </StyledLogo>
  );
}

export default Logo;
