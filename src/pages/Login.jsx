import styled from "styled-components";
import LoginLayout from "../features/authentication/LoginLayout";

const StyledLogin = styled.div`
  background-color: var(--color-grey-50);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
    <StyledLogin>
      <LoginLayout />
    </StyledLogin>
  );
}

export default Login;
