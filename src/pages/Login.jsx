import styled from "styled-components";
import LoginLayout from "../features/authentication/LoginLayout";
import CreateUserForm from "../features/authentication/CreateUserForm";

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
      <CreateUserForm />
    </StyledLogin>
  );
}

export default Login;
