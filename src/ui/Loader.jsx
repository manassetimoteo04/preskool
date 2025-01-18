import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0% {
    background-color: #FFF2;
    box-shadow: 32px 0 #FFF2, -32px 0 #FFF;
  }
  50% {
    background-color: #FFF;
    box-shadow: 32px 0 #FFF2, -32px 0 #FFF2;
  }
  100% {
    background-color: #FFF2;
    box-shadow: 32px 0 #FFF, -32px 0 #FFF2;
  }
`;

const Loader = styled.div`
  width: 4px;
  height: 3px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 32px 0 #fff, -32px 0 #fff;
  position: relative;
  animation: ${flash} 0.5s ease-out infinite alternate;
`;

export default Loader;
