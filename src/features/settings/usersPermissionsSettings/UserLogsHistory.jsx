import styled from "styled-components";
import { useDarkMode } from "../../../context/DarkModeContext";
import SmallUserImg from "../../../ui/SmallUserImg";
import Row from "../../../ui/Row";
import Table from "../../../ui/Table";
import Heading from "../../../ui/Heading";
import Menus from "../../../ui/Menus";
import { HiOutlineEye } from "react-icons/hi";
import Modal from "../../../ui/Modal";
import UserLogDetail from "./UserLogDetail";

const StyledUserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const TableHeader = styled.div`
  margin-bottom: 2rem;
`;
function UserLogsHistory() {
  const { isDarkMode } = useDarkMode();
  return (
    <Modal>
      <Row>
        <StyledUserBox>
          <SmallUserImg
            src={`/default-user-${isDarkMode ? "dark" : "ligth"}.png`}
          />
          <div>
            <p>Manasse Timóteo</p>
            <span>manassetimoteo4@gmail.com</span>
          </div>
        </StyledUserBox>
        <Table columns="1fr 1fr 1fr 4rem">
          <TableHeader>
            <Heading as="h3">Lista de Logs</Heading>
          </TableHeader>
          <Table.Header>
            <span>Dispositivo</span>
            <span>Data</span>
            <span>Localização</span>
            <span></span>
          </Table.Header>
          <Menus>
            <Table.Body
              data={[1, 2, 3, 4, 4]}
              render={(i) => (
                <Table.Row>
                  <span>Navegador Chrome</span>
                  <span>12/04/2025 18:08</span>
                  <span>Luanda, Cazenga</span>
                  <Menus.Toggle menuId={i} />
                  <Menus.Menu menuId={i}>
                    <Menus.List>
                      <Modal.Open opens={i}>
                        <Menus.Button icon={<HiOutlineEye />}>
                          Ver sessão
                        </Menus.Button>
                      </Modal.Open>
                    </Menus.List>
                  </Menus.Menu>
                  <Modal.Window name={i} buttonClose={true}>
                    <UserLogDetail />
                  </Modal.Window>
                </Table.Row>
              )}
            />
          </Menus>
        </Table>
      </Row>
    </Modal>
  );
}

export default UserLogsHistory;
