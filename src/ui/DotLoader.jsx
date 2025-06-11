import styled, { keyframes } from "styled-components";

const animation = keyframes`
  
  0%{
    transform: translateY(0rem);
  } 
   50%{
    transform: translateY(0.3rem);
  }
  100%{
    transform: translateY(-0.3rem);
  }
`;
const StyledLoader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > span {
    display: block;
    width: 0.8rem;
    height: 0.8rem;

    border-radius: 50%;
    background-color: var(--color-grey-300);
    animation: ${animation} 1.05s ease-in-out infinite;
  }
  & > span:nth-child(2) {
    animation: ${animation} 1.1s ease-in-out infinite;
  }
  & > span:nth-child(3) {
    animation: ${animation} 1.15s ease-in-out infinite;
  }
`;

function DotLoader() {
  return (
    <StyledLoader>
      <span></span>
      <span></span>
      <span></span>
    </StyledLoader>
  );
}

export default DotLoader;
