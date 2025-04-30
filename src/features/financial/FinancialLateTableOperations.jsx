import styled from "styled-components";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

const StyledStudentOperations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
function FinancialLateTableOperations() {
  const filterOptions = [
    { value: "", label: "Todos" },
    { value: "pending", label: "Pendente" },
    { value: "late", label: "Atrasado" },
    { value: "salary", label: "Salário" },
    { value: "fee", label: "Propina" },
    { value: "employee", label: "Funcionários" },
    { value: "students", label: "Estudantes" },
  ];
  const sortOptions = [
    { value: "", label: "Ordernar/Classificar" },
    { value: "fullName-asc", label: "Nome (A-Z)" },
    { value: "fullName-desc", label: "Nome (Z-A)" },

    { value: "amount-asc", label: "Valor (0-1)" },
    { value: "amount-desc", label: "Valor (1-0)" },
    { value: "expire-asc", label: "Vencimento (0-1)" },
    { value: "expire-desc", label: "Vencimento (1-0)" },
  ];
  return (
    <StyledStudentOperations>
      <FlexBox>
        <Filter query="filter" options={filterOptions} />
        <Sort options={sortOptions} />
      </FlexBox>
    </StyledStudentOperations>
  );
}

export default FinancialLateTableOperations;
