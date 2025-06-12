import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Input from "../../../ui/Input";
import InputRow from "../../../ui/InputRow";
import Button from "../../../ui/Button";
import SpinnerMini from "../../../ui/SpinnerMini";
import { HiOutlineCheck } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUpdateMarks } from "./useUpdateMarks";
import { useCreateMarks } from "./useCreateMarks";

const StyledCreateMark = styled.div`
  max-width: 40rem;
  & > header {
    padding: 2rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
`;
const StyledForm = styled.form`
  display: flex;
  padding: 2rem;

  flex-direction: column;
  gap: 2rem;
  & > div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
`;
function CreateEditStudentsMarks({
  studentId,
  subjectId,
  trimesterId,
  marks,
  onCloseModal,
}) {
  const isEditMarks = Boolean(marks?.id);
  console.log(isEditMarks);
  const { classId } = useParams();
  const { updateStudentMarks, isLoading } = useUpdateMarks();
  const { createMarks, isLoading: isCreating } = useCreateMarks();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: marks?.marks });
  function onSubmit(data) {
    // eslint-disable-next-line no-unused-vars
    const markData = {
      studentId,
      classId,
      subjectId,
      trimesterId,
      marks: { ...data },
    };
    isEditMarks
      ? updateStudentMarks({ data, id: marks?.id }, { onSuccess: onCloseModal })
      : createMarks(markData, { onSuccess: onCloseModal });
  }
  return (
    <StyledCreateMark>
      <header>
        <Heading as="h3">Actualizar Nota</Heading>
      </header>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <span>Manasse Timóteo - Língua Portuguesa - 1 TRI</span>

        <div>
          <InputRow label="MAC" error={errors?.mac?.message}>
            <Input
              disabled={isLoading || isCreating}
              {...register("mac", { max: 20, message: "Deve ser <= 20" })}
              type="number"
            />
          </InputRow>{" "}
          <InputRow label="MPP" error={errors?.mpp?.message}>
            <Input
              disabled={isLoading || isCreating}
              {...register("mpp", { max: 20, message: "Deve ser <= 20" })}
              type="number"
            />
          </InputRow>{" "}
          <InputRow label="MPF" error={errors?.mpf?.message}>
            <Input
              disabled={isLoading || isCreating}
              {...register("mpf", { max: 20, message: "Deve ser <= 20" })}
              type="number"
            />
          </InputRow>{" "}
        </div>
        <Button disabled={isLoading || isCreating}>
          {(!isLoading || !isCreating) && (
            <>
              <HiOutlineCheck /> Salvar Dados
            </>
          )}
          {(isLoading || isCreating) && <SpinnerMini />}
        </Button>
      </StyledForm>
    </StyledCreateMark>
  );
}

export default CreateEditStudentsMarks;
