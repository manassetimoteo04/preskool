import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";

function FormSchoolInfor({ register, errors }) {
  return (
    <Form.Row>
      <InputRow label="Upload do Bilhete" error={errors?.biUpload?.message}>
        <FileInput
          id="biUpload"
          accept="image/*"
          {...register("biUpload", { required: "Este campo é obrigatório" })}
        />
      </InputRow>
      <InputRow
        label="Upload do Certificado/Tranferência"
        error={errors?.biUpload?.message}
      >
        <FileInput
          accept="image/*"
          id="docUpload"
          {...register("docUpload", { required: "Este campo é obrigatório" })}
        />
      </InputRow>
      <InputRow label="Ano lectivo" error={errors?.schoolYear?.message}>
        <Input
          type="text"
          id="schoolYear"
          name="schoolYear"
          {...register("schoolYear", { required: "Este campo é obrigatório" })}
        />
      </InputRow>

      <InputRow label="Classe" error={errors?.grade?.message}>
        <Input
          type="text"
          id="grade"
          name="grade"
          {...register("grade", { required: "Este campo é obrigatório" })}
        />
      </InputRow>

      <InputRow label="Curso" error={errors?.course?.message}>
        <Input
          type="text"
          id="course"
          name="course"
          {...register("course", { required: "Este campo é obrigatório" })}
        />
      </InputRow>
      <InputRow label="Turno" error={errors?.schoolPeriod?.message}>
        <Input
          type="text"
          id="schoolPeriod"
          name="schoolPeriod"
          {...register("schoolPeriod", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>
    </Form.Row>
  );
}

export default FormSchoolInfor;
