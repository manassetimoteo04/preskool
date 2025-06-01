import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import InputRow from "../../ui/InputRow";
import Select from "../../ui/Select";
import { useCourses } from "../classes/useCourses";
import { useClasse } from "../classes/useClasse";
import { useGrades } from "../settings/classesAndGrades/useGrades";

function FormSchoolInfor({ register, errors, isEditSession, watch }) {
  const { courses, isLoading } = useCourses();
  const [name, courseId] = (watch("course") || "").split("-");

  const { data: grades, isLoading: isLoadingGrades } = useGrades(
    null,
    courseId
  );
  const finalGrades =
    name === "fundamental"
      ? grades?.filter((g) => g.gradeType === "fundamentalSchool")
      : grades;
  const gradesList = finalGrades?.sort((a, b) =>
    a.gradeYear.localeCompare(b.gradeYear)
  );

  const schoolYear = watch("schoolYear");
  const { classe, isLoading: isLoadingClasses } = useClasse({
    gradeId: schoolYear,
  });
  return (
    <Form.Row>
      {!isEditSession && (
        <>
          <InputRow label="Upload do Bilhete" error={errors?.biUpload?.message}>
            <FileInput
              id="biUpload"
              accept="image/*"
              {...register("biUpload", {
                required: "Este campo é obrigatório",
              })}
            />
          </InputRow>
          <InputRow
            label="Upload do Certificado/Tranferência"
            error={errors?.biUpload?.message}
          >
            <FileInput
              accept="image/*"
              id="docUpload"
              {...register("docUpload", {
                required: "Este campo é obrigatório",
              })}
            />
          </InputRow>
        </>
      )}
      <InputRow label="Selecionar Curso/Ensino" error={errors?.course?.message}>
        <Select
          id="course"
          name="course"
          disabled={isLoading}
          {...register("course", { required: "Este campo é obrigatório" })}
        >
          <option value="">
            {isLoading ? "Carregando cursos" : "Nenhum selecionado"}
          </option>
          <option value="fundamental">Ensino Fundamental</option>
          {courses?.map((course) => (
            <option value={course.courseName + "-" + course.id} key={course.id}>
              {course.courseName}
            </option>
          ))}
        </Select>
      </InputRow>
      <InputRow label="Selecionar Ano" error={errors?.schoolYear?.message}>
        <Select
          disabled={isLoadingGrades || !name}
          type="number"
          id="schoolYear"
          name="schoolYear"
          {...register("schoolYear", { required: "Este campo é obrigatório" })}
        >
          <option value="">
            {isLoadingClasses || isLoading
              ? "Carregando - " + name
              : "Nenhum selecionado"}
          </option>
          {gradesList?.map((c) => (
            <option value={c.id} key={c.id}>
              {c.gradeYear}
            </option>
          ))}
        </Select>
      </InputRow>

      <InputRow label="Selecionar Turma" error={errors?.grade?.message}>
        <Select
          disabled={isLoadingClasses || isLoading || !schoolYear}
          type="number"
          id="grade"
          name="grade"
          {...register("grade", { required: "Este campo é obrigatório" })}
        >
          <option value="">
            {isLoadingClasses || isLoading
              ? "Carregando - " + name
              : "Nenhum selecionado"}
          </option>
          {classe?.map((c) => (
            <option value={c.id} key={c.id}>
              {c.period} - {c.variation}
            </option>
          ))}
        </Select>
      </InputRow>
    </Form.Row>
  );
}

export default FormSchoolInfor;
