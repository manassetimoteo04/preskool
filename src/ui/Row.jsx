import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "vertical" &&
    css`
      gap: 4rem;
      flex-direction: column;
    `}

  ${(props) =>
    props.type === "horizontal" &&
    css`
      gap: 2rem;
      align-items: center;
      justify-content: space-between;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};
export default Row;
