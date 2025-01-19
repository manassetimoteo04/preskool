import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import { HiArrowRight } from "react-icons/hi2";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import HiringRow from "./HiringRow";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
`;
const HiringList = styled.div`
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

function StatsGrid() {
  return (
    <StyledStatsGrid>
      <DetailBox>
        <header>
          <Row type="horizontal">
            <Heading as="h3">Contratações & Demissões</Heading>
            <Button size="small">
              todos
              <HiArrowRight />
            </Button>
          </Row>
        </header>
        <HiringList>
          <HiringRow />
          <HiringRow />
          <HiringRow />
          <HiringRow />
        </HiringList>
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
  );
}

export default StatsGrid;
