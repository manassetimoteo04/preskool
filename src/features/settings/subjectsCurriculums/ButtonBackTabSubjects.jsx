import styled from "styled-components";
import { useSubjectsTab } from "./SubjectTabContext";
import { HiArrowLeft } from "react-icons/hi";

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
function ButtonBackTabSubjects() {
  const { setCurrentTab, subjectDetail, setSubjectDetail } = useSubjectsTab();
  function handleClick() {
    subjectDetail ? setSubjectDetail("") : setCurrentTab("");
  }
  return (
    <StyledButton onClick={handleClick}>
      <HiArrowLeft />
    </StyledButton>
  );
}

export default ButtonBackTabSubjects;
