import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";
import ClassesTableContext from "../features/classes/ClassesTableContext";
const animation = keyframes`
  from{
    transform: translateY(-10rem);
    opacity: 0;
  }
  to{
    transform: translateY(0rem);
    opacity: 1;
  }

`;
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Main = styled.main`
  background-color: green;
  padding: 4rem 3rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow-y: scroll;
  overflow-x: unset;
  animation: ${animation} 5s linear ease;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  animation: ${animation} 5s linear ease;
`;
function AppLayout() {
  const ref = useRef();
  const location = useLocation();
  useEffect(() => {
    ref.current.scrollTo({
      behavior: "smooth",
    });
  }, [location]);

  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <ClassesTableContext>
        <Main ref={ref}>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </ClassesTableContext>
    </StyledAppLayout>
  );
}

export default AppLayout;
