import Form from "../../ui/Form";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";
import { HiX } from "react-icons/hi";
import { HiCheck } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useCreateSubject } from "./useCreateSubject";
import { useParams } from "react-router-dom";
import { useUpdateSubject } from "./useUpdateSubject";

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: center;
`;
function CreateSubjectForm({ onCloseModal, subjectId, subject }) {
  const isEditSession = Boolean(subjectId);
  const { classId } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: isEditSession ? subject : {} });
  const { createSubject, isLoading } = useCreateSubject();
  const { updateSubject, isLoading1 } = useUpdateSubject();
  function onSubmit(data) {
    const subjectData = { ...data, classId };
    isEditSession
      ? updateSubject({ data, id: subjectId }, { onSuccess: onCloseModal })
      : createSubject(subjectData, { onSuccess: onCloseModal });
  }
  return (
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
                {...register("subjectTeacherId", {
                  required: "Este campo é obrigatório",
                })}
              >
                <option value="">Nenhum selecionado</option>
                <option value="Teacher Phisyc">Prof Luzolo</option>
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
  );
}

export default CreateSubjectForm;
