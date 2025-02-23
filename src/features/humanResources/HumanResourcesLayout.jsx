import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";
import SummaryGrid from "./SummaryGrid";
import StatsGrid from "./StatsGrid";
import EmployesTable from "./EmployesTable";
import { useNavigate } from "react-router-dom";
function HumanResourcesLayout() {
  const navigate = useNavigate();
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Recursos humanos</Heading>
        <Button onClick={() => navigate("hire")}>
          <HiPlus /> Contratar
        </Button>
      </Row>
      <SummaryGrid />
      <StatsGrid />
      <EmployesTable />
    </Row>
  );
}

export default HumanResourcesLayout;
