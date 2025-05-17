import { HiOutlineExclamationCircle } from "react-icons/hi2";
import styled, { css } from "styled-components";

const Error = styled.span`
  color: var(--color-red-700);
  ${(props) =>
    !props.isGrid &&
    css`
      font-size: 1.2rem;
      position: absolute;
      bottom: -1.5rem;
    `}
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-weight: 500;
`;
const StyledInputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  ${(props) =>
    props.spread &&
    css`
      grid-column: 1/-1;
    `}

  ${(props) =>
    props.isGrid &&
    css`
      display: grid;
      gap: 2rem;
      grid-template-columns: 15rem 1fr 1fr;
      align-items: center;
    `}
  ${(props) =>
    props.error &&
    css`
      & > input:focus {
        outline-color: var(--color-red-700);
      }
      & > select:focus {
        outline-color: var(--color-red-700);
      }
    `}
`;
function InputRow({ label, error, children, spread, isGrid = false }) {
  return (
    <StyledInputRow spread={spread} error={error} isGrid={isGrid}>
      <label htmlFor={children?.props?.id}>{label}</label>
      {children}

      {error && (
        <Error isGrid={isGrid}>
          {!isGrid && <HiOutlineExclamationCircle />}
          {error}
        </Error>
      )}
    </StyledInputRow>
  );
}

export default InputRow;
