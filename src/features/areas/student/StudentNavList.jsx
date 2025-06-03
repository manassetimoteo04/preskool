import { HiOutlineViewGrid } from "react-icons/hi";
import {
  HiOutlineHomeModern,
  HiOutlineTableCells,
  HiOutlineUserGroup,
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
function StudentNavList() {
  return (
    <StyledMainNavList>
      <li>
        <StyledLink to="/area/student/home">
          <HiOutlineViewGrid />
          Perfil
        </StyledLink>
      </li>{" "}
      <li>
        <StyledLink to="/area/student/mates">
          <HiOutlineUserGroup />
          Colegas
        </StyledLink>
      </li>{" "}
      <li>
        <StyledLink to="/area/student/schedules">
          <HiOutlineHomeModern />
          Horário da Turma
        </StyledLink>
      </li>{" "}
      <li>
        <StyledLink to="/area/student/grades">
          <HiOutlineTableCells />
          Pautas Publicadas
        </StyledLink>
      </li>{" "}
    </StyledMainNavList>
  );
}

export default StudentNavList;
