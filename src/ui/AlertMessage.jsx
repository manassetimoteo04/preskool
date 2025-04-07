import { HiOutlineExclamationCircle } from "react-icons/hi2";
import styled from "styled-components";

const StyledAlert = styled.div`
  padding: 2rem;
  background-color: var(--color-grey-100);
  display: grid;
  grid-template-columns: ${(props) => (!props.icon ? "3rem 1fr" : " 1fr")};
  border-radius: var(--border-radius-lg);
  color: var(--color-yellow-700);
  gap: 2rem;
  & > svg {
    font-size: 3rem;
  }
`;
function AlertMessage({ children, icon = false }) {
  return (
    <StyledAlert icon={icon}>
      {!icon && <HiOutlineExclamationCircle />}
      <div>{children}</div>
    </StyledAlert>
  );
}

export default AlertMessage;
