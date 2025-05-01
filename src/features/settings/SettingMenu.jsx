import {
  HiOutlineBell,
  HiOutlineFolder,
  HiOutlinePencilAlt,
} from "react-icons/hi";
import {
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineHomeModern,
  HiOutlineLockClosed,
  HiOutlineUsers,
} from "react-icons/hi2";
import styled from "styled-components";
import MenuNavLink from "./MenuNavLink";

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

function SettingMenu() {
  return (
    <StyledNavList>
      <ul>
        <li>
          <MenuNavLink href="#general">
            <HiOutlineFolder /> Configurações Gerais
          </MenuNavLink>
        </li>
        <li>
          <MenuNavLink href="#permissions">
            <HiOutlineUsers /> Usuário e Permissões
          </MenuNavLink>
        </li>
        <li>
          <MenuNavLink href="#subjects">
            <HiOutlineBookOpen /> Disciplinas e Currículos
          </MenuNavLink>
        </li>
        <li>
          <MenuNavLink href="#classes">
            <HiOutlineHomeModern /> Turmas e Séries
          </MenuNavLink>
        </li>
        <li>
          <MenuNavLink href="#avaliations">
            <HiOutlinePencilAlt /> Notas e Avaliações
          </MenuNavLink>
        </li>
        <li>
          <MenuNavLink href="#notifications">
            <HiOutlineBell /> Notificações
          </MenuNavLink>
        </li>
        <li>
          <MenuNavLink href="#calendar">
            <HiOutlineCalendar /> Calendário Escolar
          </MenuNavLink>
        </li>
        <li>
          <MenuNavLink href="#security">
            <HiOutlineLockClosed /> Segurança
          </MenuNavLink>
        </li>
      </ul>
    </StyledNavList>
  );
}

export default SettingMenu;
