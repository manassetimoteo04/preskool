import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useUser } from "@clerk/clerk-react";
import StudentNavList from "../features/areas/components/StudentNavList";

const StyledSidebar = styled.aside`
  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  grid-column: 1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function Sidebar() {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;
  console.log(role);
  return (
    <StyledSidebar>
      <Logo />
      {role === "admin" && <MainNav />}
      {role === "student" && <StudentNavList />}
    </StyledSidebar>
  );
}

export default Sidebar;
