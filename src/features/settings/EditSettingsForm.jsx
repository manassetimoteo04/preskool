import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useForm } from "react-hook-form";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";
import { useUpdateSettings } from "./useUpdateSettings";
import { HiCheck } from "react-icons/hi2";
import { HiX } from "react-icons/hi";

const Form = styled.form`
  min-width: 40rem;
  & > header {
    padding: 2rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
  & > div {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
function EditSettingsForm({ onCloseModal, label, value, name, settingId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: value });
  const { updateSettings, isLoading } = useUpdateSettings();
  function onSubmit(data) {
    updateSettings(
      { settingId, data, collectionName: "settings" },
      { onSuccess: onCloseModal }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Heading as="h3">Actualizar Configurações</Heading>
      </header>
      <div>
        <InputRow label={label} error={errors?.schoolName?.message}>
          <Input
            disabled={isLoading}
            {...register(name, {
              required: "Este campo é obrigatório",
            })}
          />
        </InputRow>
        <ButtonsGroup>
          <Button
            variation="secondary"
            onClick={onCloseModal}
            disabled={isLoading}
          >
            <HiX />
            Cancelar
          </Button>
          <Button>
            {isLoading ? <SpinnerMini /> : <HiCheck />} Actualizar
          </Button>
        </ButtonsGroup>
      </div>
    </Form>
  );
}

export default EditSettingsForm;
