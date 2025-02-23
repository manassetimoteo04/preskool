import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";

function EmployeeBankAccInfor({ errors, register }) {
  return (
    <Form.Row>
      <InputRow label="Número da Conta" error={errors?.bankAccNumber?.message}>
        <Input
          type="text"
          name="bankAccNumber"
          id="bankAccNumber"
          {...register("bankAccNumber", {
            required: "este campo é obrigatório",
          })}
        />
      </InputRow>
      <InputRow label="Nome da Conta" error={errors?.bankAccName?.message}>
        <Input
          type="text"
          name="bankAccName"
          id="bankAccName"
          {...register("bankAccName", {
            required: "este campo é obrigatório",
          })}
        />
      </InputRow>
      <InputRow label="Número do Banco" error={errors?.bankName?.message}>
        <Input
          type="text"
          name="bankName"
          id="bankName"
          {...register("bankName", {
            required: "este campo é obrigatório",
          })}
        />
      </InputRow>
    </Form.Row>
  );
}

export default EmployeeBankAccInfor;
