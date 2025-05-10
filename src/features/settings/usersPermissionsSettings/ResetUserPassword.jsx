import styled from "styled-components";
import DetailBox from "../../../ui/DetailBox";
import Heading from "../../../ui/Heading";
import InputRow from "../../../ui/InputRow";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { useForm } from "react-hook-form";

const Form = styled.form`
  min-width: 30rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const RequisitionList = styled.ul`
  & > li {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
function ResetUserPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit() {}
  return (
    <DetailBox>
      <header>
        <Heading as="h3">Redefinir senha do usuário</Heading>
      </header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <small>Crie uma nova senha para acessar a conta do usuário</small>
        <InputRow
          label="Criar nova senha para o usuário"
          error={errors?.newPassword?.message}
        >
          <Input
            {...register("newPassword", {
              required: "Este campo é obrigatório",
            })}
          />
        </InputRow>
        <RequisitionList>
          <li>
            <HiOutlineCheckCircle />
            Pelo menos 8 caracteres
          </li>
          <li>
            {" "}
            <HiOutlineCheckCircle /> Uma letra maiúscula (A-Z)
          </li>{" "}
          <li>
            {" "}
            <HiOutlineCheckCircle /> Uma letra minúscula (a-z)
          </li>
          <li>
            {" "}
            <HiOutlineCheckCircle /> Um número (0-9)
          </li>
          <li>
            {" "}
            <HiOutlineCheckCircle /> Um caractere especial (ex: @, #, $, !)
          </li>
        </RequisitionList>
        <Button>Salvar Alteração</Button>
      </Form>
    </DetailBox>
  );
}

export default ResetUserPassword;
