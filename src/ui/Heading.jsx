import styled, { css } from "styled-components";

const StyledHeading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.4rem;
      font-weight: 600;
    `}
`;

function Heading({ children, as }) {
  return <StyledHeading as={as}>{children}</StyledHeading>;
}

export default Heading;
