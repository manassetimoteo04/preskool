import styled from "styled-components";

const StyledSummaryBox = styled.div`
  display: flex;
  gap: 2rem;
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  padding: 2rem;
  align-items: center;
  border-radius: var(--border-radius-sm);
  & > div {
    display: flex;
    flex-direction: column;
  }
`;
const StyledIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-700);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-grey-200);

  & > svg {
    font-size: 4rem;
    color: var(--color-brand-0);
  }
`;
function SummaryBox({ icon, color, children }) {
  return (
    <StyledSummaryBox>
      <StyledIcon color={color}>{icon}</StyledIcon>
      <div>{children}</div>
    </StyledSummaryBox>
  );
}

export default SummaryBox;
