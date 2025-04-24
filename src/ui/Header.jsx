import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import {
  HiOutlineBell,
  HiOutlineCog6Tooth,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import Menus from "./Menus";
import { HiOutlineLogout } from "react-icons/hi";
import UserBox from "./UserBox";

const StyledHeader = styled.header`
  padding: 1rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
`;

function Header() {
  return (
    <Menus>
      <StyledHeader>
        <ButtonIcon>
          <HiOutlineSun />
        </ButtonIcon>
        <ButtonIcon>
          <HiOutlineBell />
        </ButtonIcon>
        <Menus.Toggle showIcon={false} menuId="user-pop">
          <UserBox />
        </Menus.Toggle>
        <Menus.Menu menuId="user-pop">
          <Menus.List>
            <Menus.Button icon={<HiOutlineUser />}>
              Perfil de Usuário
            </Menus.Button>
            <Menus.Button icon={<HiOutlineCog6Tooth />}>
              Configurações
            </Menus.Button>
            <Menus.Button icon={<HiOutlineLogout />}>
              Terminal Sessão
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </StyledHeader>
    </Menus>
  );
}

export default Header;
