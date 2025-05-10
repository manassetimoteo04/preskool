import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Tag from "../../../ui/Tag";
import {
  HiOutlineCheckCircle,
  HiOutlineLockClosed,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";
import SmallUserImg from "../../../ui/SmallUserImg";
import styled from "styled-components";
import { useDarkMode } from "../../../context/DarkModeContext";
import { useCurrentTab } from "./TabContext";
import Modal from "../../../ui/Modal";
import ResetUserPassword from "./ResetUserPassword";
const StyledConcatedBox = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: 500;
  }
  & > span {
    font-size: 1.2rem;
  }
`;
function UserTableRow({ user }) {
  const { isDarkMode } = useDarkMode();
  const { setTableEditTab } = useCurrentTab();

  return (
    <Menus>
      <Modal>
        <Table.Row>
          <SmallUserImg
            src={`/default-user-${isDarkMode ? "dark" : "ligth"}.png`}
          />
          <StyledConcatedBox>
            <p>{user.name}</p>
            <span>{user.email}</span>
          </StyledConcatedBox>
          <span>{user.role.name}</span>
          <Tag
            type={user.status.toLowerCase() === "ativo" ? "active" : "inactive"}
          >
            {user.status}
          </Tag>
          <Menus.Toggle menuId={user.name} />
          <Menus.Menu menuId={user.name}>
            <Menus.List>
              <Menus.Button
                onClick={() => setTableEditTab("edit-user-tab")}
                icon={<HiOutlinePencil />}
              >
                Editar Usuário
              </Menus.Button>
              <Menus.Button icon={<HiOutlineCheckCircle />}>
                Activar Conta
              </Menus.Button>
              <Modal.Open opens={"reset-password-" + user.name}>
                <Menus.Button icon={<HiOutlineLockClosed />}>
                  Redefinir Senha
                </Menus.Button>
              </Modal.Open>
              <Menus.Button icon={<HiOutlineTrash />}>
                Deletar Usuário
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Table.Row>
        <Modal.Window name={"reset-password-" + user.name} buttonClose={true}>
          <ResetUserPassword />
        </Modal.Window>
      </Modal>
    </Menus>
  );
}

export default UserTableRow;
