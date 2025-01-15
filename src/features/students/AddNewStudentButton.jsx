import { HiPlus } from "react-icons/hi2";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useNavigate } from "react-router-dom";

function AddNewStudentButton() {
  const navigate = useNavigate();
  return (
    <>
      <Modal.Window name="studentForm" buttonClose={true}>
        <p>Form</p>
      </Modal.Window>
      <Button onClick={() => navigate("add-student")}>
        <HiPlus /> Estudante
      </Button>
    </>
  );
}

export default AddNewStudentButton;
