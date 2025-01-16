import Form from "../../ui/Form";
import Input from "../../ui/Input";
import InputRow from "../../ui/InputRow";
import Select from "../../ui/Select";

function TeacherExperienceFormInfo({ errors, register }) {
  return (
    <Form.Row>
      <InputRow
        label="Anos de Experiência"
        error={errors?.experienceYears?.message}
      >
        <Select
          name="experienceYears"
          id="experienceYears"
          {...register("experienceYears", {
            required: "Este campo é obrigatório",
          })}
        >
          <option value="2">1 ano de experiência</option>
          <option value="2">2 anos de experiência</option>
          <option value="3">3 anos de experiência</option>
          <option value="4">4 anos de experiência</option>
          <option value="5">5 anos de experiência</option>
          <option value="5+">5+ anos de experiência</option>
          <option value="sem-experiência">Sem experiência</option>
        </Select>
      </InputRow>{" "}
      <InputRow label="Nome da Insituição anterior">
        <Input
          type="text"
          name="lastInsitutionName"
          id="lastInsitutionName"
          {...register("lastInsitutionName")}
        />
      </InputRow>{" "}
      <InputRow label="Endereço da Insituição">
        <Input
          type="text"
          name="lastInstitutionAddress"
          id="lastInstitutionAddress"
          {...register("lastInsitutionAddress")}
        />
      </InputRow>{" "}
      <InputRow label="Email da Insituição">
        <Input
          type="email"
          name="lastInstitutionEmail"
          id="lastInstitutionEmail"
          {...register("lastInsitutionEmail")}
        />
      </InputRow>{" "}
      <InputRow label="Telefone da Insituição">
        <Input
          type="text"
          name="lastInstitutionPhone"
          id="lastInstitutionPhone"
          {...register("lastInsitutionPhone")}
        />
      </InputRow>{" "}
    </Form.Row>
  );
}

export default TeacherExperienceFormInfo;
