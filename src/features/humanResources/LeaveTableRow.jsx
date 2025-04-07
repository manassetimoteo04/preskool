import styled from "styled-components";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";
import { useNavigate } from "react-router-dom";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi";
import { calcDaysDiference, formatDate } from "../../utils/helpers";
import SmallUserImg from "../../ui/SmallUserImg";
// import { formatDate } from "../../utils/helpers";
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
function LeaveTableRow({ leave }) {
  const navigate = useNavigate();
  return (
    <Table.Row key={leave.id}>
      <FirstLetterBox>
        <SmallUserImg src="/default-user.jpg" />
      </FirstLetterBox>
      <StyledConcatedBox>
        <p>{leave?.employee?.fullName}</p>
        <span>{leave?.employee?.emailAddress}</span>
      </StyledConcatedBox>

      <span>{leave?.licenseType}</span>
      <span>{formatDate(new Date(leave.startDate))}</span>
      <span>{calcDaysDiference(leave.endDate, leave.startDate)} dia(s)</span>

      <Tag type={leave.status === "onleave" ? "active" : "inactive"}>
        {leave.status}
      </Tag>
      <Menus.Toggle menuId={leave.id} />
      <Menus.Menu menuId={leave.id}>
        <Menus.List>
          <Menus.Button
            onClick={() => navigate(`${leave.id}`)}
            icon={<HiEye />}
          >
            Ver Detalhes
          </Menus.Button>
          <Menus.Button
            onClick={() => navigate(`leave/${leave?.id}/edit`)}
            icon={<HiPencil />}
          >
            Editar
          </Menus.Button>
          <Menus.Button icon={<HiTrash />}>Deletar </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default LeaveTableRow;
