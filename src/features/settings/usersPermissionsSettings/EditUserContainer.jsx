import styled from "styled-components";
import Heading from "../../../ui/Heading";
import InputRow from "../../../ui/InputRow";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import { HiRefresh } from "react-icons/hi";
import { useCurrentTab } from "./TabContext";
import { HiArrowLeft, HiCheck } from "react-icons/hi2";
import ToggleButton from "../../../ui/ToggleButton";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import ResetUserPassword from "./ResetUserPassword";

const SettingRow = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr 1fr;
  padding: 1.5rem 0;
  gap: 2rem;
  align-items: start;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const TableHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const Form = styled.form`
  display: flex;

  flex-direction: column;
`;
const ButtonsGroups = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;
function EditUserContainer() {
  const { setTableEditTab } = useCurrentTab();
  const [status, setStatus] = useState(false);

  return (
    <div>
      <TableHeader>
        <Heading as="h2">Editar Usuário</Heading>
      </TableHeader>

      <Form>
        <SettingRow>
          <label htmlFor="">Nome do Usuário</label>
          <InputRow>
            <Input />
          </InputRow>
        </SettingRow>{" "}
        <SettingRow>
          <label htmlFor="">Email do Usuário</label>
          <InputRow>
            <Input />
          </InputRow>
        </SettingRow>
        <SettingRow>
          <label htmlFor="">Perfil (Role)</label>
          <InputRow>
            <Input />
          </InputRow>
        </SettingRow>
        <SettingRow>
          <label htmlFor="">Status</label>
          <span>
            <ToggleButton
              active={status}
              handleClick={() => setStatus((s) => !s)}
            />
          </span>
        </SettingRow>
        <SettingRow>
          <label htmlFor="">Redefinir Senha</label>
          <Modal.Open opens="reset-password">
            <Button>
              <HiRefresh /> Refefinir Senha
            </Button>
          </Modal.Open>
          <Modal.Window name="reset-password" buttonClose={true}>
            <ResetUserPassword />
          </Modal.Window>
        </SettingRow>
        <ButtonsGroups>
          <Button variation="secondary" onClick={() => setTableEditTab("")}>
            <HiArrowLeft /> Cancelar
          </Button>
          <Button>
            <HiCheck /> Salvar alterações
          </Button>
        </ButtonsGroups>
      </Form>
    </div>
  );
}

export default EditUserContainer;
