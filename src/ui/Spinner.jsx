import styled, { keyframes } from "styled-components";

const turn = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`;
const turn2 = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform: rotate(-360deg)
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
const StyledSpinner1 = styled.div`
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  border: 3px solid var(--color-brand-600);
  border-bottom-color: transparent;
  animation: ${turn} 1s linear infinite;
  z-index: 1;
`;
const StyledSpinner2 = styled.div`
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 3px solid var(--color-brand-500);
  border-left-color: transparent;
  animation: ${turn2} 1s linear infinite;
  z-index: 1;
`;
const StyledSpinner3 = styled.div`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 3px solid var(--color-brand-500);
  border-left-color: transparent;
  animation: ${turn} 1s linear infinite;
  z-index: 1;
`;

function Spinner() {
  return (
    <StyledSpinnerContainer>
      <StyledSpinner1 />
      <StyledSpinner2 />
      <StyledSpinner3 />
    </StyledSpinnerContainer>
  );
}

export default Spinner;
