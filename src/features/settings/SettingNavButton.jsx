import { HiChevronRight } from "react-icons/hi";
import styled from "styled-components";

const StyledSettingNavButton = styled.button`
  background: none;
  padding: 2rem;
  border: 1px solid var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--border-radius-sm);
  &:hover {
    background: var(--color-grey-100);
  }
`;
function SettingNavButton({ children, setTab }) {
  return (
    <StyledSettingNavButton onClick={setTab}>
      <span>{children}</span>
      <span>
        <HiChevronRight />
      </span>
    </StyledSettingNavButton>
  );
}

export default SettingNavButton;
