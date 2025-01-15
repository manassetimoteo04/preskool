import Form from "../../ui/Form";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import styled from "styled-components";
import { HiX } from "react-icons/hi";
import { HiCheck } from "react-icons/hi2";
import { useForm } from "react-hook-form";

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: center;
`;
function CreateSubjectForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit() {}
  return (
    <Row>
      <div>
        <Heading as="h2">Adicionar cadeira</Heading>
        <span>Preecnha o formulário para cadeira nova a turma</span>
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
            <Button>
              <HiCheck /> Adicionar
            </Button>
          </FlexBox>
        </Form.Group>
      </Form>
    </Row>
  );
}

export default CreateSubjectForm;
