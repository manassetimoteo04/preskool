import { HiOutlineEye } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import { useGrades } from "../settings/classesAndGrades/useGrades";
import styled from "styled-components";
import { generateClasseCode } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
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
function ClasseTableRow({ classe }) {
  const { data, isLoading } = useGrades(classe.gradeId);

  const navigate = useNavigate();
  return (
    <>
      <Table.Row>
        <StyledConcatedBox>
          {isLoading ? (
            <>
              <p>Carregando...</p> <span>Carregando...</span>
            </>
          ) : (
            <>
              <p>
                {data?.courseName} &mdash; {data?.gradeYear}
              </p>
              <span>
                {data?.gradeType === "highSchool"
                  ? "Ensino Médio"
                  : "Ensino Fundamental"}{" "}
                &mdash;{" "}
                {generateClasseCode(
                  classe.variation,
                  data?.gradeYear,
                  data?.courseName,
                  classe.period
                )}
              </span>
            </>
          )}
        </StyledConcatedBox>
        <span>{classe.description.slice(0, 30)}...</span>
        <span>{classe.period}</span>
        <span>{classe.capacity}</span>
        <span>{38}</span>
        <span>{classe.room}</span>
        <span>{classe.variation}</span>
        <Menus.Toggle menuId={classe.id} />
      </Table.Row>
      <Menus.Menu menuId={classe.id}>
        <Menus.List>
          <Menus.Button
            onClick={() => navigate(`/classes/${classe.id}`)}
            icon={<HiOutlineEye />}
          >
            Ver Turma
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </>
  );
}

export default ClasseTableRow;
