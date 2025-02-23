import styled, { css } from "styled-components";

const DetailNavButton = styled.button`
  background: none;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  &:focus {
    outline: none;
  }
  & > svg {
    font-size: 2.2rem;
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
  ${(props) =>
    props.activetab === "true" &&
    css`
      border-bottom-color: var(--color-brand-700);
      background-color: var(--color-grey-100);
    `}
`;
export default DetailNavButton;
