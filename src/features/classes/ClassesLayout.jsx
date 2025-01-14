import { HiPlus } from "react-icons/hi2";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import ClassesTable from "./ClassesTable";
function ClassesLayout() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Turmas</Heading>
        <Button>
          <HiPlus />
          Cadastrar Turma
        </Button>
      </Row>
      <ClassesTable>
        <ClassesTable.Header>
          <Heading as="h3">Informática</Heading>
        </ClassesTable.Header>
        <ClassesTable.Body
          render={() => <ClassesTable.Box>Box</ClassesTable.Box>}
          data={[1, 2, 3]}
        />
      </ClassesTable>
    </Row>
  );
}

export default ClassesLayout;
