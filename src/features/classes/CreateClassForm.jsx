import { HiCheck, HiOutlineHomeModern } from "react-icons/hi2";
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

const Select = styled.select`
  padding: 0.8rem 1rem;
  background-color: var(--color-grey-0);
  font-size: inherit;
  border-radius: var(--border-radius-sm);
  border: none;
  border: 1px solid var(--color-grey-200);
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 3rem;
  gap: 1rem;
`;
function CreateClassForm() {
  const { courses, isLoading } = useCourses();
  const { createClass, isLoading: isCreating } = useCreateClass();
  const { register, formState, handleSubmit, reset } = useForm();

  const { errors } = formState;
  function onSubmit(data) {
    createClass(data, { onSuccess: () => reset() });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header icon={<HiOutlineHomeModern />}>
        <Heading as="h3">Cadastrar Turma</Heading>
      </Form.Header>
      <Form.Group columns="repeat(2,1fr)">
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
          <InputRow label={`Selecionar Curso`} error={errors?.course?.message}>
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
          <Button type="secondary">
            <HiX /> Cancelar
          </Button>
          <Button disabled={isCreating}>
            {isCreating ? <SpinnerMini /> : <HiCheck />}
            Cadastrar
          </Button>
        </FlexBox>
      </Form.Group>
    </Form>
  );
}

export default CreateClassForm;
