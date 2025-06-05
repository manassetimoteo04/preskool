import styled from "styled-components";
import LoginLayout from "../features/authentication/LoginLayout";
import FullPageSpinner from "../ui/FullPageSpinner";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const StyledLogin = styled.div`
  background-color: var(--color-grey-50);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Login() {
  const { isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoaded && !isSignedIn) navigate("/login", { replace: true });
    if (isLoaded && isSignedIn) navigate("/", { replace: true });
  }, [isLoaded, isSignedIn, navigate]);
  if (!isLoaded) return <FullPageSpinner />;
  if (!isSignedIn && isLoaded)
    return (
      <StyledLogin>
        <LoginLayout />
      </StyledLogin>
    );
}

export default Login;
