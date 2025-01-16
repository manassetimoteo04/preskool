import { HiPlus } from "react-icons/hi2";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TeachersTable from "../features/teachers/TeachersTable";

function Teachers() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Professores</Heading>
        <Button>
          <HiPlus /> Professor
        </Button>
      </Row>
      <TeachersTable />
    </Row>
  );
}

export default Teachers;
