import styled, { css, keyframes } from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const animation = keyframes`
 0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
  
`;
const StyledLogo = styled.div`
  padding: 0.77rem 2rem;
  height: 8rem;
  & > img {
    width: auto;
    height: 100%;
    ${(props) =>
      props.pulse &&
      css`
        animation: ${animation} 2s ease-in-out infinite;
      `}
  }
`;
function Logo({ pulse = false }) {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo pulse={pulse}>
      <img
        src={!isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
        alt="School logo"
      />
    </StyledLogo>
  );
}

export default Logo;
