import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";
import Select from "../../ui/Select";
import { useCourses } from "../classes/useCourses";
import { useClasse } from "../classes/useClasse";

function FormSchoolInfor({ register, errors, isEditSession, watch }) {
  const { courses, isLoading } = useCourses();
  const [name, courseId] = (watch("course") || "").split("-");
  const { classe, isLoading: isLoadingClasses } = useClasse({ courseId });
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
      <InputRow label="Ano lectivo" error={errors?.schoolYear?.message}>
        <Input
          type="text"
          id="schoolYear"
          name="schoolYear"
          {...register("schoolYear", { required: "Este campo é obrigatório" })}
        />
      </InputRow>
      <InputRow label="Selecionar Curso" error={errors?.course?.message}>
        <Select
          id="course"
          name="course"
          disabled={isLoading}
          {...register("course", { required: "Este campo é obrigatório" })}
        >
          <option value="">
            {isLoading ? "Carregando cursos" : "Nenhum selecionado"}
          </option>
          {courses?.map((course) => (
            <option value={course.courseName + "-" + course.id} key={course.id}>
              {course.courseName}
            </option>
          ))}
        </Select>
      </InputRow>
      <InputRow label="Classe" error={errors?.grade?.message}>
        <Select
          disabled={isLoadingClasses || isLoading || !name}
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
            <option value={c.grade + "-" + c.id} key={c.id}>
              {c.grade}ª Classe
            </option>
          ))}
        </Select>
      </InputRow>

      <InputRow label="Selecionar Turno" error={errors?.schoolPeriod?.message}>
        <Select
          id="schoolPeriod"
          name="schoolPeriod"
          {...register("schoolPeriod", {
            required: "Este campo é obrigatório",
          })}
        >
          <option value="">
            {isLoading ? "Carregando" : "Nenhum selecionado"}
          </option>{" "}
          <option value="Manhã">Manhã </option>{" "}
          <option value="Tarde">Tarde</option>
        </Select>
      </InputRow>
    </Form.Row>
  );
}

export default FormSchoolInfor;
