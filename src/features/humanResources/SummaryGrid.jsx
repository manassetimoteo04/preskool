import styled from "styled-components";
import SummaryBox from "../../ui/SummaryBox";
import {
  HiOutlineSquaresPlus,
  HiOutlineUserCircle,
  HiOutlineUsers,
} from "react-icons/hi2";
import Heading from "../../ui/Heading";
import { useGetEmployees } from "./useGetEmployees";
const StyledSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

function SummaryGrid() {
  const { employees } = useGetEmployees();
  return (
    <StyledSummaryGrid>
      <SummaryBox icon={<HiOutlineUsers />} color="yellow">
        <small>Total funcionários</small>
        <Heading as="h2">{employees?.length}</Heading>
      </SummaryBox>{" "}
      <SummaryBox icon={<HiOutlineUserCircle />} color="indigo">
        <small>Novos funcionários</small>
        <Heading as="h2">23009</Heading>
      </SummaryBox>{" "}
      <SummaryBox icon={<HiOutlineSquaresPlus />} color="blue">
        <small>Sectores</small>
        <Heading as="h2">23009</Heading>
      </SummaryBox>
    </StyledSummaryGrid>
  );
}

export default SummaryGrid;
