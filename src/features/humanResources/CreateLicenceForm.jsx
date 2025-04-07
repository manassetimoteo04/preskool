import styled from "styled-components";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useCreateLeaves } from "./useCreateLeaves";
import { useParams } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledLicenseForm = styled.form`
  min-width: 40rem;
  & > header {
    padding: 2rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
  & > div {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  & > div > div:last-child {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  & > button {
    margin-top: 2rem;
  }
`;
function CreateLicenceForm({ onCloseModal }) {
  const { createLeave, isLoading } = useCreateLeaves();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { employeeId } = useParams();
  function onSubmit(data) {
    data = {
      ...data,
      status: "onleave",
      createdAt: new Date(),
      employeeId,
    };
    createLeave(data, { onSuccess: onCloseModal });
  }
  return (
    <StyledLicenseForm onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Heading as="h3">Adicionar Licença</Heading>
      </header>
      <div>
        <InputRow label="Data de início" error={errors?.startDate?.message}>
          <Input
            type="date"
            {...register("startDate", {
              required: "Este campo é obrigatório",
            })}
          />
        </InputRow>{" "}
        <InputRow label="Data de fim" error={errors?.endDate?.message}>
          <Input
            type="date"
            {...register("endDate", {
              required: "Este campo é obrigatório",
            })}
          />
        </InputRow>{" "}
        <InputRow label="Tipo de Licença" error={errors?.licenseType?.message}>
          <Select
            {...register("licenseType", {
              required: "Este campo é obrigatório",
            })}
          >
            <option value="Doença">Doença</option>
            <option value="Férias">Férias</option>
            <option value="Outros">Outros</option>
          </Select>
        </InputRow>
        <InputRow label="Descrição" error={errors?.description?.message}>
          <Input
            type="text"
            {...register("description", {
              required: "Este campo é obrigatório",
            })}
          />
        </InputRow>{" "}
        <div>
          <Button>{isLoading ? <SpinnerMini /> : "Criar Licença"}</Button>
        </div>
      </div>
    </StyledLicenseForm>
  );
}

export default CreateLicenceForm;
