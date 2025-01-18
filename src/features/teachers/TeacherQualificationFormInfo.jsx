import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Select from "../../ui/Select";

function TeacherQualificationFormInfo({ errors, register }) {
  return (
    <Form.Row>
      <InputRow
        label="Grau de qualificação"
        error={errors?.qualification?.message}
      >
        <Select
          name="qualification"
          id="qualification"
          {...register("qualification", {
            required: "Este campo é obrigatório",
          })}
        >
          <option value="Ensino médio">Ensino médio</option>
          <option value="Licenciatura">Licenciatura</option>
          <option value="PHD">PHD</option>
        </Select>
      </InputRow>{" "}
      <InputRow
        label="Área de Formação"
        error={errors?.qualificationCourse?.message}
      >
        <Input
          type="text"
          name="schoolCourse"
          id="schoolCourse"
          {...register("qualificationCourse", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>{" "}
      <InputRow
        label="Nome da Instituição"
        error={errors?.institutionName?.message}
      >
        <Input
          type="text"
          name="institutionName"
          id="institutionName"
          {...register("institutionName", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>{" "}
      <InputRow
        label="Endereço da Instituição"
        error={errors?.institutionAddress?.message}
      >
        <Input
          type="text"
          name="institutionAddress"
          id="institutionAddress"
          {...register("institutionAddress", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>{" "}
    </Form.Row>
  );
}

export default TeacherQualificationFormInfo;
