import styled from "styled-components";
import Heading from "./Heading";
import AlertMessage from "./AlertMessage";

const StyledDangerArea = styled.div`
  padding: 2rem;
  align-items: start;
  display: flex;
  flex-direction: column;
`;
function DangerArea({ children }) {
  return (
    <StyledDangerArea>
      <Heading as="h3">Excluir Usuário</Heading>
      <AlertMessage>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        atque blanditiis repellendus quisquam
      </AlertMessage>
      {children}
    </StyledDangerArea>
  );
}

export default DangerArea;
