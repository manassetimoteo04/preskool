import styled, { keyframes } from "styled-components";
import Sidebar from "../../../ui/Sidebar";
import Header from "../../../ui/Header";
import { Outlet } from "react-router-dom";
import Layout from "../../../ui/Layout";
import Main from "../../../ui/Main";

const animation = keyframes`
  from{
    transform: translateY(-10rem);
    opacity: 0;
  }
  to{
    transform: translateY(0rem);
    opacity: 1;
  }`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  animation: ${animation} 5s linear ease;
`;
function TeacherAppLayout() {
  return (
    <Layout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Layout>
  );
}

export default TeacherAppLayout;
