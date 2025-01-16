import { HiPlus } from "react-icons/hi2";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TeachersTable from "../features/teachers/TeachersTable";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const navigate = useNavigate();
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Professores</Heading>
        <Button onClick={() => navigate("add-teacher")}>
          <HiPlus /> Professor
        </Button>
      </Row>
      <TeachersTable />
    </Row>
  );
}

export default Teachers;
