import { useState } from "react";
import styled, { css } from "styled-components";
import { useUpdatePermissions } from "../features/humanResources/useUpdatePermissions";

const StyledToggle = styled.button`
  background-color: var(--color-grey-300);
  position: relative;
  width: 4rem;
  height: 2rem;
  border: none;
  border-radius: 50rem;
  &:focus {
    outline: none;
  }
  & > div {
    position: absolute;
    transition: all 0.2s ease;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    ${(props) =>
      props.active === "false"
        ? css`
            background-color: var(--color-grey-500);
            transform: translateX(0rem);
          `
        : css`
            transform: translateX(2rem);

            background-color: var(--color-brand-500);
          `};
    top: 0;
    left: 0;
    z-index: 2;
  }
`;
function ToggleButton({ defaultValue, updateField, updateId }) {
  const { updatePermission, isLoading } = useUpdatePermissions();
  const [active, setActive] = useState(defaultValue);
  function handleClick() {
    updatePermission({ field: updateField, value: !active, updateId });
    setActive((a) => !a);
  }
  return (
    <StyledToggle
      disabled={isLoading}
      active={`${active}`}
      onClick={handleClick}
    >
      <div></div>
    </StyledToggle>
  );
}

export default ToggleButton;
