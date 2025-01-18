import styled from "styled-components";

import { useParams } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { HiCheck } from "react-icons/hi2";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import Select from "../../ui/Select";
import SpinnerMini from "../../ui/SpinnerMini";

import { useCreateSubject } from "./useCreateSubject";
import { useUpdateSubject } from "./useUpdateSubject";
import { useTeachers } from "../teachers/useTeachers";

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: center;
`;

const StyledSubjectForm = styled.div`
  padding: 2rem;
`;

function CreateSubjectForm({ onCloseModal, subjectId, subject = {} }) {
  const editSubject = {
    ...subject,
    subjectTeacherId: subject?.teacherName + "-" + subject?.teacherId,
  };
  const isEditSession = Boolean(subjectId);
  const { classId } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: isEditSession ? editSubject : {} });
  const { createSubject, isLoading } = useCreateSubject();
  const { updateSubject, isLoading1 } = useUpdateSubject();
  const { teachers, isLoading: isLoadingTeachers } = useTeachers();
  function onSubmit(data) {
    const teacher = data.subjectTeacherId || "";
    const [teacherName, teacherId] = teacher.split("-");

    const subjectData = { ...data, classId, teacherId, teacherName };
    const finalObject = Object.fromEntries(
      Object.entries(subjectData).filter(([key]) => key !== "subjectTeacherId")
    );

    isEditSession
      ? updateSubject(
          { data: finalObject, id: subjectId },
          { onSuccess: onCloseModal }
        )
      : createSubject(finalObject, { onSuccess: onCloseModal });
  }

  return (
    <StyledSubjectForm>
      <Row>
        <div>
          <Heading as="h2">
            {isEditSession ? "Editar disciplina" : "Adicionar cadeira"}
          </Heading>
          <span>
            {isEditSession
              ? "Preencha os campos necessário para actualizar"
              : "Preecnha o formulário para cadeira nova a turma"}
          </span>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group columns="1fr">
            <Form.Row>
              <InputRow
                label="Nome da disciplina"
                error={errors?.subjectName?.message}
              >
                <Input
                  type="text"
                  id="subjectName"
                  name="subjectName"
                  {...register("subjectName", {
                    required: "Este campo é obrigatório",
                  })}
                />
              </InputRow>
              <InputRow
                label="Professor da disciplina"
                error={errors?.subjectTeacherId?.message}
              >
                <Select
                  disabled={isLoadingTeachers}
                  {...register("subjectTeacherId", {
                    required: "Este campo é obrigatório",
                  })}
                >
                  <option value="">Nenhum selecionado</option>
                  {teachers?.map((teacher) => (
                    <option
                      value={teacher.fullName + "-" + teacher.id}
                      key={teacher.id}
                    >
                      {teacher.fullName}
                    </option>
                  ))}
                </Select>
              </InputRow>
              <InputRow
                label="Tipo da disciplina"
                error={errors?.subjectType?.message}
              >
                <Select
                  {...register("subjectType", {
                    required: "Este campo é obrigatório",
                  })}
                >
                  <option value="Teórica">Teórica</option>
                  <option value="Prática">Prática</option>
                </Select>
              </InputRow>
            </Form.Row>
            <FlexBox>
              <Button type="reset" variation="secondary">
                <HiX />
                Cancelar
              </Button>
              <Button disabled={isLoading || isLoading1}>
                {isLoading || isLoading1 ? <SpinnerMini /> : <HiCheck />}{" "}
                {isEditSession ? "Actualizar" : "Adicionar"}
              </Button>
            </FlexBox>
          </Form.Group>
        </Form>
      </Row>
    </StyledSubjectForm>
  );
}

export default CreateSubjectForm;
