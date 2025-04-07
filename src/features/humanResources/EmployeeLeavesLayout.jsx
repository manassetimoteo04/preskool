import { HiPlus } from "react-icons/hi2";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import EmployeeLeavesTable from "./EmployeeLeavesTable";

function EmployeeLeavesLayout() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Licenças de Funcionário</Heading>
        <Button>
          <HiPlus /> licença
        </Button>
      </Row>
      <EmployeeLeavesTable />
    </Row>
  );
}

export default EmployeeLeavesLayout;
