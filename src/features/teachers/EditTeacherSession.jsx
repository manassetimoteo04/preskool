import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import CreateEditTeacherForm from "./CreateEditTeacherForm";
import { useGetTeacher } from "./useGetTeacher";
function EditTeacherSession() {
  const navigate = useNavigate();
  const { teacherId: id } = useParams();
  const { data: teacher, isLoading } = useGetTeacher(id);
  if (isLoading) return <Spinner />;
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Editar Professor</Heading>
        <Button variation="secondary" onClick={() => navigate(-1)}>
          <HiArrowLeft /> Voltar
        </Button>
      </Row>
      <CreateEditTeacherForm editId={id} editTeacher={teacher} />
    </Row>
  );
}

export default EditTeacherSession;
