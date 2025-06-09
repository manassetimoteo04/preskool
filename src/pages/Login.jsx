import styled, { css } from "styled-components";
import LoginLayout from "../features/authentication/LoginLayout";
// import FullPageSpinner from "../ui/FullPageSpinner";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogin = styled.div`
  background-color: var(--color-grey-50);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    width: 8rem;
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-md);
    overflow: hidden;
    height: 3rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  border-radius: var(--border-radius-md);
  font-size: 1.2rem;
  gap: 0.5rem;
  background-color: var(--color-grey-0);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
  transition: all 0.2s;
  ${(props) =>
    props.isVisible &&
    css`
      transform: translateY(-0%);
    `}
`;
function Login() {
  const { isLoaded, isSignedIn } = useUser();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoaded && !isSignedIn) navigate("/login", { replace: true });
    if (isLoaded && isSignedIn) navigate("/", { replace: true });
  }, [isLoaded, isSignedIn, navigate]);
  // if (!isLoaded) return <FullPageSpinner />;
  if (!isSignedIn && isLoaded)
    return (
      <StyledLogin>
        <span onClick={toggleDarkMode}>
          <Span isVisible={isDarkMode}>
            Claro
            <HiOutlineSun />
          </Span>{" "}
          <Span isVisible={!isDarkMode}>
            Escuro
            <HiOutlineMoon />
          </Span>
        </span>
        <LoginLayout />
      </StyledLogin>
    );
}

export default Login;
