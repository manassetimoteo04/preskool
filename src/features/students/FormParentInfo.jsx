import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";

function FormParentInfo({ parent, register, errors }) {
  const parentType =
    parent === "father" ? "pai" : parent === "mother" ? "mãe" : "guardião";

  return (
    <>
      <Form.Row>
        <>
          <Heading as="h4">Informações do {parentType}</Heading>
          <InputRow
            label={`Nome Completo ${parentType}`}
            error={errors?.[`${parent}Name`]?.message}
          >
            <Input
              type="text"
              id="${parent}Name"
              name={`${parent}Name`}
              {...register(`${parent}Name`, {
                required: "Este Campo é obrigatório",
              })}
            />
          </InputRow>
          <InputRow
            label={`Telefone ${parentType}`}
            error={errors?.[`${parent}Phone`]?.message}
          >
            <Input
              type="text"
              id={`${parent}Phone`}
              name={`${parent}Phone`}
              {...register(`${parent}Phone`, {
                required: "Este Campo é obrigatório",
              })}
            />
          </InputRow>

          <InputRow
            label={`Email ${parentType}`}
            error={errors?.[`${parent}Email`]?.message}
          >
            <Input
              type="email"
              id={`${parent}Email`}
              name={`${parent}Email`}
              {...register(`${parent}Email`, {
                required: "Este Campo é obrigatório",
              })}
            />
          </InputRow>

          <InputRow
            label={`Ocupação ${parentType}`}
            error={errors?.[`${parent}Occupation`]?.message}
          >
            <Input
              type="text"
              id={`${parent}Occupation`}
              name={`${parent}Occupation`}
              {...register(`${parent}Occupation`, {
                required: "Este Campo é obrigatório",
              })}
            />
          </InputRow>
        </>
      </Form.Row>
    </>
  );
}

export default FormParentInfo;
