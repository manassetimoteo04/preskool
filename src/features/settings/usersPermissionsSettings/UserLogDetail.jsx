import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import { HiOutlineTrash } from "react-icons/hi";
const StyledLogDetail = styled.div`
  display: flex;
  flex-direction: column;
  & > header {
    padding: 2rem;
    min-width: 35rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
  & > button {
    margin: 1rem;
  }
`;
const StyledDetailRow = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1rem 0;
`;
const Details = styled.div`
  padding: 0 2rem;
`;
function UserLogDetail() {
  return (
    <StyledLogDetail>
      <header>
        <Heading as="h3">Detalhes da Sessão</Heading>
      </header>
      <Details>
        <StyledDetailRow>
          <strong>Data Login</strong>
          <span>29 Abril de 2025, as 19:00</span>
        </StyledDetailRow>
        <StyledDetailRow>
          <strong>Plataforma</strong>
          <span>Linux, Ubuntu 24</span>
        </StyledDetailRow>
        <StyledDetailRow>
          <strong>Idioma</strong>
          <span>Português (PT-Br)</span>
        </StyledDetailRow>{" "}
        <StyledDetailRow>
          <strong>Localização</strong>
          <span>Luanda, Cazenga</span>
        </StyledDetailRow>
        <StyledDetailRow>
          <strong>Data do Logout</strong>
          <span>30 de Abril de 2025, 12 12:00</span>
        </StyledDetailRow>
        <StyledDetailRow>
          <strong>Duração</strong>
          <span>2 dias e 12 horas</span>
        </StyledDetailRow>
      </Details>
      <Button variation="danger">
        <HiOutlineTrash /> Excluir Registo
      </Button>
    </StyledLogDetail>
  );
}

export default UserLogDetail;
