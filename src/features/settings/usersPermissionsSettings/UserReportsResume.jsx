import { HiOutlineLogin } from "react-icons/hi";
import {
  HiOutlineCheckBadge,
  HiOutlineClock,
  HiOutlineUsers,
} from "react-icons/hi2";
import styled from "styled-components";

const StyledReportsResume = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 1px solid var(--color-grey-200);
`;

const ResumeBox = styled.div`
  &:not(:last-child) {
    border-right: 1px solid var(--color-grey-200);
  }
  padding: 1rem 2rem;
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-columns: 3rem 1fr;
  & > div > span {
    font-size: 1.2rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > svg {
    font-size: 2.4rem;
  }
`;
function UserReportsResume() {
  return (
    <StyledReportsResume>
      <ResumeBox>
        <HiOutlineUsers />
        <div>
          <span>Total Usuários</span>
          <p>300</p>
        </div>
      </ResumeBox>
      <ResumeBox>
        <HiOutlineCheckBadge />
        <div>
          <span>Total Activos</span>
          <p>300</p>
        </div>
      </ResumeBox>
      <ResumeBox>
        <HiOutlineLogin />
        <div>
          <span>Total Logs</span>
          <p>300</p>
        </div>
      </ResumeBox>
      <ResumeBox>
        <HiOutlineClock />
        <div>
          <span>Log Recente</span>
          <p>300</p>
        </div>
      </ResumeBox>
    </StyledReportsResume>
  );
}

export default UserReportsResume;
