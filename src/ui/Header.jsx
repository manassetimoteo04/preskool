import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import {
  HiChevronDown,
  HiOutlineBell,
  HiOutlineCog6Tooth,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import SmallUserImg from "./SmallUserImg";
import Menus from "./Menus";
import { HiOutlineLogout } from "react-icons/hi";

const StyledHeader = styled.header`
  padding: 1rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
`;
const StyledUserBox = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  &:hover {
    background-color: var(--color-grey-100);
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border: none;
  }
  gap: 1rem;
  & > div > p {
    font-weight: 600;
  }
  & > span > span {
    font-size: 1.4rem;
    opacity: 0.8;
  }
  & > span {
    display: flex;
    height: 100%;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
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
          <StyledUserBox>
            <SmallUserImg src="/default-user.jpg" />
            <span>
              <p>Manasse Timóteo</p>
              <span>manassetimoteo4@gmail.com</span>
            </span>
            <HiChevronDown />
          </StyledUserBox>
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
