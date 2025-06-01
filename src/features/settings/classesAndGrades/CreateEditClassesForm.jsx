import styled from "styled-components";
import Heading from "../../../ui/Heading";
import InputRow from "../../../ui/InputRow";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import Select from "../../../ui/Select";
import SpinnerMini from "../../../ui/SpinnerMini";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useCreateClass } from "../../classes/useCreateClass";
import { useClassContext } from "./ClasseContext";
import { useGrades } from "./useGrades";
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & > header {
    margin-bottom: 2rem;
  }
`;

const FormRow = styled.div`
  padding: 2rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: end;
  padding: 2rem 0;
  gap: 1rem;
`;
function CreateEditClassesForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const { setCurrentTab } = useClassContext();
  const { createClass, isLoading } = useCreateClass();
  const { data: grades, isLoading: isLoadingGrades } = useGrades();
  function onSubmit(data) {
    console.log(data);
    createClass(data, { onSuccess: () => setCurrentTab() });
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Heading as="h3">Preencher o formulário para cadastrar Turma</Heading>
      </header>
      <FormRow>
        <InputRow
          isGrid={true}
          label="Selecionar Série"
          error={errors?.gradeId?.message}
        >
          <Select
            disabled={isLoading || isLoadingGrades}
            {...register("gradeId", {
              required: "Esté campo é Obrigatório",
            })}
          >
            {grades?.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.gradeYear}- {grade.courseName}
              </option>
            ))}
          </Select>
        </InputRow>
      </FormRow>{" "}
      <FormRow>
        <InputRow
          isGrid={true}
          label="Variante da Turma"
          error={errors?.variation?.message}
        >
          <Input
            placeholder="A, B, C..."
            disabled={isLoading || isLoadingGrades}
            {...register("variation", {
              required: "Esté campo é Obrigatório",
            })}
          />
        </InputRow>
      </FormRow>{" "}
      <FormRow>
        <InputRow
          isGrid={true}
          label="Selecionar Turno"
          error={errors?.period?.message}
        >
          <Select
            disabled={isLoading || isLoadingGrades}
            {...register("period", {
              required: "Esté campo é Obrigatório",
            })}
          >
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </Select>
        </InputRow>
      </FormRow>{" "}
      <FormRow>
        <InputRow
          isGrid={true}
          label="Capacidade Máxima"
          error={errors?.capacity?.message}
        >
          <Input
            type="number"
            disabled={isLoading || isLoadingGrades}
            {...register("capacity", {
              required: "Esté campo é Obrigatório",
            })}
          />
        </InputRow>
      </FormRow>{" "}
      <FormRow>
        <InputRow isGrid={true} label="Sala " error={errors?.room?.message}>
          <Input
            type="number"
            disabled={isLoading || isLoadingGrades}
            {...register("room", {
              required: "Esté campo é Obrigatório",
            })}
          />
        </InputRow>
      </FormRow>
      <FormRow>
        <InputRow
          isGrid={true}
          label="Descrição"
          error={errors?.description?.message}
        >
          <Input
            disabled={isLoading || isLoadingGrades}
            {...register("description", {
              required: "Esté campo é Obrigatório",
            })}
          />
        </InputRow>
      </FormRow>
      <ButtonsGroup>
        <Button disabled={isLoading || isLoadingGrades}>
          {isLoading ? <SpinnerMini /> : <HiPlus />}Cadastrar Turma
        </Button>
      </ButtonsGroup>
    </StyledForm>
  );
}

export default CreateEditClassesForm;
