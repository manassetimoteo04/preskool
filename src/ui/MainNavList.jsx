import { HiOutlineViewGrid } from "react-icons/hi";
import {
  HiOutlineBriefcase,
  HiOutlineBanknotes,
  HiOutlineHomeModern,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
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
    background-color: var(--color-grey-100);
    color: var(--color-blue-700);
  }
  &:hover {
    background-color: var(--color-grey-100);
    color: var(--color-blue-700);
  }
  & > svg {
    font-size: 2rem;
  }
`;
function MainNavList() {
  return (
    <StyledMainNavList>
      <li>
        <StyledLink to="/">
          <HiOutlineViewGrid />
          Home
        </StyledLink>
      </li>{" "}
      <li>
        <StyledLink to="/students">
          <HiOutlineUserGroup />
          Students
        </StyledLink>
      </li>{" "}
      <li>
        <StyledLink to="/classes">
          <HiOutlineHomeModern />
          Classes
        </StyledLink>
      </li>{" "}
      <li>
        <StyledLink to="/teachers">
          <HiOutlineUsers />
          Teachers
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/human-resources">
          <HiOutlineBriefcase />
          Human Resources
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/financial">
          <HiOutlineBanknotes />
          Financial
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/settings">
          <HiOutlineCog6Tooth />
          Settings
        </StyledLink>
      </li>
    </StyledMainNavList>
  );
}

export default MainNavList;
