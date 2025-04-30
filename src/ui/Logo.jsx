import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  padding: 0.77rem 2rem;
  height: 8rem;
  & > img {
    width: auto;
    height: 100%;
  }
`;
function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      <img
        src={!isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
        alt="School logo"
      />
    </StyledLogo>
  );
}

export default Logo;
