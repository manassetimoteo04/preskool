import styled, { keyframes } from "styled-components";

// const turn = keyframes`
// from{
//   transform: rotate(0deg);
//   animation-duration:0.5s;
// }
// to{
//   transform: rotate(360deg);
//   animation-duration:2s;

// }
// `;

// const StyledSpinnerContainer = styled.div`
//   width: 100%;
//   grid-row: 2/ -1;
//   display: flex;
//   padding: 5rem;
//   align-items: center;
//   justify-content: center;
// `;
// const StyledSpinner = styled.div`
//   width: 5.5rem;
//   height: 5.5rem;
//   border-radius: 50%;
//   border: 3px solid var(--color-brand-600);
//   border-bottom-color: transparent;
//   border-top-color: transparent;
//   animation: ${turn} 1s ease infinite;
//   z-index: 1;
// `;

// function Spinner() {
//   return (
//     <StyledSpinnerContainer>
//       <StyledSpinner />
//     </StyledSpinnerContainer>
//   );
// }
/* HTML: <div class="loader"></div> */

const l201 = keyframes`
0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
   `;
const l202 = keyframes`
  0%    {transform:scaleY(1)  rotate(0deg)}
  49.99%{transform:scaleY(1)  rotate(135deg)}
  50%   {transform:scaleY(-1) rotate(0deg)}
  100%  {transform:scaleY(-1) rotate(-135deg)}
 `;
const Spinner = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 3px solid var(--color-brand-700);
  animation: ${l201} 0.8s infinite linear alternate,
    ${l202} 1.6s infinite linear;
  margin: 5rem auto;
`;

export default Spinner;
