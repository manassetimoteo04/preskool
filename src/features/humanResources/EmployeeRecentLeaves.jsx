/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Tag from "../../ui/Tag";
import styled from "styled-components";
import SmallUserImg from "../../ui/SmallUserImg";
import { calcDaysDiference, formatDate } from "../../utils/helpers";
// import { calcDaysDiference, formatDate } from "../../utils/helpers";

const StyledEmployeeRecentLeave = styled(Link)`
  display: grid;
  grid-template-columns: 4rem 2.5fr 1fr 1fr 1fr;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  &:hover {
    background-color: var(--color-grey-50);
  }
`;

const StyledConcatedBox = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: 500;
  }
  & > span {
    font-size: 1.2rem;
  }
`;
const FirstLetterBox = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--color-grey-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
function EmployeeRecentLeaves({ leave }) {
  return (
    <>
      <StyledEmployeeRecentLeave to={`leaves/${leave.id}`}>
        <FirstLetterBox>
          <SmallUserImg src="/default-user.jpg" />
        </FirstLetterBox>
        <StyledConcatedBox>
          <p>{leave?.employee?.fullName}</p>
          <span>{leave?.employee?.emailAddress}</span>
        </StyledConcatedBox>

        <span>{leave?.licenseType}</span>
        <span>{calcDaysDiference(leave.endDate, leave.startDate)} dia(s)</span>

        <Tag type={leave.status === "onleave" ? "active" : "inactive"}>
          {leave.status}
        </Tag>
      </StyledEmployeeRecentLeave>
    </>
  );
}

export default EmployeeRecentLeaves;
