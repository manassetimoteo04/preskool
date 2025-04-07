import { HiPlus } from "react-icons/hi2";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";
import EmployeeLeavesTable from "./EmployeeLeavesTable";
import CreateEditLicenceForm from "./CreateEditLicenceForm";

function EmployeeLeavesLayout() {
  return (
    <Modal>
      <Row>
        <Row type="horizontal">
          <Heading as="h2">Licenças de Funcionário</Heading>
          <Modal.Open opens="create-license">
            <Button>
              <HiPlus /> licença
            </Button>
          </Modal.Open>
        </Row>
        <EmployeeLeavesTable />
      </Row>
      <Modal.Window name="create-license">
        <CreateEditLicenceForm hasUser={false} />
      </Modal.Window>
    </Modal>
  );
}

export default EmployeeLeavesLayout;
