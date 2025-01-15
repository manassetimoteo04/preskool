import styled from "styled-components";
import { VscEmptyWindow } from "react-icons/vsc";

const StyledEmpty = styled.p`
  padding: 3rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & > svg {
    font-size: 3rem;
  }
`;

function Empty({ children }) {
  return (
    <StyledEmpty>
      <VscEmptyWindow />
      {children}
    </StyledEmpty>
  );
}

export default Empty;
