import styled from "styled-components";
import Logo from "../../ui/Logo";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useState } from "react";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 40rem;
  padding: 2rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  & > header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 35rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;
function LoginLayout() {
  const [username, setUsername] = useState("manasse4");
  const [password, setPassword] = useState("PS0000000");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) login(username.toLocaleLowerCase(), password);
  }
  return (
    <div>
      <LoginBox>
        <header>
          <Logo />
          <p>Bem-vindo de volta! Faça login para acessao ao sistema</p>
        </header>

        <LoginForm onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Usuário</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
            />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <Input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <span>Esqueceu a senha?</span>
          </div>
          <Button disabled={isLoading}>
            {isLoading ? <SpinnerMini /> : "Login"}
          </Button>
        </LoginForm>
      </LoginBox>
    </div>
  );
}

export default LoginLayout;
