import styled from "styled-components";
import Logo from "../../ui/Logo";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useState } from "react";
import { useCreateUser } from "./useCreateUser";

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
function CreateUserForm() {
  const [username, setUsername] = useState("manasse4");
  const [password, setPassword] = useState("manassetimoteo");
  const { createUser } = useCreateUser();
  function handleSubmit(e) {
    e.preventDefault();
    if (username && password)
      createUser({
        username,
        password,
        publicMetadata: { role: "admin" },
        privateMetadata: {},
      });
  }
  return (
    <div>
      <LoginBox>
        <header>
          <Logo />
          <p>Cadastrar</p>
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
          <Button>Login</Button>
        </LoginForm>
      </LoginBox>
    </div>
  );
}

export default CreateUserForm;
