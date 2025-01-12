import { HiArrowLeft } from "react-icons/hi2";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useNavigate } from "react-router-dom";
import AddStudentForm from "../features/students/AddStudentForm";

function AddStudent() {
  const navigate = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">Add new student</Heading>
        <Button type="secondary" onClick={() => navigate(-1)}>
          <HiArrowLeft /> back
        </Button>
      </Row>

      <AddStudentForm />
    </>
  );
}

export default AddStudent;
