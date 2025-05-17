import { HiArrowLeft } from "react-icons/hi";
import styled from "styled-components";
import { useClassContext } from "./ClasseContext";

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-sm);
  &:hover {
    background-color: var(--color-grey-100);
  }
`;
function ButtonBackGrades() {
  const { setCurrentTab } = useClassContext();
  function handleClick() {
    setCurrentTab("");
  }
  return (
    <StyledButton onClick={handleClick}>
      <HiArrowLeft />
    </StyledButton>
  );
}

export default ButtonBackGrades;
