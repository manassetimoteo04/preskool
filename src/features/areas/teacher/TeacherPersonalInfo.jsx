import styled from "styled-components";

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

function TeacherPersonalInfo({ teacher }) {
  const {
    idCardNumber,
    fullName,
    fatherName,
    birthDate,
    actualResidence,
    motherName,
  } = teacher;
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
        <span>{fatherName}</span>
      </InforBox>
      <InforBox>
        <span>E de</span>
        <span>{motherName}</span>
      </InforBox>
      <InforBox>
        <span>Data de Nascimento</span>
        <span>{birthDate}</span>
      </InforBox>{" "}
      <InforBox>
        <span>Residência</span>
        <span>{actualResidence}</span>
      </InforBox>{" "}
      <InforBox>
        <span>Bilhete de Identidade</span>
        <span>{idCardNumber}</span>
      </InforBox>
    </StyledPersonalInfor>
  );
}

export default TeacherPersonalInfo;
