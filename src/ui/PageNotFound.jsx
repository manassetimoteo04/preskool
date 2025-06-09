import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { HiArrowLeft, HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";

const StyledPageNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  & > div {
    background-color: var(--color-grey-100);
    padding: 2rem;
    max-width: 45rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    & > svg {
      font-size: 5rem;
    }
    & > small {
      opacity: 0.6;
      font-style: oblique;
    }
  }
`;

function PageNotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <StyledPageNotFound>
      <div>
        <HiOutlineExclamationTriangle />
        <Heading as="h1">Page Not Found</Heading>
        <p>
          Ups! a página que procuras não foi encontrada, por favor verifique e
          tente novamente
        </p>
        <small>unknownpath: {location.pathname}</small>
        <Button onClick={() => navigate(-1)}>
          <HiArrowLeft /> Voltar
        </Button>
      </div>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
