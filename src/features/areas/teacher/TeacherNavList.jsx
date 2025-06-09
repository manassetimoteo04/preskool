import { HiOutlineUser } from "react-icons/hi";
import {
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
  HiOutlineTableCells,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMainNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
`;
const StyledLink = styled(NavLink)`
  padding: 1rem 2rem;
  display: inline-block;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
  &.active {
    background-color: var(--color-brand-100);
  }
  &:hover {
    background-color: var(--color-brand-100);
  }
  & > svg {
    font-size: 2rem;
  }
`;

function TeacherNavList() {
  return (
    <StyledMainNavList>
      <li>
        <StyledLink to="/area/teacher/home">
          <HiOutlineUser />
          Perfil
        </StyledLink>
      </li>{" "}
      <li>
        <StyledLink to="/area/teacher/classes">
          <HiOutlineHomeModern />
          Turmas
        </StyledLink>
      </li>{" "}
      <li>
        <StyledLink to="/area/teacher/add-marks">
          <HiOutlineTableCells />
          Lançar Notas
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/area/teacher/settings">
          <HiOutlineCog6Tooth />
          Configurações
        </StyledLink>
      </li>
    </StyledMainNavList>
  );
}

export default TeacherNavList;
