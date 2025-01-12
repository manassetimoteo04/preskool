import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const spin = keyframes`
to {
    transform: rotate(1turn)
  }

`;
const SpinnerMini = styled(BiLoaderAlt)`
  animation: ${spin} 1s linear infinite;
`;

export default SpinnerMini;
