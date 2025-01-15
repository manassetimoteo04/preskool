import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var();
  & > svg {
    font-size: 2rem;
  }

  &:active {
    transform: scale(99%);
  }
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.variation === "primary" &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-0);

      &:hover {
        background-color: var(--color-brand-700);
      }
    `}

  ${(props) =>
    props.variation === "secondary" &&
    css`
      background-color: var(--color-grey-200);
      color: var(--color-grey-700);

      &:hover {
        background-color: var(--color-grey-300);
      }
    `}
     ${(props) =>
    props.variation === "danger" &&
    css`
      background-color: var(--color-red-700);
      color: var(--color-brand-0);

      &:hover {
        background-color: var(--color-grey-800);
      }
    `}


  ${(props) =>
    props.size === "small" &&
    css`
      padding: 0.5rem !important;
      border: none;
      border-radius: var(--border-radius-sm);
      display: flex;
      align-items: center;
      gap: 0.1rem;
    `}
`;

function Button({
  children,
  onClick,
  variation = "primary",
  size = "medium",
  disabled,
  type,
}) {
  return (
    <StyledButton
      onClick={onClick}
      variation={variation}
      size={size}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
