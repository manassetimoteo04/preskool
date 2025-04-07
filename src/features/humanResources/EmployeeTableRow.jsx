import styled from "styled-components";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";
import { useNavigate } from "react-router-dom";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi";
import { usePermissions } from "./usePermissions";
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
function EmployeeTableRow({ employee }) {
  const navigate = useNavigate();
  const { permissions: { status } = {}, isLoading } = usePermissions(
    employee.id
  );
  return (
    <Table.Row key={employee.id}>
      <FirstLetterBox>
        <span>{employee?.fullName?.[0]}</span>
      </FirstLetterBox>
      <StyledConcatedBox>
        <p>{employee.fullName}</p>
        <span>{employee.emailAddress}</span>
      </StyledConcatedBox>
      <StyledConcatedBox>
        <p>{employee?.qualification}</p>
        <span>{employee?.qualificationCourse}</span>
      </StyledConcatedBox>
      <span>{employee?.sectorId}</span>
      <span>12 Jan 2025</span>
      {isLoading ? (
        <span>Buscando...</span>
      ) : (
        <Tag type={status ? "active" : "inactive"}>
          {status ? "Ativo" : "Inactivo"}
        </Tag>
      )}
      <Menus.Toggle menuId={employee.id} />
      <Menus.Menu menuId={employee.id}>
        <Menus.List>
          <Menus.Button
            onClick={() => navigate(`employee/${employee.id}`)}
            icon={<HiEye />}
          >
            Ver Detalhes
          </Menus.Button>
          <Menus.Button
            onClick={() => navigate(`employee/${employee.id}/edit`)}
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

export default EmployeeTableRow;
