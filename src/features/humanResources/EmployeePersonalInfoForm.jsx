import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";

function EmployeePersonalInfoForm({ errors, register }) {
  return (
    <Form.Row>
      <InputRow label="Nome Completo" error={errors?.fullName?.message}>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          {...register("fullName", { required: "Este campo é obrigatório" })}
        />
      </InputRow>{" "}
      <InputRow label="Data de nascimento" error={errors?.birthDate?.message}>
        <Input
          type="date"
          name="birthDate"
          id="birthDate"
          {...register("birthDate", { required: "Este campo é obrigatório" })}
        />
      </InputRow>{" "}
      <InputRow
        label="Número de Identificação"
        error={errors?.idCardNumber?.message}
      >
        <Input
          type="text"
          name="idCardNumber"
          id="idCardNumber"
          {...register("idCardNumber", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>{" "}
      <InputRow label="Nome do pai" error={errors?.fatherName?.message}>
        <Input
          type="text"
          name="fatherName"
          id="fatherName"
          {...register("fatherName", { required: "Este campo é obrigatório" })}
        />
      </InputRow>{" "}
      <InputRow label="Nome da Mãe" error={errors?.motherName?.message}>
        <Input
          type="text"
          name="motherName"
          id="motherName"
          {...register("motherName", { required: "Este campo é obrigatório" })}
        />
      </InputRow>{" "}
      <InputRow
        label="Residência actual"
        error={errors?.actualResidence?.message}
      >
        <Input
          type="text"
          name="actualResidence"
          id="actualResidence"
          {...register("actualResidence", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>{" "}
      <InputRow label="Telefone" error={errors?.phoneNumber?.message}>
        <Input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          {...register("phoneNumber", {
            required: "Este campo é obrigatório",
          })}
        />
      </InputRow>{" "}
      <InputRow label="Email" error={errors?.emailAddress?.message}>
        <Input
          type="text"
          name="emailAddress"
          id="emailAddress"
          {...register("emailAddress", {
            required: "Este campo é obrigatório",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Providencie email válido",
            },
          })}
        />
      </InputRow>
    </Form.Row>
  );
}

export default EmployeePersonalInfoForm;
