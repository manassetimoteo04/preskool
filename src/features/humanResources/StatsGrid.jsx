import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Empty from "../../ui/Empty";
import EmployeeRecentLeaves from "./EmployeeRecentLeaves";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useEmployeeLeaves } from "./useEmployeeLeaves";
import Spinner from "../../ui/Spinner";
import { HiArchiveBox, HiArrowRight, HiPlus } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateEditLicenceForm from "./CreateEditLicenceForm";
import { useNavigate } from "react-router-dom";
const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
`;
const EmployeeRecentLeavesList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  cursor: pointer;
`;

const data01 = [
  {
    sector: "Administração",
    value: 5,
    color: "#d82b2b",
  },
  {
    sector: "Secretária",
    value: 12,
    color: "#c47150",
  },
  {
    sector: "Coordenação",
    value: 8,
    color: "#a16207",
  },
  {
    sector: "Professores",
    value: 20,
    color: "#378c92",
  },
  {
    sector: "Técnicos",
    value: 10,
    color: "#46ac46",
  },

  {
    sector: "Limpeza",
    value: 8,
    color: "#7e22ce",
  },
  {
    sector: "Segurança",
    value: 8,
    color: "#1dc8fc",
  },
];

const NavigateButton = styled.button`
  background: none;
  display: flex;
  border: none;
  align-items: center;
  gap: 1rem;
  &:hover {
    color: var(--color-brand-0);
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
function StatsGrid() {
  const navigate = useNavigate();
  const range = 7;

  const { data, isLoading } = useEmployeeLeaves(range);
  console.log(data, isLoading);
  return (
    <Modal>
      <StyledStatsGrid>
        <DetailBox>
          <header>
            <Row type="horizontal">
              <Heading as="h3">Licença nos ultimos 7 dias</Heading>
              <NavigateButton onClick={() => navigate("leaves")}>
                {" "}
                Todos <HiArrowRight />
              </NavigateButton>
            </Row>
          </header>
          {isLoading ? (
            <Spinner />
          ) : (
            <EmployeeRecentLeavesList>
              {data.length ? (
                data?.map((leave) => (
                  <EmployeeRecentLeaves leave={leave} key={leave.id} />
                ))
              ) : (
                <Empty>
                  <HiArchiveBox />
                  <p>Sem Licença nos últimos 7 dias</p>
                  <Modal.Open opens="create-license">
                    <Button>
                      <HiPlus /> Criar
                    </Button>
                  </Modal.Open>
                </Empty>
              )}
            </EmployeeRecentLeavesList>
          )}
        </DetailBox>{" "}
        <DetailBox>
          <header>
            <Heading as="h3">Funcionários por sector</Heading>
          </header>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                isAnimationActive={true}
                data={data01}
                nameKey="sector"
                dataKey="value"
                cx="30%"
                cy="50%"
                outerRadius={110}
                innerRadius={85}
                fill="#8884d8"
                paddingAngle={3}
              >
                {data01.map((entry) => (
                  <Cell
                    fill={entry.color}
                    stroke={entry.color}
                    key={entry.duration}
                  />
                ))}
              </Pie>
              <Legend
                verticalAlign="middle"
                align="right"
                width="30%"
                layout="vetical"
                iconSize={15}
                iconType="circle"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </DetailBox>
      </StyledStatsGrid>
      <Modal.Window name="create-license">
        <CreateEditLicenceForm hasUser={false} />
      </Modal.Window>
    </Modal>
  );
}

export default StatsGrid;
