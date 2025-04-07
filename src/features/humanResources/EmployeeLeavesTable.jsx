import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import Menus from "../../ui/Menus";
import Row from "../../ui/Row";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import EmployesTableOperation from "./EmployesTableOperation";
import { useEmployeeLeaves } from "./useEmployeeLeaves";
import LeaveTableRow from "./LeaveTableRow";

function EmployeeLeavesTable() {
  const { data: employeeLeavesList, isLoading } = useEmployeeLeaves();

  if (isLoading) return <Spinner />;
  return (
    <DetailBox>
      <header>
        <Row type="horizontal">
          <Heading as="h3">Todas a licenças</Heading>
          <EmployesTableOperation searchForm={false} />
        </Row>
      </header>
      <Table columns="4rem 2.5fr 1fr 1.5fr 1fr 1fr    4rem">
        <Table.Header>
          <span></span>
          <span>ID</span>
          <span>Tipo</span>
          <span>Data início</span>
          <span>Dias</span>
          <span>Status</span>
          <span></span>
        </Table.Header>
        <Menus>
          <Table.Body
            data={employeeLeavesList}
            render={(leave, index) => (
              <LeaveTableRow leave={leave} index={index} />
            )}
          />
        </Menus>
      </Table>
    </DetailBox>
  );
}

export default EmployeeLeavesTable;
