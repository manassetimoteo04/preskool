import styled from "styled-components";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useCreateLeaves } from "./useCreateLeaves";
import { useParams } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";
import { HiX } from "react-icons/hi";
import { useGetEmployees } from "./useGetEmployees";
import { useEmployeeLeave } from "./useEmployeLeave";
import { useUpdateEmployeeLeave } from "./useUpdateEmployeeLeave";
import SmallUserImg from "../../ui/SmallUserImg";

const StyledLicenseForm = styled.form`
  min-width: 40rem;
  & > header {
    padding: 2rem;
    border-bottom: 1px solid var(--color-grey-200);
    display: flex;
  }
  & > header > span {
    cursor: pointer;
  }
  & > div {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  & > div > div:last-child {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  & > button {
    margin-top: 2rem;
  }
`;
function CreateEditLicenceForm({
  onCloseModal,
  hasUser = true,
  leaveId: licenseID,
  employeeLeaveId,
}) {
  const isEditSession = Boolean(licenseID);
  const { createLeave, isLoading } = useCreateLeaves();
  const { updateEmployeeLeave, isLoading: isUpdating } =
    useUpdateEmployeeLeave();
  const { data: license, isLoading: isLoadingLeave } =
    useEmployeeLeave(licenseID);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: license || {} });
  const { employeeIdParams } = useParams();
  const { employees, isLoading: isGettingEmployees } = useGetEmployees();
  function onSubmit(data) {
    console.log(data);
    data = {
      ...data,
      status: "onleave",
      createdAt: new Date(),
      employeeId: isEditSession
        ? employeeLeaveId
        : employeeIdParams
        ? employeeIdParams
        : data.employeeId,
    };
    isEditSession
      ? updateEmployeeLeave(
          { editId: licenseID, data },
          { onSuccess: onCloseModal }
        )
      : createLeave(data, { onSuccess: onCloseModal });
  }
  return (
    <StyledLicenseForm onSubmit={handleSubmit(onSubmit)}>
      <header>
        <Heading as="h2">
          {isEditSession ? "Actualizar Licença" : "Criar nova Licença"}
        </Heading>

        <span onClick={onCloseModal}>
          <HiX />
        </span>
      </header>
      <div>
        {!hasUser && (
          <InputRow
            label="Selecionar Funcionário"
            error={errors?.startDate?.message}
          >
            <Select
              disabled={isGettingEmployees || isLoadingLeave}
              {...register("employeeId", {
                required: "Este campo é obrigatório",
              })}
            >
              {employees?.map((e) => (
                <option key={e.id} value={e.id}>
                  <SmallUserImg src="/default-user.jpg" />
                  <span>{e?.fullName}</span>
                </option>
              ))}
            </Select>
          </InputRow>
        )}
        <InputRow label="Data de início" error={errors?.startDate?.message}>
          <Input
            disabled={isGettingEmployees || isLoadingLeave}
            type="date"
            {...register("startDate", {
              required: "Este campo é obrigatório",
            })}
          />
        </InputRow>
        <InputRow label="Data de fim" error={errors?.endDate?.message}>
          <Input
            disabled={isGettingEmployees || isLoadingLeave}
            type="date"
            {...register("endDate", {
              required: "Este campo é obrigatório",
            })}
          />
        </InputRow>{" "}
        <InputRow label="Tipo de Licença" error={errors?.licenseType?.message}>
          <Select
            disabled={isGettingEmployees || isLoadingLeave}
            {...register("licenseType", {
              required: "Este campo é obrigatório",
            })}
          >
            <option value="Doença">Doença</option>
            <option value="Férias">Férias</option>
            <option value="Outros">Outros</option>
          </Select>
        </InputRow>
        <InputRow label="Descrição" error={errors?.description?.message}>
          <Input
            disabled={isGettingEmployees || isLoadingLeave}
            type="text"
            {...register("description", {
              required: "Este campo é obrigatório",
            })}
          />
        </InputRow>{" "}
        <div>
          <Button>
            {isLoading || isUpdating ? (
              <SpinnerMini />
            ) : isEditSession ? (
              "Editar Licença"
            ) : (
              "Criar Licença"
            )}
          </Button>
        </div>
      </div>
    </StyledLicenseForm>
  );
}

export default CreateEditLicenceForm;
