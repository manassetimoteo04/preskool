import { HiOutlineExclamationCircle } from "react-icons/hi2";
import styled, { css } from "styled-components";

const Error = styled.span`
  color: var(--color-red-700);
  font-size: 1.2rem;
  position: absolute;
  bottom: -1.5rem;
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
function InputRow({ label, error, children, spread }) {
  return (
    <StyledInputRow spread={spread} error={error}>
      <label htmlFor={children?.props?.id}>{label}</label>
      {children}

      {error && (
        <Error>
          <HiOutlineExclamationCircle />
          {error}
        </Error>
      )}
    </StyledInputRow>
  );
}

export default InputRow;
