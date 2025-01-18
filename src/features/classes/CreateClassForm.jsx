import { HiCheck } from "react-icons/hi2";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useCourses } from "./useCourses";
import Button from "../../ui/Button";
import { HiX } from "react-icons/hi";
import { useCreateClass } from "./useCreateClass";
import Select from "../../ui/Select";

const FlexBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 3rem;
  gap: 1rem;
`;
const StyledClassForm = styled.div`
  padding: 2rem;
`;
function CreateClassForm({ onCloseModal }) {
  const { courses, isLoading } = useCourses();
  const { createClass, isLoading: isCreating } = useCreateClass();
  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;
  function onSubmit(data) {
    createClass(data, { onSuccess: onCloseModal });
  }
  return (
    <StyledClassForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group columns="repeat(2,1fr)">
          <Heading as="h2">Cadastrar Turma</Heading>
          <span>Preencha o formulário para cadastrar nova turma</span>
          <Form.Row>
            <InputRow label={`Classe`} error={errors?.grade?.message}>
              <Input
                type="number"
                id="grade"
                name={`grade`}
                {...register(`grade`, {
                  required: "Este Campo é obrigatório",
                  min: {
                    value: 10,
                    message: "Mínimo 10ª Classe",
                  },
                  max: {
                    value: 13,
                    message: "Classe inserida é inválida ",
                  },
                })}
              />
            </InputRow>
            <InputRow label={`Número da sala`} error={errors?.grade?.message}>
              <Input
                type="number"
                id="roomNumber"
                name={`roomNumber`}
                {...register(`roomNumber`, {
                  required: "Este Campo é obrigatório",
                })}
              />
            </InputRow>
            <InputRow
              label={`Selecionar Curso`}
              error={errors?.course?.message}
            >
              <Select
                id="course"
                name={`course`}
                disabled={isLoading}
                {...register(`course`, {
                  required: "Este Campo é obrigatório",
                })}
              >
                <option value="">Nenhum selecionado</option>
                {courses?.map((course) => (
                  <option value={course.id} key={course?.courseName}>
                    {course?.courseName}
                  </option>
                ))}
              </Select>
            </InputRow>

            <InputRow
              label={`Selecionar Período`}
              error={errors?.period?.message}
            >
              <Select
                id="period"
                name={`period`}
                {...register(`period`, {
                  required: "Este Campo é obrigatório",
                })}
              >
                <option value="">Nenhum selecionado</option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
              </Select>
            </InputRow>
          </Form.Row>
          <FlexBox>
            <Button variation="secondary">
              <HiX /> Cancelar
            </Button>
            <Button disabled={isCreating}>
              {isCreating ? <SpinnerMini /> : <HiCheck />}
              Cadastrar
            </Button>
          </FlexBox>
        </Form.Group>
      </Form>
    </StyledClassForm>
  );
}

export default CreateClassForm;
