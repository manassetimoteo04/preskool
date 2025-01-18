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
import { useUpdateCourse } from "./useUpdateCourse";

const FlexBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 3rem;
  gap: 1rem;
`;
const StyledCourseForm = styled.div`
  padding: 2rem;
`;
function CreateCourseForm({ onCloseModal, course, id }) {
  const isEditSession = Boolean(id);
  const { createCourse, isLoading: isCreating } = useCreateCourse();
  const { updateCourse, isLoading: isUpdating } = useUpdateCourse();
  const { register, formState, handleSubmit, reset } = useForm({
    defaultValues: isEditSession ? course : {},
  });

  const { errors } = formState;
  function onSubmit(data) {
    isEditSession
      ? updateCourse({ updateData: data, id })
      : createCourse(data, {
          onSuccess: () => {
            reset();
            onCloseModal();
          },
        });
  }
  return (
    <StyledCourseForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group columns="1fr">
          <Heading as="h2">Cadastrar Curso</Heading>
          <span>Preencha o formulário para cadastrar curso</span>
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
            <Button disabled={isCreating || isUpdating}>
              {isCreating || isUpdating ? <SpinnerMini /> : <HiCheck />}
              Cadastrar curso
            </Button>
          </FlexBox>
        </Form.Group>
      </Form>
    </StyledCourseForm>
  );
}

export default CreateCourseForm;
