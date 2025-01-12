import styled, { css } from "styled-components";

const Tag = styled.span`
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.2rem 1rem;
  border-radius: 100px;
  border-radius: 100px;
  ${(props) =>
    props.type === "active" &&
    css`
      background-color: var(--color-yellow-100);
      color: var(--color-yellow-700);
    `}

  ${(props) =>
    props.type === "inactive" &&
    css`
      background-color: var(--color-red-100);
      color: var(--color-red-700);
    `}

    ${(props) =>
    props.type === "pending" &&
    css`
      background-color: var(--color-indigo-100);
      color: var(--color-indigo-700);
    `}
`;

export default Tag;
