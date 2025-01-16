import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";
import FileInput from "../../ui/FileInput";

function TeachersDocumentsInfo({ errors, register }) {
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
      <InputRow
        label="Cadeiras dominantes (separe por vírgula)"
        error={errors?.mainSubject?.message}
      >
        <Input
          type="text"
          name="mainSubject"
          id="mainSubject"
          {...register("mainSubject", { required: "Este campo é obrigatório" })}
        />
      </InputRow>{" "}
      <InputRow
        label="Breve descrição "
        error={errors?.smallDescription?.message}
      >
        <Input
          type="text"
          name="smallDescription"
          id="smallDescription"
          {...register("smallDescription", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>{" "}
    </Form.Row>
  );
}

export default TeachersDocumentsInfo;
