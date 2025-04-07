import {
  HiOutlineCalendarDays,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlinePencil,
  HiOutlineTrash,
  HiUser,
} from "react-icons/hi2";
import styled from "styled-components";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import AlertMessage from "../../ui/AlertMessage";
import Button from "../../ui/Button";
import { useEmployeeLeave } from "./useEmployeLeave";
import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useEmployee } from "./useEmployee";
import { calcDaysDiference, formatDate } from "../../utils/helpers";

const StyledLicenseBox = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  & > header {
    background-color: var(--color-indigo-100);
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledContentBox = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const StyledContentRow = styled.div`
  display: flex;
  align-items: center;
  & > span {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  display: flex;
  gap: 1rem;

  & > div > div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2rem;
  margin-top: 2rem;
  & > div {
    display: flex;
    gap: 2rem;
  }
  & > span {
    font-size: 1.4rem;
  }
`;
function LicenseBox() {
  const { leaveId } = useParams();
  const { data: leave, isLoading } = useEmployeeLeave(leaveId);
  const {
    endDate,
    startDate,
    employeeId,
    licenseType,
    status,
    createdAt,
    description,
  } = leave || {};

  const {
    data: { fullName, emailAddress, idCardNumber } = {},
    isLoading: isLoadingEmployee,
  } = useEmployee(employeeId);
  if (isLoading || isLoadingEmployee) return <Spinner />;
  return (
    <StyledLicenseBox>
      <header>
        <h3>Licença de Funcionário #23</h3>

        <span>
          {formatDate(new Date(startDate))} &mdash;{" "}
          {formatDate(new Date(endDate))}
        </span>
      </header>
      <StyledContentBox>
        <StyledContentRow>
          <Row type="horizontal">
            <div>
              <HiUser />
              <span>{fullName}</span>
              &bull;
              <span>{emailAddress}</span>
              &bull;
              <span>ID {idCardNumber}</span>
            </div>
            <Tag type="active">{status}</Tag>
          </Row>
        </StyledContentRow>
        <StyledContentRow>
          <HiOutlineChatBubbleBottomCenterText />
          <span>Descrição</span>
          <p>{description}</p>
        </StyledContentRow>{" "}
        <StyledContentRow>
          <HiOutlineCheckCircle />
          <span>Motivo</span>
          <p>{licenseType}</p>
        </StyledContentRow>
        <StyledContentRow>
          <HiOutlineCalendarDays />
          <span>Duração</span>
          <p>{calcDaysDiference(endDate, startDate)} Dias restante</p>
        </StyledContentRow>
        <AlertMessage icon={true}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          autem. Deserunt molestias sed dolor itaque
        </AlertMessage>
        <StyledButtonsGroup>
          <span>
            Emitido aos {formatDate(Date(createdAt))}, as{" "}
            {new Date(Date(createdAt)).getHours()} :{" "}
            {new Date(Date(createdAt)).getMinutes()}
          </span>

          <div>
            <Button>
              <HiOutlinePencil /> Editar Licença
            </Button>
            <Button variation="danger">
              <HiOutlineTrash /> Excluir Licença
            </Button>
          </div>
        </StyledButtonsGroup>
      </StyledContentBox>
    </StyledLicenseBox>
  );
}

export default LicenseBox;
