import { HiArrowLeft } from "react-icons/hi2";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";
import LicenseBox from "./LicenseBox";
import { useNavigate } from "react-router-dom";

function EmployeeLeaveDetailLayout() {
  const navigate = useNavigate();
  return (
    <Modal>
      <Row>
        <Row type="horizontal">
          <Heading as="h2">Informações da Licença #34</Heading>
          <Button variation="secondary" onClick={() => navigate(-1)}>
            <HiArrowLeft /> Voltar
          </Button>
        </Row>
        <LicenseBox />
      </Row>
    </Modal>
  );
}

export default EmployeeLeaveDetailLayout;
