import { Link } from "react-router-dom";
import Tag from "../../ui/Tag";
import styled from "styled-components";

const StyledEmployeeRecentLeave = styled(Link)`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem 2rem;
  &:hover {
    background-color: var(--color-grey-50);
  }
  & > span {
    width: 4rem;
    height: 4rem;
    background-color: var(--color-brand-700);
    border-radius: var(--border-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      font-size: 2rem;
    }
  }
  & > div {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    width: 100%;
    justify-content: center;
    align-items: center;
    & > span {
      font-size: 1.4rem;
    }
  }
`;
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
function EmployeeRecentLeaves() {
  return (
    <>
      <StyledEmployeeRecentLeave to="leaves">
        <Avatar src="/default-user.jpg" />
        <div>
          <span>Doença</span>
          <span>Lorem ipsum dolor sit amet...</span>
          <Tag type="pending">Aprovado</Tag>
          <span>Há dois dias</span>
        </div>
      </StyledEmployeeRecentLeave>
    </>
  );
}

export default EmployeeRecentLeaves;
