import styled from "styled-components";
import Button from "../../ui/Button";
import Modal, { useModal } from "../../ui/Modal";
import ConfirmInformation from "./ConfirmInformation";
import { useState } from "react";
import { useCreateStudent } from "./useCreateStudent";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useUpdateStudent } from "./useUpdateStudent";
import SpinnerMini from "../../ui/SpinnerMini";

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
  const [data, setData] = useState({});
  const { open, close } = useModal();
  const { createStudent, isLoading } = useCreateStudent();
  const { updateStudent, isLoading: isUpdating } = useUpdateStudent();
  function onClick(data) {
    const uniqueId = nanoid(10);
    const internNumber = isEditSession
      ? oldInterNumber
      : `PS-${data.fullName.split(" ").at(0)[0]}${
          data.fullName.split(" ").at(-1)[0]
        }-${uniqueId}`.replaceAll("_", "");
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
      schoolYear,
      grade,
      course,
      schoolPeriod,
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
      schoolYear,
      grade,
      course,
      schoolPeriod,
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

    !isEditSession && open("confirmInfo");
    if (isEditSession) {
      updateStudent(studentData);
    }
    setData(studentData);
  }
  function onConfirm() {
    createStudent(data, {
      onSuccess: () => {
        close();
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

        <Button onClick={handleSubmit(onClick)} disabled={isUpdating}>
          {isUpdating && <SpinnerMini />}
          {isEditSession ? "Editar estudante " : "Finalizar inscrição"}
        </Button>
      </StyledFormButtons>
      {!isEditSession && (
        <Modal.Window name="confirmInfo" buttonClose={true}>
          <ConfirmInformation
            data={data}
            onConfirm={onConfirm}
            isLoading={isLoading}
          />
        </Modal.Window>
      )}
    </>
  );
}

export default FormButtons;
