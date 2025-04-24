import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Heading from "../../ui/Heading";
import styled from "styled-components";
const fakeData = [
  { label: "Jan 09", earnings: 480, expenses: 20 },
  { label: "Jan 10", earnings: 580, expenses: 100 },
  { label: "Jan 11", earnings: 550, expenses: 150 },
  { label: "Jan 12", earnings: 600, expenses: 50 },
  { label: "Jan 13", earnings: 700, expenses: 150 },
  { label: "Jan 14", earnings: 800, expenses: 150 },
  { label: "Jan 15", earnings: 700, expenses: 200 },
  { label: "Jan 16", earnings: 650, expenses: 200 },
  { label: "Jan 17", earnings: 600, expenses: 300 },
  { label: "Jan 18", earnings: 550, expenses: 100 },
  { label: "Jan 19", earnings: 700, expenses: 100 },
  { label: "Jan 20", earnings: 800, expenses: 200 },
  { label: "Jan 21", earnings: 700, expenses: 100 },
  { label: "Jan 22", earnings: 810, expenses: 50 },
  { label: "Jan 23", earnings: 950, expenses: 250 },
  { label: "Jan 24", earnings: 970, expenses: 100 },
  { label: "Jan 25", earnings: 900, expenses: 200 },
  { label: "Jan 26", earnings: 950, expenses: 300 },
  { label: "Jan 27", earnings: 850, expenses: 200 },
  { label: "Jan 28", earnings: 900, expenses: 100 },
  { label: "Jan 29", earnings: 800, expenses: 300 },
  { label: "Jan 30", earnings: 950, expenses: 200 },
  { label: "Jan 31", earnings: 1100, expenses: 300 },
  { label: "Feb 01", earnings: 1200, expenses: 400 },
  { label: "Feb 02", earnings: 1250, expenses: 300 },
  { label: "Feb 03", earnings: 1400, expenses: 450 },
  { label: "Feb 04", earnings: 1500, expenses: 500 },
  { label: "Feb 05", earnings: 1400, expenses: 600 },
  { label: "Feb 06", earnings: 1450, expenses: 400 },
];

const StyledChart = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  & > header {
    padding: 2rem;
  }
  & > div {
    padding: 2rem;
  }
`;
function EarnExpensesChart() {
  const isDarkMode = true;
  const colors = isDarkMode
    ? {
        earnings: { stroke: "#4f46e5", fill: "#4f46e5" },
        expenses: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        earnings: { stroke: "#4f46e5", fill: "#c7d2fe" },
        expenses: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };
  return (
    <StyledChart>
      <header>
        <Heading as="h2">Ganhos e Despesas</Heading>
      </header>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={fakeData}>
            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={colors.earnings.stroke}
                  stopOpacity={0.8}
                />
                <stop
                  offset="100%"
                  stopColor={colors.earnings.stroke}
                  stopOpacity={0}
                />
              </linearGradient>{" "}
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={colors.expenses.stroke}
                  stopOpacity={0.8}
                />
                <stop
                  offset="100%"
                  stopColor={colors.expenses.stroke}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="label"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              unit="kz"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <Tooltip />
            <CartesianGrid stroke="#92959936" vertical={false} />
            <Area
              type="linear" // sem curvas
              dataKey="earnings"
              stroke={colors.earnings.stroke}
              fill="url(#colorEarnings)" // sombra com degradê
              strokeWidth={2}
              dot={{
                r: 3,
                fill: colors.earnings.fill,
                stroke: colors.earnings.stroke,
              }}
              activeDot={{ r: 3 }}
            />
            <Area
              type="linear" // sem curvas
              dataKey="expenses"
              stroke={colors.expenses.stroke}
              fill="url(#colorExpenses)" // sombra com degradê
              strokeWidth={2}
              dot={{
                r: 3,
                fill: colors.expenses.stroke,
                stroke: "black",
                strokeWidth: 1,
              }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </StyledChart>
  );
}

export default EarnExpensesChart;
