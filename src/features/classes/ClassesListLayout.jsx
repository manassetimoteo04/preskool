import styled from "styled-components";
import Table from "../../ui/Table";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import { useClasse } from "./useClasse";
import ClasseTableRow from "./ClasseTableRow";
import Menus from "../../ui/Menus";

const TableHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--color-grey-200);
`;
const StyledClass = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
`;

// const fakeData = [
//   {
//     capacity: "45",
//     description: "Aulas voltadas para reforço em Matemática e Ciências.",
//     gradeId: "0qhBUfTLphKhQwTCJNV2",
//     period: "Manhã",
//     room: "15",
//     students: [],
//     subjects: [],
//     type: "medium",
//     variation: "A",
//   },
//   {
//     capacity: "30",
//     description:
//       "Turma voltada ao desenvolvimento de habilidades de leitura e escrita.",
//     gradeId: "0qhBUfTLphKhQwTCJNV2",
//     period: "Tarde",
//     room: "22",
//     students: [],
//     subjects: [],
//     type: "medium",
//     variation: "B",
//   },
//   {
//     capacity: "50",
//     description:
//       "Classe de extensão focada em projetos de robótica e programação.",
//     gradeId: "0qhBUfTLphKhQwTCJNV2",
//     period: "Noite",
//     room: "LAB-3",
//     students: [],
//     subjects: [],
//     type: "medium",
//     variation: "C",
//   },
// ];

function ClassesListLayout() {
  const { classe, isLoading } = useClasse({});
  console.log(window.navigator.onLine, classe);
  if (isLoading) return <Spinner />;

  return (
    <StyledClass>
      <Table columns="2fr 3fr 1fr 1fr 1fr 1fr 1fr 4rem">
        <TableHeader>
          <Heading as="h2">Todas a Turmas</Heading>
        </TableHeader>
        <Table.Header>
          <span>Turma</span>
          <span>Descrição</span>
          <span>Período</span>
          <span>Capacidade</span>
          <span>Alunos</span>
          <span>Sala</span>
          <span>Variação</span>
          <span></span>
        </Table.Header>
        <Menus>
          <Table.Body
            data={classe}
            render={(cl) => <ClasseTableRow classe={cl} />}
          />
        </Menus>
      </Table>
    </StyledClass>
  );
}

export default ClassesListLayout;
