import { useUser } from "@clerk/clerk-react";
import styled from "styled-components";
import { useStudent } from "../../students/useStudent";
import Spinner from "../../../ui/Spinner";

const StyledPersonalInfor = styled.div`
  display: flex;

  flex-direction: column;
  & > header {
    padding: 2rem;
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const InforBox = styled.div`
  display: grid;
  padding: 1.5rem 2rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  grid-template-columns: 20rem 1fr;
`;

function PersonalInfo() {
  const {
    user: { id },
  } = useUser();
  const { data, isLoading } = useStudent(id);
  if (isLoading) return <Spinner />;
  const { fullName, birthDate, idNumber, residence, emissionDate, parent } =
    data;
  return (
    <StyledPersonalInfor>
      <header>
        <strong>Informações Pessoais</strong>
      </header>
      <InforBox>
        <span>Nome Completo</span>
        <span>{fullName}</span>
      </InforBox>
      <InforBox>
        <span>Filho de</span>
        <span>{parent?.name}</span>
      </InforBox>
      <InforBox>
        <span>E de</span>
        <span>Augustina Mpaka</span>
      </InforBox>
      <InforBox>
        <span>Data de Nascimento</span>
        <span>{birthDate}</span>
      </InforBox>{" "}
      <InforBox>
        <span>Emitido aos</span>
        <span>{emissionDate}</span>
      </InforBox>{" "}
      <InforBox>
        <span>Residência</span>
        <span>{residence}</span>
      </InforBox>{" "}
      <InforBox>
        <span>Bilhete de Identidade</span>
        <span>{idNumber}</span>
      </InforBox>
    </StyledPersonalInfor>
  );
}

export default PersonalInfo;
