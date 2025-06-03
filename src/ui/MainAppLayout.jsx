import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";
import ClassesTableContext from "../features/classes/ClassesTableContext";
import { useUser } from "@clerk/clerk-react";

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
function MainAppLayout() {
  const ref = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, user } = useUser();
  const role = user?.publicMetadata?.role;

  useEffect(() => {
    if (isLoaded && !isSignedIn) navigate("/login", { replace: true });
    if (role === "student") navigate("/area/student", { replace: true });
    if (role === "teacher") navigate("/area/teacher", { replace: true });
  }, [isLoaded, isSignedIn, navigate, role]);

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

export default MainAppLayout;
