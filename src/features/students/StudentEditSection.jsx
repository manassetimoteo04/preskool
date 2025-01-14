import { HiArrowLeft } from "react-icons/hi";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import { useNavigate } from "react-router-dom";
import { useStudent } from "./useStudent";
import Spinner from "../../ui/Spinner";
import AddStudentForm from "./AddStudentForm";

function StudentEditSection() {
  const navigate = useNavigate();
  const { data, isLoading } = useStudent();
  if (isLoading) return <Spinner />;
  return (
    <Modal>
      <Row type="horizontal">
        <Heading as="h2">Estudante #{data?.internNumber}</Heading>
        <Button onClick={() => navigate(-1)}>
          <HiArrowLeft /> Voltar
        </Button>
      </Row>
      <AddStudentForm editId={data?.id} data={data} />
    </Modal>
  );
}

export default StudentEditSection;
