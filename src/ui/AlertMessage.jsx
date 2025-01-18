import { HiOutlineExclamationCircle } from "react-icons/hi2";
import styled from "styled-components";

const StyledAlert = styled.div`
  padding: 1rem;
  background-color: var(--color-grey-200);
  display: grid;
  grid-template-columns: 3rem 1fr;
  border-radius: var(--border-radius-lg);
  align-items: center;
  color: var(--color-yellow-700);
  gap: 1rem;
  & > svg {
    font-size: 3rem;
  }
`;
function AlertMessage({ children }) {
  return (
    <StyledAlert>
      <HiOutlineExclamationCircle />
      <div>{children}</div>
    </StyledAlert>
  );
}

export default AlertMessage;
