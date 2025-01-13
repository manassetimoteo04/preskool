import styled, { keyframes } from "styled-components";

const turn = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`;
const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-row: span -1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledSpinner = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 3px solid var(--color-brand-800);
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: ${turn} 1s linear infinite;
  z-index: 1;
`;

function Spinner() {
  return (
    <StyledSpinnerContainer>
      <StyledSpinner />
    </StyledSpinnerContainer>
  );
}

export default Spinner;
