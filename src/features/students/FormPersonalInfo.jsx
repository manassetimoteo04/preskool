import Form from "../../ui/Form";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import RadioInputGroup from "../../ui/RadioInputGroup";

function FormPersonalInfo({ register, errors, setGenre, genre }) {
  return (
    <Form.Row>
      <InputRow label="Nome Completo" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          {...register("fullName", { required: "Este campo é obrigatório" })}
        />
      </InputRow>
      <InputRow label="Data de Nascimento" error={errors?.birthDate?.message}>
        <Input
          type="date"
          id="birthDate"
          name="birthDate"
          {...register("birthDate", { required: "Este campo é obrigatório" })}
        />
      </InputRow>

      <InputRow label="Província" error={errors?.province?.message}>
        <Input
          type="text"
          id="province"
          name="province"
          {...register("province", { required: "Este campo é obrigatório" })}
        />
      </InputRow>

      <InputRow
        label="Número de Identificação"
        error={errors?.idNumber?.message}
      >
        <Input
          type="text"
          id="idNumber"
          name="idNumber"
          {...register("idNumber", { required: "Este campo é obrigatório" })}
        />
      </InputRow>

      <InputRow label="Data de emissão" error={errors?.emissionDate?.message}>
        <Input
          type="date"
          id="emissionDate"
          name="emissionDate"
          {...register("emissionDate", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>

      <InputRow label="Residência actual" error={errors?.residence?.message}>
        <Input
          type="text"
          id="residence"
          name="residence"
          {...register("residence", { required: "Este campo é obrigatório" })}
        />
      </InputRow>
      <InputRow label="Telefone" error={errors?.studentPhone?.message}>
        <Input
          type="text"
          id="studentPhone"
          name="studentPhone"
          {...register("studentPhone", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>

      <InputRow label="Gênero">
        <RadioInputGroup register={register} setter={setGenre} value={genre} />
      </InputRow>
    </Form.Row>
  );
}

export default FormPersonalInfo;
