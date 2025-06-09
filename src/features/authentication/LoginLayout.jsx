import styled from "styled-components";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import { useState } from "react";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Heading from "../../ui/Heading";
import LoginInput from "../../ui/LoginInput";
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi2";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 40rem;
  padding: 2rem;
  border-radius: var(--border-radius-sm);
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
  const [username, setUsername] = useState("676854PRES814649");
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
          <Heading as="h1">Iniciar Sessão</Heading>
          <p>Bem-vindo de volta! Faça login para acessao ao sistema</p>
        </header>

        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            value={username}
            setValue={setUsername}
            type="text"
            label="Código Interno"
            icon={<HiOutlineUser />}
          />
          <LoginInput
            value={password}
            setValue={setPassword}
            type="password"
            label="Palavra-passe"
            icon={<HiOutlineLockClosed />}
          />
          <Button disabled={isLoading}>
            {isLoading ? <SpinnerMini /> : "Login"}
          </Button>
        </LoginForm>
      </LoginBox>
    </div>
  );
}

export default LoginLayout;
