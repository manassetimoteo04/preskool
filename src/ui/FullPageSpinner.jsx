import styled from "styled-components";
import Spinner from "./Spinner";

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
      <Spinner />
    </StyledFullSpinner>
  );
}

export default FullPageSpinner;
