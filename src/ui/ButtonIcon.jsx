import styled from "styled-components";

const ButtonIcon = styled.button`
  background-color: var(--color-grey-100);

  color: inherit;
  border: none;
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-grey-200);
  }
  & > svg {
    font-size: 2.3rem;
  }
`;
export default ButtonIcon;
