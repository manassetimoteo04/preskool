import styled, { keyframes } from "styled-components";
import Sidebar from "../../../ui/Sidebar";
import Header from "../../../ui/Header";
import { Outlet } from "react-router-dom";
const animation = keyframes`
  from{
    transform: translateY(-10rem);
    opacity: 0;
  }
  to{
    transform: translateY(0rem);
    opacity: 1;
  }`;

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

function StudentAppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default StudentAppLayout;
