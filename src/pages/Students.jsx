import AddNewStudentButton from "../features/students/AddNewStudentButton";
import StudentsTable from "../features/students/StudentsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Modal from "../ui/Modal";

function Students() {
  return (
    <>
      <Modal>
        <Row type="horizontal">
          <Heading as="h2">Students</Heading>
          <AddNewStudentButton />
        </Row>
        <StudentsTable />
      </Modal>
    </>
  );
}

export default Students;
