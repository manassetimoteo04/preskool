import styled, { css } from "styled-components";

const StyledButtonsParentType = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr !important;
  gap: rem !important;
`;
const ButtonSmall = styled.button`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-700);
      color: var(--color-brand-0);
    `}
`;
function ButtonsParentType({ parent, setParent }) {
  return (
    <StyledButtonsParentType>
      <ButtonSmall
        active={parent === "father"}
        onClick={(e) => {
          e.preventDefault();
          setParent("father");
        }}
      >
        Pai
      </ButtonSmall>
      <ButtonSmall
        active={parent === "mother"}
        onClick={(e) => {
          e.preventDefault();
          setParent("mother");
        }}
      >
        Mãe
      </ButtonSmall>
      <ButtonSmall
        active={parent === "guardian"}
        onClick={(e) => {
          e.preventDefault();
          setParent("guardian");
        }}
      >
        Guardião
      </ButtonSmall>
    </StyledButtonsParentType>
  );
}

export default ButtonsParentType;
