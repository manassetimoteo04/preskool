import { HiCheck } from "react-icons/hi2";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useCreateCourse } from "./useCreateCourse";

const FlexBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 3rem;
  gap: 1rem;
`;
function CreateCourseForm({ onCloseModal }) {
  const { createCourse, isLoading: isCreating } = useCreateCourse();
  const { register, formState, handleSubmit, reset } = useForm();

  const { errors } = formState;
  function onSubmit(data) {
    createCourse(data, {
      onSuccess: () => {
        reset();
        onCloseModal();
      },
    });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2">Cadastrar Curso</Heading>

      <Form.Group columns="1fr">
        <Form.Row>
          <InputRow
            label={`Nome do curso`}
            error={errors?.courseName?.message}
            spread={true}
          >
            <Input
              type="text"
              id="courseName"
              name={`courseName`}
              {...register(`courseName`, {
                required: "Este Campo é obrigatório",
              })}
            />
          </InputRow>

          <small>Verifique bem o nome antes de finaliza o castro</small>
        </Form.Row>

        <FlexBox>
          <Button disabled={isCreating}>
            {isCreating ? <SpinnerMini /> : <HiCheck />}
            Cadastrar curso
          </Button>
        </FlexBox>
      </Form.Group>
    </Form>
  );
}

export default CreateCourseForm;
