import styled from "styled-components";
import Heading from "../../../ui/Heading";
import InputRow from "../../../ui/InputRow";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import Select from "../../../ui/Select";
import SpinnerMini from "../../../ui/SpinnerMini";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useCreateGrades } from "./useCreateGrades";
import { useClassContext } from "./ClasseContext";
import { useCourses } from "../../classes/useCourses";
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
function CreateEditGradeForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm();
  const { setCurrentTab } = useClassContext();
  const { createGrade, isLoading } = useCreateGrades();

  const gradeType = watch("gradeType");

  const selectedCourse = watch("courseId");
  const { courses, isLoading: isLoadingCourses } = useCourses();
  const courseName = courses
    ?.filter((course) => course.id === selectedCourse)
    .at(0)?.courseName;

  function onSubmit(data) {
    if (data.gradeType === "highSchool")
      createGrade(
        { ...data, courseName },
        { onSuccess: () => setCurrentTab() }
      );
    if (data.gradeType === "fundamentalSchool") {
      createGrade({ ...data }, { onSuccess: () => setCurrentTab() });
    }
    console.log(data.gradeType);
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Heading as="h3">Preencher o formulário para cadastrar série</Heading>
      </header>
      <FormRow>
        <InputRow
          isGrid={true}
          label="Ano da Série"
          error={errors?.gradeYear?.message}
        >
          <Input
            disabled={isLoading || isLoadingCourses}
            placeholder="1º Ano, 2º Ano, 3º Ano..."
            {...register("gradeYear", { required: "Esté campo é Obrigatório" })}
          />
        </InputRow>
      </FormRow>{" "}
      <FormRow>
        <InputRow
          isGrid={true}
          label="Etapa de Ensino"
          error={errors?.gradeType?.message}
        >
          <Select
            disabled={isLoading || isLoadingCourses}
            {...register("gradeType", {
              required: "Esté campo é Obrigatório",
            })}
          >
            <option value="fundamentalSchool">Ensino Fundamental</option>
            <option value="highSchool">Ensino Médio</option>
          </Select>
        </InputRow>
      </FormRow>{" "}
      {gradeType === "highSchool" && (
        <>
          <FormRow>
            <InputRow
              isGrid={true}
              label="Selecionar Curso"
              error={errors?.courseId?.message}
            >
              <Select
                disabled={isLoading || isLoadingCourses}
                {...register("courseId", {
                  required: "Esté campo é Obrigatório",
                })}
              >
                <option value="">Nenhum Selecionado</option>
                {courses?.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.courseName}
                  </option>
                ))}
              </Select>
            </InputRow>
          </FormRow>
        </>
      )}
      <FormRow>
        <InputRow
          isGrid={true}
          label="Descrição"
          error={errors?.description?.message}
        >
          <Input
            disabled={isLoading || isLoadingCourses}
            {...register("description", {
              required: "Esté campo é Obrigatório",
            })}
          />
        </InputRow>
      </FormRow>{" "}
      <ButtonsGroup>
        <Button disabled={isLoading || isLoadingCourses}>
          {isLoading ? <SpinnerMini /> : <HiPlus />}Cadastrar Série
        </Button>
      </ButtonsGroup>
    </StyledForm>
  );
}

export default CreateEditGradeForm;
