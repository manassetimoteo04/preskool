import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";
import FileInput from "../../ui/FileInput";
import Select from "../../ui/Select";

function EmployeeDocumentsInfo({ errors, register }) {
  return (
    <Form.Row>
      <InputRow label="Upload Curriculum" error={errors?.cvDocument?.message}>
        <FileInput
          type="file"
          accept="image/*"
          name="cvDocument"
          id="cvDocument"
          {...register("cvDocument", { required: "O Documento é obrigatório" })}
        />
      </InputRow>{" "}
      <InputRow label="Upload Bilhete" error={errors?.biDocument?.message}>
        <FileInput
          type="file"
          accept="image/*"
          name="biDocument"
          id="biDocument"
          {...register("biDocument", { required: "O Documento é obrigatório" })}
        />
      </InputRow>{" "}
      <InputRow label="Selecionar sector" error={errors?.sectorId?.message}>
        <Select
          {...register("sectorId", { required: "Este campo é obrigatório" })}
        >
          <option value="teacher">Docência</option>
          <option value="teacher">Docência</option>
        </Select>
      </InputRow>{" "}
      <InputRow label="Função" error={errors?.employeeFunction?.message}>
        <Input
          type="text"
          name="employeeFunction"
          id="employeeFunction"
          {...register("employeeFunction", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>{" "}
    </Form.Row>
  );
}

export default EmployeeDocumentsInfo;
