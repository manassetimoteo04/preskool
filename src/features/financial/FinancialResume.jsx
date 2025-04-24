import styled from "styled-components";
import SummaryBox from "../../ui/SummaryBox";
import Heading from "../../ui/Heading";
import { HiOutlineCreditCard, HiOutlineCurrencyDollar } from "react-icons/hi2";

const StyledFinancialResume = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
function FinancialResume() {
  return (
    <StyledFinancialResume>
      <SummaryBox icon={<HiOutlineCreditCard />}>
        <Heading as="h4">Saldo Actual</Heading>
        <Heading as="h2">33.540.090 Kz</Heading>
      </SummaryBox>
      <SummaryBox icon={<HiOutlineCurrencyDollar />}>
        <Heading as="h4">Receita Mensal</Heading>
        <Heading as="h2">2.000.000 Kz</Heading>
      </SummaryBox>

      <SummaryBox icon={<HiOutlineCreditCard />}>
        <Heading as="h4">Inadiplência</Heading>
        <Heading as="h2">8% (18 alunos)</Heading>
      </SummaryBox>
    </StyledFinancialResume>
  );
}

export default FinancialResume;
