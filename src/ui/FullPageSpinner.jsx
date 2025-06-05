import styled from "styled-components";
import Logo from "./Logo";

const StyledFullSpinner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`;
function FullPageSpinner() {
  return (
    <StyledFullSpinner>
      <Logo pulse={true} />
    </StyledFullSpinner>
  );
}

export default FullPageSpinner;
