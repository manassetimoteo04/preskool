import styled from "styled-components";

const StyledLogo = styled.div`
  padding: 0.77rem 2rem;
  height: 8rem;
  & > img {
    width: auto;
    height: 100%;
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <img src="/logo-dark.png" alt="School logo" />
    </StyledLogo>
  );
}

export default Logo;
