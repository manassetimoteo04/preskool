import styled from "styled-components";
import Button from "../../ui/Button";

import { useCreateStudent } from "./useCreateStudent";

import { useNavigate } from "react-router-dom";
import { useUpdateStudent } from "./useUpdateStudent";
import SpinnerMini from "../../ui/SpinnerMini";
import { generateUniqueCode } from "../../utils/helpers";

const StyledFormButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
`;
function FormButtons({
  handleSubmit,
  genre,
  parent,
  isEditSession,
  internNumber: oldInterNumber,
}) {
  const navigate = useNavigate();
  const { createStudent, isLoading } = useCreateStudent();
  const { updateStudent, isLoading: isUpdating } = useUpdateStudent();
  function onClick(data) {
    const internNumber = isEditSession ? oldInterNumber : generateUniqueCode();
    const {
      fullName,
      idNumber,
      birthDate,
      emissionDate,
      residence,
      studentPhone,
      biUpload,
      docUpload,
      province,
      grade,
    } = data;
    const studentData = {
      fullName,
      idNumber,
      emissionDate,
      residence,
      birthDate,
      studentPhone,
      biUpload,
      docUpload,
      avatar: "",
      classId: grade,
      province,
      parent: {
        type: parent,
        name: data[`${parent}Name`],
        email: data[`${parent}Email`],
        phone: data[`${parent}Phone`],
        occupation: data[`${parent}Occupation`],
      },
      gender: genre,
      internNumber: internNumber,
    };

    isEditSession
      ? updateStudent(studentData)
      : createStudent(studentData, {
          onSuccess: () => {
            navigate("/students");
          },
        });
  }

  return (
    <>
      <StyledFormButtons>
        <Button
          type="reset"
          variation="primary"
          onClick={() => (isEditSession ? navigate(-1) : {})}
        >
          Cancelar
        </Button>

        <Button
          onClick={handleSubmit(onClick)}
          disabled={isUpdating || isLoading}
        >
          {isUpdating || (isLoading && <SpinnerMini />)}
          {isEditSession ? "Editar estudante " : "Finalizar inscrição"}
        </Button>
      </StyledFormButtons>
    </>
  );
}

export default FormButtons;
